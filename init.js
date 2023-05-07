import * as dotenv from "dotenv";
import * as Misskey from "misskey-js";
import WebSocket from "ws";
dotenv.config();
export const emotion_1 =["つらい","辛い","苦","くるしい","泣","test"];//つらみ
export const emotion_2 =["てんさい","天才","褒めて"];//ほめられたい
export const emotion_1_reply =["大丈夫ですか...?","よしよし...","私がぎゅーしてあげますよ..?"];
export const emotion_2_reply =["すごいです！！","さすがです！！","天才ですね！！","すごい！！"];
export const rand_vocabulary= ["うにゃーん","うにょーん","かわいいおにゃのこたべたい","べろべろべろべろべろべろ","もぐ...","かわいいおにゃのこおいしかった"]
export const Misskey_Token= process.env.TOKEN;
export const Misskey_Instance= process.env.INSTANCE;
export const api = new Misskey.api.APIClient({
    origin: "https://"+Misskey_Instance,
    credential: Misskey_Token,
});
export const stream = new Misskey.Stream("https://"+Misskey_Instance, { token: Misskey_Token }, {WebSocket: WebSocket});
stream.on('_connected_', () => {
    console.log('\x1b[32m[Info] WebSocket Connected');
});