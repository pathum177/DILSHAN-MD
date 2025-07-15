const config = require('../config');
const { cmd, commands } = require('../command');
const { downloadMediaMessage } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions');
const { Buffer } = require('buffer');
const os = require('os');



cmd({
    pattern: "getpp",
    desc: "Fetch the profile picture of a number, tagged or replied user.",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { quoted, q, reply }) => {
    try {
        let targetJid;

        if (quoted) {
            targetJid = quoted.sender;
        } else if (q) {
            // Remove non-numeric characters and build JID
            const cleaned = q.replace(/[^0-9]/g, "");
            targetJid = cleaned + "@s.whatsapp.net";
        } else {
            targetJid = m.sender; // fallback to sender
        }

        // Try to fetch profile picture URL
        const userPicUrl = await conn.profilePictureUrl(targetJid, "image").catch(() => null);

        if (!userPicUrl) return reply("⚠️ No profile picture found for the specified user or number.");

        await conn.sendMessage(m.chat, {
            image: { url: userPicUrl },
 caption: `🖼️ Here is the profile picture of *${targetJid.split('@')[0]}*\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴜᴅᴍᴏᴅᴢ-ᴍᴅ`
        });

    } catch (e) {
        console.error("Error in .getpp:", e);
        reply("❌ An error occurred while fetching the profile picture.");
    }
});
