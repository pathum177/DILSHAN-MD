const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "⚔️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╔════════════════════════════════════╗
║                                    ║
║   💎 𝗗𝗜𝗟𝗦𝗛𝗔𝗡 𝗠𝗗 𝗕𝗢𝗧 𝗥𝗘𝗣𝗢 💎   ║
║                                    ║
╠════════════════════════════════════╣
║                                    ║
║  📁 𝗥𝗘𝗣𝗢:                        ║
║  🌐 https://github.com/Dilshan099987/Dark-Shadow  ║
║                                    ║
║  👑 𝗢𝗪𝗡𝗘𝗥:                       ║
║  👤 Dilshan Ashinsa                 ║
║  📞 https://wa.me/94772194789      ║
║                                    ║
║  📢 𝗝𝗢𝗜𝗡 𝗢𝗨𝗥 𝗖𝗛𝗔𝗡𝗡𝗘𝗟:           ║
║  🔗 https://whatsapp.com/channel/0029Vb5nAex2UPBGW79XCX1T ║
║                                    ║
╠════════════════════════════════════╣
║       ⚡ 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗗𝗜𝗟𝗦𝗛𝗔𝗡 𝗠𝗗 ⚡        ║
║                                    ║
╚════════════════════════════════════╝
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/zqu8s7.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
