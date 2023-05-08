import {Misskey_Token, Misskey_Instance, api , boot , timeout } from "./init.js";
import {CreateRandomNote} from "./lib/random_note.js";
import {Notify} from "./lib/notify.js";
import {pressure} from "./lib/pressure.js";

if (boot){
    Notify();
    pressure()
    setInterval(() => {
        CreateRandomNote();
    }, timeout);
}