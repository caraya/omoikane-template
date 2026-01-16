import { Queue, Worker, JobsOptions, Job } from 'bullmq';
import IORedis from 'ioredis';

// Shared connection to avoid creating too many connections
export const redisConnection = new IORedis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '63790'),
  maxRetriesPerRequest: null,
});

export abstract class BaseJob<T = any> {
  private queue: Queue;
  private worker: Worker;

  constructor(public queueName: string) {
    this.queue = new Queue(queueName, { connection: redisConnection });

    this.worker = new Worker(queueName, async (job: Job) => {
      try {
        await this.handle(job.data);
      } catch (error) {
        console.error(`Failed to process job ${job.id} in ${queueName}:`, error);
        throw error;
      }
    }, { connection: redisConnection });

    this.worker.on('failed', (job, err) => {
      console.error(`Job ${job?.id} failed in ${queueName} with error ${err.message}`);
    });
  }

  abstract handle(data: T): Promise<void>;

  async dispatch(data: T, options?: JobsOptions) {
    await this.queue.add(this.queueName, data, options);
  }
}
