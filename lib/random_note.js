import {api} from "../init.js";
import {rand_vocabulary} from "../vocabulary.js";
const note_text = rand_vocabulary[Math.floor(Math.random() * rand_vocabulary.length)];
export async function CreateRandomNote() {
        console.log("\x1b[32m[Info] Creating a note...\x1b[0m");
        const result =await api.request('notes/create', {visibility: "home", text: note_text});
        return result.createdNote.id;
}