import { column, defineDb, defineTable } from "astro:db";

const Books = defineTable({
  columns: {
    key: column.text({ primaryKey: true }),
    title: column.text(),
    author_key: column.text(),
    author_name: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Books },
});
