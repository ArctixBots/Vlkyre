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
exports.N𝖊𝖊𝖉__A𝖗𝖌𝖘 = async (ӄryӄnz, Vlkyre, 𝖀𝖘𝖆𝖌𝖊) => {
await ӄryӄnz
.sendMessage(
Vlkyre.chatID,
{
contextInfo: { mentionedJid: [Vlkyre.sender] },
image: { url: "./👗Skins/Vlkyre.png" },
caption: `┌╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
│║⦁ 🕊️𝐍𝐚𝐦𝐞: ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ 🎭𝐂𝐡𝐚𝐭𝐈𝐃: ${Vlkyre.chatID.split("@")[0]}
└╚═══════⋑
${𝖀𝖘𝖆𝖌𝖊}`,
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
},
{
quoted: Vlkyre,
}
)
.catch((e) => console.log(e));
let ʀᴇᴀᴄᴛionMessage = {
ʀᴇᴀᴄᴛ: {
text: `⚡`,
key: Vlkyre.key,
},
};
return await ӄryӄnz
.sendMessage(Vlkyre.chatID, ʀᴇᴀᴄᴛionMessage)
.catch((e) => console.log(e));
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
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|"); // `|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// // ════════════════════════|▷   (𝐜)Vlkyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

// `|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
// require("../🤖Utilities/Settings");
// let Fs = require("fs");
// let ᴍꜱᴇᴄ = require("parse-ms");
// let ʀᴀɴᴅᴏᴍᴄ = require("random-material-color");
// let ʀᴀɴᴅᴏᴍᴋ = ʀᴀɴᴅᴏᴍᴄ.getColor();
// let { registerFont, createCanvas, loadImage } = require("canvas");
// let usedUser = require(`../🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser`);
// exports.N𝖊𝖊𝖉__A𝖗𝖌𝖘 = async (ӄryӄnz, Vlkyre, 𝖀𝖘𝖆𝖌𝖊) => {
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Heart_Of_Everything/Heart_Of_Everything.ttf",{ family: "Heart_Of_Everything" });
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Housttely_Signature/Housttely_Signature.ttf",{ family: "Housttely_Signature" });
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Fall_is_Coming/Fall_is_Coming.ttf", {family: "Fall_is_Coming",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Slouchy_Brush/Slouchy_Brush.ttf", {family: "Slouchy_Brush",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Kashmir_Rosy/Kashmir_Rosy.otf", {family: "Kashmir_Rosy",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Japanese/Japanese.ttf", {family: "Japanese",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Honeybee/Honeybee.ttf", {family: "Honeybee",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Angeles/Angeles.ttf", {family: "Angeles",});
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Shalma/Shalma.otf", { family: "Shalma" });
// registerFont("./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘/Aquire/Aquire.otf", { family: "Aquire" });
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// let W = 1280;
// let H = 720;
// let ᴄᴀɴᴠᴀꜱ = createCanvas(W, H);
// let 𝖈𝖔𝖓𝖙𝖊𝖝𝖙 = ᴄᴀɴᴠᴀꜱ.getContext("2d");
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = ʀᴀɴᴅᴏᴍᴋ;
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillRect(0, 0, W, H);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.font = "bold 70pt Kashmir_Rosy";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.textAlign = "center";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.textBaseline = "top";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
// let ᴛᴇxᴛ = "❣️ Hello There ❣️\n" + (Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ");
// let ᴛᴇxᴛᴡɪᴅᴛʜ = 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.measureText(ᴛᴇxᴛ).W;
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillRect(600 - ᴛᴇxᴛᴡɪᴅᴛʜ / 2 - 10, 170 - 5, ᴛᴇxᴛᴡɪᴅᴛʜ + 20, 120);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillText(ᴛᴇxᴛ, 600, 170);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.font = "bold 50pt Aquire";
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillText("Valkyrie.com", 650, 600);
// loadImage("./Src/𝐕𝐥𝐤𝐲𝐫𝐞🀄𝕮𝖆𝖓𝖛𝖆𝖘.png").then(async (Cmg) => {
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.drawImage(Cmg, 140, 515, 200, 200);
// 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.drawImage(Cmg, 980, 515, 200, 200);
// let CmgB = ᴄᴀɴᴠᴀꜱ.toBuffer("image/png");
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// Fs.writeFileSync("./Vlkyre👒Hat/Valkyrie_com.png", CmgB).then(async () => {
// let ʙᴏᴛ_ᴜꜱᴇᴅ;
// let ʟᴀꜱᴛ_ᴜꜱᴇᴅ;
// await usedUser.findOne(
// {
// User: Vlkyre.sender,
// },
// async (𝕰𝖗𝖗𝖔𝖗, ꜱᴇʀᴄ) => {
// if (𝕰𝖗𝖗𝖔𝖗) return Caught(ӄryӄnz, Vlkyre, 𝕰𝖗𝖗𝖔𝖗);
// if (!ꜱᴇʀᴄ) {
// ʙᴏᴛ_ᴜꜱᴇᴅ = 0;
// ʟᴀꜱᴛ_ᴜꜱᴇᴅ = 0;
// } else {
// let ᴄʟᴏᴄᴋ = ᴍꜱᴇᴄ(ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime));
// ʙᴏᴛ_ᴜꜱᴇᴅ = ꜱᴇʀᴄ.Total;
// ʟᴀꜱᴛ_ᴜꜱᴇᴅ = ᴄʟᴏᴄᴋ.seconds;
// }
// }
// );
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// await ӄryӄnz.sendPresenceUpdate("composing", Vlkyre.chatID);
// await ӄryӄnz
// .sendMessage(
// Vlkyre.chatID,
// {
// contextInfo: { mentionedJid: [Vlkyre.sender] },
// image: { url: "./Valkyrie_com.png" },
// caption: `🕊️ *ɴᴀᴍᴇ:* ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}

// ${𝖀𝖘𝖆𝖌𝖊}`,
// footer: "❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ❞\n⭕youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA",
// buttons: [
// {
// buttonId: prefix + "HELP",
// buttonText: { displayText: prefix + "HELP" },
// type: 1,
// },
// ],
// headerType: 4,
// },
// {
// quoted: Vlkyre,
// }
// )
// .then(Fs.unlinkSync("./Vlkyre👒Hat/Valkyrie_com.png"))
// .catch((e) => console.log(e));
// let ʀᴇᴀᴄᴛionMessage = {
// ʀᴇᴀᴄᴛ: {
// text: `⚡`,
// key: Vlkyre.key,
// },
// };
// return await ӄryӄnz
// .sendMessage(Vlkyre.chatID, ʀᴇᴀᴄᴛionMessage)
// .catch((e) => console.log(e));
// });
// });
// };
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
