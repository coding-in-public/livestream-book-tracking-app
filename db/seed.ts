import { Books, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Books).values([
    {
      key: "123",
      title: "Title1",
      author_key: "123124",
      author_name: "Cool Guy",
    },
  ]);
}
