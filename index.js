import {Misskey_Token, Misskey_Instance, api , boot , timeout } from "./init.js";
import {CreateRandomNote} from "./lib/random_note.js";
import {Notify} from "./lib/notify.js";


if (boot){
    Notify();
    setInterval(() => {
        CreateRandomNote();
    }, timeout);
}