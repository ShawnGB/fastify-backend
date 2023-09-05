import Fastify from 'fastify';
import { users } from './routes/users';

const app = Fastify({
  logger: true,
});

// Run the server!

const start = async () => {
  app.register(users, { prefix: 'api/users' });
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
