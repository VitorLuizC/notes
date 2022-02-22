import updateNotes from "./updateNotes.mjs";

async function run() {
  await updateNotes("⬆️ update note", (notes) => {
    return notes.map((note) => {
      if (note.id !== process.env.NOTE_ID) {
        return note;
      }

      return {
        ...note,
        content: process.env.NOTE,
        updatedAt: new Date().toISOString(),
      };
    });
  });
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
