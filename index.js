import {Misskey_Token, Misskey_Instance, api , boot , timeout } from "./init.js";
import {CreateRandomNote} from "./lib/random_note.js";
import {Notify} from "./lib/notify.js";


if (boot){
    Notify();
    console.log("\x1b[32m[Info] Create Note! \n[Info] NoteId:", await CreateRandomNote());
    setInterval(() => {
        CreateRandomNote();
    }, timeout);
}