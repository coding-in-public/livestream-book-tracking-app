import type { APIRoute } from "astro";
import { Books, db } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  await db.insert(Books).values({
    title: data.title,
    author_key: data.authorid,
    author_name: data.author,
    key: data.key,
  });

  return new Response(null);
};
