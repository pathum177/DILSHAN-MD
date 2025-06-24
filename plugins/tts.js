const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const googleTTS = require('google-tts-api')

cmd({
    pattern: "tts",
    desc: "Text-to-speech",
    category: "convert",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q) return reply("*_Please give me a text._*")

const url = googleTTS.getAudioUrl(q, {
  lang: 'en',
  slow: false,
  host: 'https://translate.google.com',
});

await conn.sendMessage(from,{audio: {url: url },mimetype:"audio/mpeg"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
