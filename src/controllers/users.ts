import { FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';

interface IdParams {
  id: string;
}

interface UserRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  id?: string;
}

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getUser = async (request: FastifyRequest<{ Params: IdParams }>) => {
  const { id } = request.params;
  if (!id) return;

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
};

const createUser = async (request: FastifyRequest) => {
  const { firstName, lastName, email } = request.body as UserRequestBody;

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
    },
  });

  return user;
};

const updateUser = async (request: FastifyRequest) => {
  const { id, firstName, lastName, email } = request.body as UserRequestBody;

  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      email,
    },
  });

  return user;
};

const deleteUser = async (request: FastifyRequest<{ Params: IdParams }>) => {
  const { id } = request.params;
  if (!id) return;

  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
};

export { getAllUsers, getUser, createUser, updateUser, deleteUser };
