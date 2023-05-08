import {api} from "../init.js";
export function pressure() {
    const now   = new Date();
    fetch("https://zutool.jp/api/getweatherstatus/13113")
        .then((response) => response.json())
        .then(async (data) => {
            console.log(data.today[now.getHours()].pressure_level);
           if (data.today[now.getHours()].pressure_level == 0) {
               await api.request('notes/create', {text: `今の気圧は${data.today[now.getHours()].pressure}Hpaだよ！\n警戒レベルは0だよ！`})
               return data.today[now.getHours()].pressure;
           }else if (data.today[now.getHours()].pressure_level == 1) {
                    await api.request('notes/create', {text: `今の気圧は${data.today[now.getHours()].pressure}Hpaだよ！\n警戒レベルは1だよ！`})
                    return data.today[now.getHours()].pressure;
           }else if (data.today[now.getHours()].pressure_level == 2) {
                    await api.request('notes/create', {text: `今の気圧は${data.today[now.getHours()].pressure}Hpaだよ！\n警戒レベルは2だよ！少し頭が痛くなってきたかも...`})
                    return data.today[now.getHours()].pressure;
             }else if (data.today[now.getHours()].pressure_level == 3) {
                    await api.request('notes/create', {text: `今の気圧は${data.today[now.getHours()].pressure}Hpaだよ！\n警戒レベルは3だよ！\nううう....これは....`})
                    return data.today[now.getHours()].pressure;
           }else if (data.today[now.getHours()].pressure_level == 4) {
               await api.request('notes/create', {text: `今の気圧は${data.today[now.getHours()].pressure}Hpaだよ！\n警戒レベルは4(Max)だよ！\nこれはまずい...家で安静にしてたほうがいいかも...?`})
               return data.today[now.getHours()].pressure;
           }

        });
}
