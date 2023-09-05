import { FastifyInstance } from 'fastify';
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/users';

const user = {
  firstName: { type: 'string' },
  lastName: { type: 'string' },
  email: { type: 'string', format: 'email' },
};

const usersOpt = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: user,
      },
    },
  },
  handler: getAllUsers,
};

const userOpt = {
  schema: {
    response: {
      200: user,
    },
  },
  handler: getUser,
};

const createUserOpt = {
  schema: {
    response: {
      201: user,
    },
    body: {
      type: 'object',
      required: ['firstName', 'lastName', 'email'],
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string', format: 'email' },
      },
    },
  },
  handler: createUser,
};

const updateUserOpt = {
  schema: {
    response: {
      200: user,
    },
    body: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string', format: 'email' },
      },
    },
  },
  handler: updateUser,
};

const deleteUserOpt = {
  schema: {
    response: {
      200: user,
    },
  },
  handler: deleteUser,
};

export const users = async (app: FastifyInstance) => {
  // get all users
  app.get('/', usersOpt);

  // get single usrt by id
  app.get('/:id', userOpt);

  // add a user
  app.post('/', createUserOpt);

  // update a user
  app.patch('/:id', updateUserOpt);

  // delete a user
  app.delete('/:id', deleteUserOpt);
};
