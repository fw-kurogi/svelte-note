import type { Note } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findAll = async (): Promise<Note[]> => {
  return prisma.note.findMany();
};

export const findOne = async (id: number): Promise<Note | null> => {
  return prisma.note.findFirst({
    where: { id }
  });
};

export const create = async (title: string, content: string): Promise<Note | null> => {
  return prisma.note.create({
    data: {
      title,
      content
    }
  });
};

export const update = async (id: number, title: string, content: string): Promise<Note> => {
  return prisma.note.update({
    where: { id },
    data: {
      title: title,
      content: content
    }
  });
};

export const remove = async (id: number): Promise<Note> => {
  return prisma.note.delete({
    where: { id }
  });
};
