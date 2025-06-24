const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `👋ℍ𝔼𝕃𝕃𝕆𝕎 *${pushname}*

🌟 𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝔻𝕀𝕃𝕊ℍ𝔸ℕ 𝕄𝔻 🌟
┏━❮ 🩵𝐃𝐈𝐋𝐒𝐇𝐀𝐍 𝐌𝐃🩵 ❯━
┃◈┃🤖ʙᴏᴛ ɴᴀᴍᴇ :ᴅɪʟꜱʜᴀɴ ᴍᴅ
┃◈┃🔖ᴠᴇʀsɪᴏɴ : 2.0.0 ʙᴇᴛᴀ
┃◈┃📟ᴘʟᴀᴛғᴏʀᴍ: ʀᴇᴘʟɪᴛ
┃◈┃👨‍💻ᴏᴡɴᴇʀ    : ᴅɪʟꜱʜᴀɴ ᴀꜱʜɪɴꜱᴀ
┃◈┃📆ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())} 
┃◈┃📈ʀᴀᴍ ᴜsᴀɢᴇ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃◈┗━━━━━━━━━━━━━━𖣔𖣔
╰──────────────┈⊷

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪʟꜱʜᴀɴ ᴍᴅ`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/c8a354.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419308807922@newsletter',
                    newsletterName: '𝗗𝗜𝗟𝗦𝗛𝗔𝗡_ᴍᴅ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
