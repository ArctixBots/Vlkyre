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
let fs = require(`fs`);
let chalk = require(`chalk`);
let FFmpeg = require(`fluent-ffmpeg`);
const { TenorMaker } = require(`./TenorMaker`);
let { sleep } = require(`../../🤖Utilities/ɴᴇᴄᴛᴏʀ`);
let { DownloaderHelper } = require("node-downloader-helper");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.ᴋʀʏᴏᴛᴇɴᴏʀ = async (ӄ𝖗𝖞ӄ𝖓𝖟, Vlkyre, ɮօɖʏ) => {
  async function CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present) {
    let DL = new DownloaderHelper(ᴀɴɪᴍᴇʟɪɴᴋ, "./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓", {
      fileName: `${Present}.gif`,
      retry: true,
    });
    await DL.on("end", async () => {
      await FFmpeg(ɢᴏᴛꜰɪʟᴇ)
        .outputOptions([
          "-pix_fmt yuv420p",
          "-c:v libx264",
          "-movflags +faststart",
          "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
        ])
        .save(ɢɪᴠᴇꜰɪʟᴇ)
        .on("end", async () => {
          await ӄ𝖗𝖞ӄ𝖓𝖟
            .sendMessage(
              Vlkyre.chatID,
              {
                video: fs.readFileSync(ɢɪᴠᴇꜰɪʟᴇ),
                gifPlayback: true,
                mentions: [Vlkyre.sender, Vlkyre.sender],
                caption: `*❣️ ꜰᴏʀ:* @${
                  Vlkyre.sender.split(`@`)[0] || ""
                }\n*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*`,
              },
              { quoted: Vlkyre }
            )
            .then(fs.unlinkSync(ɢɪᴠᴇꜰɪʟᴇ, ɢᴏᴛꜰɪʟᴇ))
            .catch((𝕰𝖗𝖗𝖔𝖗) => console.log(chalk.red(𝕰𝖗𝖗𝖔𝖗)));
          return;
        });
    });
    await DL.on("error", (𝕰𝖗𝖗𝖔𝖗) => {
      return console.log(chalk.red(𝕰𝖗𝖗𝖔𝖗));
    });
    await DL.start().catch((𝕰𝖗𝖗𝖔𝖗) => {
      return console.log(chalk.red(𝕰𝖗𝖗𝖔𝖗));
    });
  }
  ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  if (ɮօɖʏ.includes("angry")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("angry");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("baka")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("baka");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("bonk")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("bonk");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("bully")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("bully");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("bye")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("bye");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("chase")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("chase");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("cheer")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("cheer");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("cringe")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("cringe");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("dab")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("dab");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("dance")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("dance");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("die")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("die");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("facepalm")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("facepalm");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("palm")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("facepalm");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("face")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("facepalm");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("feed")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("feed");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("food")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("food");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("glomp")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("glomp");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("hate")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("hate");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("hold")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("hold");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("kill")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("kill");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("death")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("kill");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("lick")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("lick");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("love")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("love");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("lurk")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("lurk");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("nervous")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("nervous");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("nom")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("nom");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("nope")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("nope");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("no")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("nope");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("nuzzle")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("nuzzle");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("panic")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("panic");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("peck")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("peck");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("pout")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("pout");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("run")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("run");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("shoot")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("shoot");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("shrug")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("shrug");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("sip")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sip");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("drink")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sip");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("sleep")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sleep");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("sleepy")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sleep");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("sleept")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sleep");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("dream")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sleep");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("smug")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("smug");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("stab")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("stab");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("knife")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("stab");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("stare")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("stare");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("look")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("stare");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("tease")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("tease");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("thumbsup")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("thumbsup");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("thumbs")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("thumbsup");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("thumb")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("thumbsup");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("tickle")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("tickle");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("fingers")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("tickle");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("finger")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("tickle");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  } else if (ɮօɖʏ.includes("wag")) {
    let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("wag");
    let Present = `${Date.now()}${Vlkyre.chatID}`;
    let ɢᴏᴛꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.gif`;
    let ɢɪᴠᴇꜰɪʟᴇ = `./𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/${Date.now()}${Vlkyre.chatID}.mp4`;
    console.log(chalk.green("Sending AI Gif"));
    return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ, Present);
  }
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
