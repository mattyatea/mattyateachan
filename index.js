import WebSocket from "ws";
global.WebSocket = WebSocket;
import {Misskey_Token, Misskey_Instance, api} from "./init.js";
import {CreateRandomNote} from "./lib/random_note.js";
import {Notify} from "./lib/notify.js";

if (Misskey_Token == undefined || Misskey_Instance == undefined) {
    console.log("\x1b[31m[Error] Token is not set.\x1b[0m");
    process.exit(0);
}else{
    const i = await api.request('i');
    console.log(`\x1b[32m[Info] Account Name: ${JSON.stringify(i.name).replace( /"/g , "" )}`);
    console.log(`[Info] Account ID: @${JSON.stringify(i.username).replace( /"/g , "" )}@${Misskey_Instance}\x1b[0m`);
    Notify();
}