const { cmd } = require("../command");
const fetch = require("node-fetch");

cmd({
  pattern: "photo",
  desc: "Generate an AI image based on description",
  category: "ai",
  react: "🧠",
  filename: __filename
}, async (conn, msg, m, { q, reply }) => {
  if (!q) return reply("✏️ කරුණාකර විස්තරයක් සපයන්න (උදා: `.photo අරලියගහ මන්දිරය උදෑසන ආලෝකයෙන්`)");

  try {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Authorization": `https://supun-md-api-xmjh.vercel.app/api/ai/openai?q=hello`, // ⬅️ ඔබේ API Key එක මෙතන දාන්න
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: q,
        n: 1,
        size: "512x512"
      })
    });

    const data = await res.json();
    const imageUrl = data?.data?.[0]?.url;

    if (!imageUrl) return reply("⚠️ රූපයක් ජනනය කළ නොහැකියි. නැවත උත්සාහ කරන්න.");

    await conn.sendMessage(msg.key.remoteJid, {
      image: { url: imageUrl },
      caption: `🖼️ *Generated Image For:*\n> ${q}\n\n🧬 *Powered by LUXALGO XD*`
    }, { quoted: msg });

    await conn.sendMessage(msg.key.remoteJid, {
      react: { text: "🎨", key: msg.key }
    });

  } catch (err) {
    console.log(err);
    reply("❌ OpenAI සේවාවෙන් රූපය ලබාගැනීමේදී දෝෂයක් ඇතිවිය.");
  }
});
