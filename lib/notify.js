import {api, stream} from '../init.js';
import { emotion_1, emotion_2, emotion_1_reply, emotion_2_reply, emotion_secret,emotion_secret_reply} from '../vocabulary.js';
var send=0

export async function Notify() {
    const mainChannel = stream.useChannel('main');
    const homeChannel = stream.useChannel('homeTimeline');
    mainChannel.on('followed',
        async notification => {
            const chk = await api.request('users/show', { userId: notification.id });
            if (!chk.isFollowing) {
                const follow = await api.request('following/create', { userId: notification.id });
            }
    });
    homeChannel.on('note', async notification => {
        const username = notification.user.host ? `${notification.user.username}@${notification.user.host}` : notification.user.username;
        const name = notification.user.name;
        const noteId = notification.id;
        const noteInfo = await api.request('notes/show', { noteId: noteId });
        const noteText = noteInfo.text;

        if (noteText!==null && username != "mattyateachan") {
        send=0

            if (noteText.indexOf("おはよ") >= 0) {
                await api.request('notes/create', {
                    text: `@${username} おはよ！`,
                    visibility: notification.visibility,
                    replyId: notification.id,
                });
            }

            if (noteText.indexOf("おやすみ") >= 0 && username != "mattyateachan") {
                await api.request('notes/create', {
                    text: `@${username} おやすみ！いい夢見てね！`,
                    visibility: notification.visibility,
                    replyId: notification.id,
                });
            }

        for (let i = 0; i < emotion_secret.length; i++) {
            // 配列の要素と部分一致する文字列の位置を取得する
            const result = noteText.indexOf(emotion_secret[i]);
            if ( send===0 && result >= 0 && username != "mattyateachan"){
                send = 1;
                await api.request('notes/create',{
                    text: `@${username} ${emotion_secret_reply[Math.floor(Math.random() * emotion_secret_reply.length)]}`,
                    visibility: notification.visibility,
                    replyId: notification.id,
                });
        }}

            for (let i = 0; i < emotion_1.length; i++) {
                // 配列の要素と部分一致する文字列の位置を取得する
                const result = noteText.indexOf(emotion_1[i]);
                if ( send===0 && result >= 0 && username != "mattyateachan"){
                    send = 1;
                    await api.request('notes/create',{
                        text: `@${username} ${emotion_1_reply[Math.floor(Math.random() * emotion_1_reply.length)]}`,
                        visibility: notification.visibility,
                        replyId: notification.id,
                    });
                }}
        for (let i = 0; i < emotion_2.length; i++) {
            // 配列の要素と部分一致する文字列の位置を取得する
            const result = noteText.indexOf(emotion_2[i]);
            if ( send===0 && result >= 0 &&username !== "mattyateachan"){
                send = 1;
                await api.request('notes/create',{
                    text: `@${username} ${emotion_2_reply[Math.floor(Math.random() * emotion_2_reply.length)]}`,
                    visibility: notification.visibility,
                    replyId: notification.id,
                });
            }}
        }
        //ここまでfor
    });
}
async function FollowUser(UserId) {


}
