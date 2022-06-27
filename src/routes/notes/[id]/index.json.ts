import {findOne, remove} from '../../../models/note.server';
import type {RequestEvent} from "@sveltejs/kit/types/private";

export const get = async ({ params }: RequestEvent<{id: string}>) => {
  const note = await findOne(Number(params.id));

  if (note) {
    return {
      body: { note }
    };
  }

  return {
    status: 404
  };
};

export const del = async ({ params }: RequestEvent<{id: string}>) => {
  const res = await remove(Number(params.id))

  if (res) {
    return {
      body: { ...res }
    };
  }
  return {
    status: 404
  };
}
