const { cmd } = require('../lib/command')
const axios = require('axios')

const OPENAI_KEY = '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'

cmd({
  pattern: 'ai',
  desc: 'AI Chat or Photo Generator (auto detect)',
  category: 'ai',
  react: '🤖',
  filename: __filename
}, async (conn, m, msg, { text }) => {
  if (!text) return msg.reply("🤖 කරුණාකර පණිවිඩයක් හෝ රූප විස්තරයක් දෙන්න.\n\nඋදා:\n`.ai who is the president of Sri Lanka?`\n`.ai draw a robot drinking tea`")

  // 🧠 Check if it's an image prompt
  const img_keywords = ['draw', 'image', 'picture', 'paint', 'sketch', 'photo']
  const isImagePrompt = img_keywords.some(k => text.toLowerCase().includes(k))

  if (isImagePrompt) {
    // 📷 Image generation
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt: text,
          n: 1,
          size: '1024x1024'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_KEY}`
          }
        }
      )

      const imageUrl = response.data.data[0].url
      await conn.sendMessage(msg.from, {
        image: { url: imageUrl },
        caption: `🖼️ *AI Generated Image for:*\n\`\`\`${text}\`\`\``
      }, { quoted: msg })

    } catch (err) {
      console.error(err)
      return msg.reply("❌ රූපය හදාගැනීමේදී දෝෂයක්! යළි උත්සාහ කරන්න.")
    }

  } else {
    // 🧠 GPT chat response
    try {
      const chat = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: text }],
          temperature: 0.7
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_KEY}`
          }
        }
      )

      const reply = chat.data.choices[0].message.content.trim()
      await msg.reply("💬 " + reply)

    } catch (err) {
      console.error(err)
      return msg.reply("❌ ChatGPT response error! නැවත උත්සාහ කරන්න.")
    }
  }
})
