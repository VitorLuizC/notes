import { v4 } from "uuid";
import updateNotes from "./updateNotes.mjs";

async function run() {
  await updateNotes("➕ add new note", (notes) => {
    const newNote = {
      id: v4(),
      note: process.env.NOTE,
      createdAt: new Date().toISOString(),
    };

    return [...notes, newNote];
  });
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
