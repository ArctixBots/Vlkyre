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
require("../../🤖Utilities/Settings");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../🤖Utilities/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let ms = require(`parse-ms`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../👒Buttons/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let Gamble = require(`../../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/gamble`);
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let Economy = require(`../../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
let { Image_Button } = require("../../👒Buttons/Image_Button");
let { Video_Button } = require("../../👒Buttons/Video_Button");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../👒Buttons/Caught");
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.gamble = async (
ӄryӄnz,
Vlkyre,
pushName,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body
) => {
let FormatColor = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let FormatAmount = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?rpb]+/;
if (!Vlkyre.A𝖗𝖌𝖘[0] && !Vlkyre.A𝖗𝖌𝖘[1]) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:*  Argument Needed!
*⚡USAGE:* ${prefix}${Final_Name} _color money_

🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (FormatColor.test(Vlkyre.A𝖗𝖌𝖘[0])) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:*  Argument Needed!
*⚡USAGE:* ${prefix}${Final_Name} _color money_

🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (FormatAmount.test(Vlkyre.A𝖗𝖌𝖘[1])) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:*  Argument Needed!
*⚡USAGE:* ${prefix}${Final_Name} _color money_

🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (
!Vlkyre.A𝖗𝖌𝖘[0].includes("red") &&
!Vlkyre.A𝖗𝖌𝖘[0].includes("black") &&
!Vlkyre.A𝖗𝖌𝖘[0].includes("purple")
) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:*  Argument Needed!
*⚡USAGE:* ${prefix}${Final_Name} _color money_

🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
let ColorRoom = Vlkyre.A𝖗𝖌𝖘[0];
let AmountRoom = parseInt(Vlkyre.A𝖗𝖌𝖘[1]);
if (AmountRoom < 50) {
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _min 50gold needed to gamble_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (AmountRoom > 800) {
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

❌𝗘𝗿𝗿𝗼𝗿: _Money Amount!_
💡𝗟𝗶𝗺𝗶𝘁: _max 800gold for gamble_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (ColorRoom === "red" && AmountRoom > 200) {
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

❌𝗘𝗿𝗿𝗼𝗿: _Money For Red!_
💡𝗟𝗶𝗺𝗶𝘁: _max 200gold_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (ColorRoom === "black" && AmountRoom > 500) {
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

❌𝗘𝗿𝗿𝗼𝗿: _Money For Black!_
⚫𝗟𝗶𝗺𝗶𝘁: _max 500gold_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (ColorRoom === "purple" && AmountRoom > 800) {
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

❌𝗘𝗿𝗿𝗼𝗿: _Money For Purple!_
🟣𝗟𝗶𝗺𝗶𝘁: _max 800gold_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
Economy.findOne(
{
ID: Vlkyre.sender,
},
async (Èrrðr, userEco) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, Èrrðr);
if (!userEco) {
let newUser = new Economy({
ID: Vlkyre.sender,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser.save().catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
Gamble.findOne(
{
ID: Vlkyre.sender,
},
async (Èrrðr, userGamble) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, Èrrðr);
if (!userGamble) {
let newUser = new Gamble({
ID: Vlkyre.sender,
serverID: Vlkyre.chatID,
Gambledone: 0,
Gambletimeout: 480000,
});
await newUser
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_DB.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

🧈Added To DB for Current command First Time!
🦋Try ${prefix}${Final_Name} Again!`
);
}

("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (
userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone) >
0
) {
let time = ms(
userGamble.Gambletimeout - (Date.now() - userGamble.Gambledone)
);
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

❌𝗘𝗿𝗿𝗼𝗿: _You've Recently Gambled!_
🕐𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
function isOdd(num) {
if (num % 2 == 0) return false;
else if (num % 2 == 1) return true;
else if (num % 3 == 0) return false;
else if (num % 4 == 1) return true;
else return false;
}
let Color = ColorRoom;
let money = parseInt(AmountRoom);
let CurrentMoney = userEco.money;
let Amount = Math.floor(Math.random() * 10);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (!Color) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:*  Argument Needed!
*⚡USAGE:* ${prefix}${Final_Name} _color money_

🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
Color = Color.toLowerCase();
if (!money) {
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

❌𝗘𝗿𝗿𝗼𝗿: _Specify an amount to gamble!_
❣️𝗨𝘀𝗮𝗴𝗲: ${prefix}${Final_Name}  _red/black/purple money_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (money > CurrentMoney) {
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

*❌𝗘𝗿𝗿𝗼𝗿:* _are betting more than you have!_
❣️ 𝗨𝘀𝗮𝗴𝗲: ${prefix}${Final_Name}  _red/black/purple money_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Color.includes("black")) {
Color = 0;
} else if (Color.includes("red")) {
Color = 1;
} else if (Color.includes("purple")) {
Color = 2;
} else {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:*  Argument Needed!
*⚡USAGE:* ${prefix}${Final_Name} _color money_

🌿𝐓𝐨𝐩𝐢𝐜: Gamble🤑AI
(medium) *Red:* _even out of 10_ 
(hard) *Black:* _2 out of 10_ 
(god) *Purple:* _1 out of 10_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Amount == 1 && Color == 2) {
money *= 15;
userEco.money = userEco.money + money;
userGamble.Gambledone = Date.now();
await userGamble
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
await userEco
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

🟣𝗘𝗮𝗿𝗻𝗲𝗱: You won *${money}* gold.
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (!isOdd(Amount) && Color == 1) {
money = parseInt(money * 1.5);
userEco.money = userEco.money + money;
userGamble.Gambledone = Date.now();
await userGamble
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
await userEco
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

🔴𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (isOdd(Amount) && Color == 0) {
money = parseInt(money * 2);
userEco.money = userEco.money + money;
userGamble.Gambledone = Date.now();
await userGamble
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
await userEco
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

⚫𝗘𝗮𝗿𝗻𝗲𝗱: _won *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
userEco.money = userEco.money - money;
userGamble.Gambledone = Date.now();
await userGamble
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
await userEco.save().catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_Gambling.png",
`╔◇══════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊ 🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════◇╝

💀𝗥𝗲𝘀𝘂𝗹𝘁: _lost *${money}* gold!_
⭐𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_`
);
}
);
}
);
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
