//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348057627946";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUV4UVdtaHhKU2FvSndEbjVTZFY4RTFOajVFYzVxN2ZGWDlsNFlVQjZFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjJYZ0JsSDNHb1F4OGJsOE56VWFvVVdHN09rTFJtRWZ0ZU51dkJuRG9BND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TVMzSnlJTmswc2UrazkzMyszQjRFRFlZTVYrRGsvR1Z0bmtBSGlaRDNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZ2VYeEgyek4vYUhGMnVQZ0tua29KZXN4Q2JGdmtOeitrWkZZb3VKQVVvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJNU5hRlJGZm1OZFhqc01sVFdlenYxUlkzOUh0Smp3b0E5Y1ErQUVQRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh4RnBiMVlaeWxpbTBRWHVnL3F2NTlUTHpSZXFwMk5NU3lhckxTNHZMVlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0Q4aGRLZ3BoSG8vaWpPRWU5ZmNhVXNiaGNRcEttcmNlWG4zNWNaOVBFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0c1VWR3YmJLUnljQ3ZnbHdoU1V4SUh0djNzbk5nU2dkZ0J6eFIwK2docz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRaSUNNditYWTJ4dkloVThRMUxZa2kxUy9SSW5KUHNlTkpWKzY2SWpyTThiUzAvM2NrNGJid0NweU5MU1Vnem43bFVTaUNEQzV1VG0waERMekhvaEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJmS05TUGFXc2htVDdwNlhBaTVQRDJmb0p0b3RkNFFFSURRdmxmOE5FOGZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkRzlsVnk0U1Q2bWlhWVdwUkVyLXJBIiwicGhvbmVJZCI6IjU3NWE2YWI5LWVkNzItNGEyYy05ZGJmLTZiYzhkNDI3N2NkYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzVmtKby9ueDBrRWdrNmNkWFk3S3MvUGJuMTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9iZWRINlFTcG9BeXBtakdzNXNBQUREMXJ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE3Rzk4WVZaIiwibWUiOnsiaWQiOiIyMzQ4MDU3NjI3OTQ2OjQzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IjlqYWxhdWdoIHR2In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNON0tnNE1ERU5Pamhyd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXUFRYWllGZGwwZjkrdTA4OFlRNEtHSFlEK3dXby9OUysxY2MyZ2hKR21FPSIsImFjY291bnRTaWduYXR1cmUiOiJBdmNlVnlDNVgyZGxmZHlkdEhxay9Oc0xDWENBU2xlQmFTbmFXOWhSaUY2Qm9YOXFTTnl6YjJwRFlnSTN2OVo0OXJOY1NXNEVGTnlDSG1VZzdOaHREQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWjlKeHJzbURqMzRiTmFDdWczYXY5RFpRVDlEWFBaYjBSNTJzdlRwcG9oaFIybW5wWXl1eUFRR2pEK0VOSGJLWlJJRWsxS3hYbGlTeGE3ZHNqMmdzRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDU3NjI3OTQ2OjQzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZqMDEyV0JYWmRIL2ZydFBQR0VPQ2hoMkEvc0ZxUHpVdnRYSE5vSVNScGgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY1NDQ3Mzd9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING_DAVID™`",
  author: process.env.PACK_AUTHER || "KING_DAVID",
  packname: process.env.PACK_NAME || "KING_DAVID",
  botname: process.env.BOT_NAME || "KING_DAVID",
  ownername: process.env.OWNER_NAME || "KING_DAVID",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
