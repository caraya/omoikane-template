import { SocketStream } from '@fastify/websocket';
import { FastifyRequest } from 'fastify';

// A simple in-memory store for active connections.
// In production, you would use Redis Pub/Sub to scale across nodes.
// Using 'any' for socket type for simplicity, ideally stricter types from ws/fastify-websocket
const connections = new Set<any>();

export abstract class BaseChannel {
  protected connection: any;
  protected req: FastifyRequest;

  constructor(connection: SocketStream, req: FastifyRequest) {
    this.connection = connection.socket;
    this.req = req;
    connections.add(this.connection);

    this.connection.on('close', () => connections.delete(this.connection));
  }

  abstract handle(message: any): Promise<void>;

  // Broadcast to all connected clients in this channel
  static broadcast(data: any) {
    connections.forEach(socket => {
      if (socket.readyState === 1) { // OPEN
        socket.send(JSON.stringify(data));
      }
    });
  }
}
