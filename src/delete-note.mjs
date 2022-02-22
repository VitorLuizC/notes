import updateNotes from "./updateNotes.mjs";

async function run() {
  await updateNotes("➖ remove note", (notes) => {
    return notes.filter((note) => {
      return note.id !== process.env.NOTE_ID;
    });
  });
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
