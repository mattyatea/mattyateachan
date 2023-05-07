import {api, stream} from '../init.js';
export async function Notify() {
    const mainChannel = stream.useChannel('main');

    mainChannel.on('followed',
        async notification => {
            console.log('Follow', notification);
            const chk = await api.request('users/show', { userId: notification.id });
            if (!chk.isFollowing) {
                const follow = await api.request('following/create', { userId: notification.id });
            }
    });
    mainChannel.on('mention', async notification => {
        const username = notification.user.host ? `${notification.user.username}@${notification.user.host}` : notification.user.username;
        console.log(`${username}にメンションされました！`);
        await api.request('notes/create',{
            text: `@${username} ${notification.user.name}、 呼んだ？`,
            visibility: notification.visibility,
            replyId: notification.id,
        });
    });
}
async function FollowUser(UserId) {


}
