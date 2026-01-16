import Fastify from 'fastify';
import { MikroORM } from '@mikro-orm/core';
import config from './config/mikro-orm.config';
import multipart from '@fastify/multipart';
import websocket from '@fastify/websocket';
import secureSession from '@fastify/secure-session';
import fs from 'fs';
import path from 'path';

const app = Fastify({
  logger: true,
});

const start = async () => {
  try {
    // Database
    const orm = await MikroORM.init(config);
    // ensure database is connected
    const isConnected = await orm.isConnected();
    if (isConnected) {
        console.log('Database connected');
    }

     // Plugins
    await app.register(multipart);
    await app.register(websocket);
    
    // Secure session requires key. In a real app this should be from env or file
    // Using a hardcoded secret for the template to work out of the box (with warning)
    await app.register(secureSession, {
        secret: 'averylongsecretkeythatisrequiredforsecuresessiontofunctionproperly',
        salt: 'mq9hDxBVDbspDR6n',
        cookie: {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        }
    });

    // API Routes
    app.get('/api/health', async () => {
      return { status: 'ok', framework: 'omoikane' };
    });

    // Websocket
    app.register(async function (fastify) {
      fastify.get('/ws', { websocket: true }, (connection, req) => {
        connection.socket.on('message', message => {
          connection.socket.send(`Echo: ${message}`);
        });
      });
    });

    // Start
    const port = parseInt(process.env.PORT || '3000');
    await app.listen({ port, host: '0.0.0.0' });
    console.log(`Server listening on http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
