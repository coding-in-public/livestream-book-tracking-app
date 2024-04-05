import type { APIRoute } from "astro";
import { Books, db, eq } from "astro:db";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const bookId = url.searchParams.get("id");

  if (bookId) {
    const singleBook = await db
      .select()
      .from(Books)
      .where(eq(Books.key, bookId));
    return new Response(JSON.stringify(singleBook), {
      status: 200,
    });
  }
  const allBooks = await db.select().from(Books);
  return new Response(JSON.stringify(allBooks));
};
