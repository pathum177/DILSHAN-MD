const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["awaisxd","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 DILSHAN-MD 〕━━┈⊷*

*👋 HELLO ${pushname}*
🌟__________________________🌟

*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ᴅɪʟꜱʜᴀɴ ᴍᴅ ʙᴏᴛ*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : ᴅɪʟꜱʜᴀɴ ᴀꜱʜɪɴꜱᴀ*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : ᴅɪʟꜱʜᴀɴ ᴀꜱʜɪɴꜱᴀ*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ᴅɪʟꜱʜᴀɴ ᴍᴅ*
*┃★│* *ᴀɢᴇ : 18 ʏᴇᴀʀ*
*┃★│* *ᴄɪᴛʏ : ʜᴀᴍʙᴀɴᴛʜᴏᴛᴀ*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪʟꜱʜᴀɴ ᴍᴅ🌟
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/zqu8s7.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363419308807922@newsletter',
      newsletterName: '𝗗𝗜𝗟𝗦𝗛𝗔𝗡_ᴍᴅ',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
