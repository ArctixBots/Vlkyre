("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../🤖Utilities/Settings");
let moment = require(`moment-timezone`);
let Welcome = require(`../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/setwelcome`);
let group_participants = async (𝖚𝖕𝖉𝖆𝖙𝖊, ӄryӄnz) => {
let 𝖕𝖋𝖕𝖀𝖘𝖊𝖗;
let 𝕷𝖆𝖙𝖊𝖘𝖙 = 𝖚𝖕𝖉𝖆𝖙𝖊.participants[0];
let 𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆 = await ӄryӄnz.groupMetadata(𝖚𝖕𝖉𝖆𝖙𝖊.id);
let 𝖚𝖘𝖊𝖗𝕹𝖆𝖒𝖊 = await ӄryӄnz.getName(𝖚𝖕𝖉𝖆𝖙𝖊.participants[0]);
try {
𝖕𝖋𝖕𝖀𝖘𝖊𝖗 = await ӄryӄnz.profilePictureUrl(𝖚𝖕𝖉𝖆𝖙𝖊.participants[0], "image");
} catch {
𝖕𝖋𝖕𝖀𝖘𝖊𝖗 = "./👗Skins/Vlkyre_LabGreen.png";
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// *🍀ᴍᴀᴅᴇ:* ${moment(`${𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.creation}` * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
await Welcome.findOne(
{
ID: 𝖚𝖕𝖉𝖆𝖙𝖊.id,
},
async (𝕰𝖗𝖗𝖔𝖗, userWel) => {
if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
if (!userWel) return;
if (𝖚𝖕𝖉𝖆𝖙𝖊.action == "add" && !𝕷𝖆𝖙𝖊𝖘𝖙.includes(ӄryӄnz.user.id)) {
return await ӄryӄnz
.sendMessage(𝖚𝖕𝖉𝖆𝖙𝖊.id, {
contextInfo: { mentionedJid: [𝖚𝖕𝖉𝖆𝖙𝖊.participants[0]] },
image: { url: 𝖕𝖋𝖕𝖀𝖘𝖊𝖗 },
caption: `*⦓ ©𝐕𝐥𝐤𝐲𝐫𝐞 ༒ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞𝐫 ⦔* 
💡𝐧𝐚𝐦𝐞: @${𝖚𝖘𝖊𝖗𝕹𝖆𝖒𝖊}
🎐𝐠𝐫𝐨𝐮𝐩: ${𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject || ""}


*『 🍯𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐍𝐨𝐭𝐞🍯 』* 
${userWel.message}`,
footer: "❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ❞\n⭕youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA",
buttons: [
{
buttonId: prefix + "HELP",
buttonText: { displayText: prefix + "HELP" },
type: 1,
},
{
buttonId: prefix + "VLKYRE",
buttonText: { displayText: prefix + "VLKYRE" },
type: 1,
},
],
headerType: 4,
})
.catch((error) => console.log(error));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else if (𝖚𝖕𝖉𝖆𝖙𝖊.action == "remove") {
return;
}
}
);
};
module.exports = {
Vgrpns: group_participants,
};
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
