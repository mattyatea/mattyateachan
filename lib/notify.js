import {api, stream, emotion_1, emotion_2, emotion_1_reply, emotion_2_reply, rand_vocabulary} from '../init.js';
var send=0
export async function Notify() {
    const mainChannel = stream.useChannel('main');
    const homeChannel = stream.useChannel('homeTimeline');
    mainChannel.on('followed',
        async notification => {
            console.log('Follow', notification);
            const chk = await api.request('users/show', { userId: notification.id });
            if (!chk.isFollowing) {
                const follow = await api.request('following/create', { userId: notification.id });
            }
    });
    /*
    mainChannel.on('mention', async notification => {
        const username = notification.user.host ? `${notification.user.username}@${notification.user.host}` : notification.user.username;
        console.log(`\x1b[32m[Info] ${username}にメンションされました！`);
        await api.request('notes/create',{
            text: `@${username} ${notification.user.name}、 呼んだ？`,
            visibility: notification.visibility,
            replyId: notification.id,
        });
    });*/
    homeChannel.on('note', async notification => {
        const username = notification.user.host ? `${notification.user.username}@${notification.user.host}` : notification.user.username;
        const name = notification.user.name;
        const noteid = notification.id;
        const noteinfo = await api.request('notes/show', { noteId: noteid });
        const notetext = noteinfo.text;
        console.log(`\x1b[32m[Info] ${username}が${noteinfo.text}と投稿しました！`,);
        console.log(`\x1b[32m[Info]`,);
        send=0
        for (let i = 0; i < emotion_1.length; i++) {
            // 配列の要素と部分一致する文字列の位置を取得する
            const result = notetext.indexOf(emotion_1[i]);
            if ( send==0 && result >= 0 &&username != "@mattyateachan"){
                send = 1;
                await api.request('notes/create',{
                    text: `@${username} ${emotion_1_reply[Math.floor(Math.random() * emotion_1_reply.length)]}`,
                    visibility: notification.visibility,
                    replyId: notification.id,
                });
        }}
        for (let i = 0; i < emotion_2.length; i++) {
            // 配列の要素と部分一致する文字列の位置を取得する
            const result = notetext.indexOf(emotion_2[i]);
            if ( send==0 && result >= 0 &&username != "@mattyateachan"){
                send = 1;
                await api.request('notes/create',{
                    text: `@${username} ${emotion_2_reply[Math.floor(Math.random() * emotion_2_reply.length)]}`,
                    visibility: notification.visibility,
                    replyId: notification.id,
                });
            }}

    });
}
async function FollowUser(UserId) {


}
