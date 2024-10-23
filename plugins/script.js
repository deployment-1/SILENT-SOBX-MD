const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let repo =`
*╭──────────────●●►*
*| BOT OWNER:* SILENTLOVER432
*| SILENT-SOBX-MD REPO:* https://github.com/SILENTLOVER40/SILENT-SOBX-MD
*| SUPPORT GROUP:* https://whatsapp.com/channel/0029VaHO5B0G3R3cWkZN970s
*╰──────────────●●►*

> *POWERED BY SILENTLOVER432*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "SILENTLOVER432",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'SILENT-SOBX-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/SILENTLOVER40/SILENT-SOBX-MD" ,
thumbnailUrl: "https://i.im.ge/2024/10/23/kYbXXJ.IMG-20241010-WA0061.th.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});