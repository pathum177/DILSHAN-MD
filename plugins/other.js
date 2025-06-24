const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://www.dark-yasiya-api.site'

cmd({
    pattern: "lyrics",
    alias: ["lyric"],
    desc: "get lyrics",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!q) return reply("*_Please give me a song name_*")

const data = await fetchJson(`${apilink}/other/lyrics?text=${q}`)
	    
const msg = `*_INFINITY DILSHAN BOT SONG LYRICS_*

*Song :* ${data.result.album}

*Artist :* ${data.result.artists}

${data.result.lyric}

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪʟꜱʜᴀɴ ᴍᴅ`

          const contextMsg = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
          }
          const msgBody = {
            text: msg,
            contextInfo: contextMsg
          }
         await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })
      
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "textstyle",
    alias: ["fancytext", "fancy"],
    desc: "get fancy text",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!q) return reply("*_Please give me a text._*")

const data = await fetchJson(`${apilink}/other/font?text=${q}`)
	    
const array = data.result
      
const fancyStyle = array.map((fancy, index) => {
            return `${index + 1} || ${array[index].result}` 
        }).join("\n\n")
      
let msg = `*_INFINITY DILSHAN BOT TEXT STYLES_*

*Text :* ${q}

${fancyStyle}

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪʟꜱʜᴀɴ ᴍᴅ`

const fdChannel = {
            newsletterJid: "120363419308807922@newsletter",
            newsletterName: "𝗗𝗜𝗟𝗦𝗛𝗔𝗡_ᵐᵈ",
            serverMessageId: 999
          };
          const contextMsg = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: fdChannel
          };
          const msgBody = {
            text: msg,
            contextInfo: contextMsg
          };
         let inf = await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })

conn.ev.on('messages.upsert', async (msgUpdate) => {
            let msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            let selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === inf.key.id) {

		    let index = parseInt(selectedOption)

    reply(`${array[index-1].result}`)
	    
}
})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
