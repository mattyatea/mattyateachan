import * as dotenv from "dotenv";
import * as Misskey from "misskey-js";
import WebSocket from "ws";
import {Notify} from "./lib/notify.js";
dotenv.config();
export let boot = 0;
export const emotion_1 =["つらい","辛い","苦","くるしい","泣"];//つらみ
export const emotion_2 =["てんさい","天才","褒めて"];//ほめられたい
export const emotion_1_reply =["大丈夫...?","よしよし...","私がぎゅーするよ...?"];
export const emotion_2_reply =["すごい！！","さすが！！","天才かも？？！？！！！","すごすぎる！！！！べろもぐ！！！！"];
export const rand_vocabulary= ["うにゃーん","うにょーん","かわいいおにゃのこたべたい","べろべろべろべろべろべろ","もぐ...","かわいいおにゃのこおいしかった"]
export const Misskey_Token= process.env.TOKEN;
export const Misskey_Instance= process.env.INSTANCE;
export const api = new Misskey.api.APIClient({
    origin: "https://"+Misskey_Instance,
    credential: Misskey_Token,
});
export const timeout = process.env.TIMEOUT * 60 * 1000;
console.log("\x1b[32m              __  __            __           _______             ____\n" +
    "  __ _  ___ _/ /_/ /___ _____ _/ /____ ___ _/ ___/ /  ___ ____  / / /\n" +
    " /  ' \\/ _ `/ __/ __/ // / _ `/ __/ -_) _ `/ /__/ _ \\/ _ `/ _ \\/_/_/ \n" +
    "/_/_/_/\\_,_/\\__/\\__/\\_, /\\_,_/\\__/\\__/\\_,_/\\___/_//_/\\_,_/_//_(_|_)  \n" +
    "                   /___/                                             \n");
export const stream = new Misskey.Stream("https://" + Misskey_Instance, {token: Misskey_Token}, {WebSocket: WebSocket});
stream.on('_connected_', () => {
    console.log('\x1b[32m[Info] WebSocket Connected');
});
    if (Misskey_Token == undefined || Misskey_Instance == undefined) {
        console.log("\x1b[31m[Error] Token is not set.\x1b[0m");
        process.exit(0);
    } else {
        const i = await api.request('i');
        await api.request('notes/create',{text: "まっちゃてぃーちゃんが起動したよ！\nみんな私と遊んでね！！！"})
        console.log(`\x1b[32m[Info] Account Name: ${JSON.stringify(i.name).replace(/"/g, "")}`);
        console.log(`[Info] Account ID: @${JSON.stringify(i.username).replace(/"/g, "")}@${Misskey_Instance}\x1b[0m`);
        boot = 1;

}

