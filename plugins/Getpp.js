const { cmd } = require("../command"); // ඔබේ CMD register
cmd({
  pattern: "getpp",
  desc: "Download your own WhatsApp profile picture",
  category: "tools",
  react: "🖼️",
  filename: __filename
}, async (conn, msg, m, { reply, from }) => {
  try {
    const sender = msg.sender; // <--- This is your own JID (auto available)

    let profilePicUrl;
    try {
      profilePicUrl = await conn.profilePictureUrl(sender, "image");
    } catch (e) {
      profilePicUrl = "https://i.ibb.co/tmD1Hqr/no-profile-picture.png"; // fallback image if no dp
    }

    const caption = `🖼️ *Your Profile Picture!*\n\n> 🔰 *Powered by LUXALGO XD*`;

    await conn.sendMessage(from, {
      image: { url: profilePicUrl },
      caption
    }, { quoted: msg });

    await conn.sendMessage(from, {
      react: { text: "✅", key: msg.key } // success react
    });

  } catch (e) {
    console.log(e);
    reply("❌ Couldn't fetch your profile picture.");
  }
});
