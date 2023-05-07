import {rand_vocabulary,api} from "../init.js";
const note_text = rand_vocabulary[Math.floor(Math.random() * rand_vocabulary.length)];
export async function CreateRandomNote() {
    console.log("\x1b[32m[Info] Creating a note...\x1b[0m");
    console.log(`\x1b[32m[Info] Note: ${note_text}\x1b[0m`);
    return await api.request('notes/create', {visibility:"home" ,text: note_text});
}