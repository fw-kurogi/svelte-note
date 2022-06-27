import {create, findAll} from '$models/note.server';
import type {RequestEvent} from "@sveltejs/kit/types/private";

export const get = async () => {
  const notes = await findAll();

  if (notes) {
    return {
      body: { notes }
    };
  }

  return {
    status: 404
  };
};

export const post = async ({ request }: RequestEvent) => {
  const data = await request.json();
  const res = await create(data.title, data.content)

  if (res) {
    return {
      body: { ...res }
    };
  }
  return {
    status: 404
  };
};
