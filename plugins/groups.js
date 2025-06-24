const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': "approve",
  'desc': "Automatically approve Specific Country users in the waiting list",
  'react': '✅',
  'category': "group",
  'filename': __filename
}, async (_0x3022ad, _0x26ef9a, _0x47d770, {
  isGroup: _0xf53fc9,
  isBotAdmins: _0x21468e,
  isAdmins: _0x201e55,
  args: _0x3b7613,
  reply: _0x40017e
}) => {
  try {
    if (!_0xf53fc9) {
      return _0x40017e("This command is only for groups.");
    }
    if (!_0x21468e) {
      return _0x40017e("I need to be a group admin to perform this action.");
    }
    if (!_0x201e55) {
      return _0x40017e("You must be an admin to use this command.");
    }
    const _0xea2090 = _0x26ef9a.key.remoteJid;
    const _0x1ae87d = await _0x3022ad.groupRequestParticipantsList(_0xea2090);
    if (_0x1ae87d.length === 0x0) {
      return _0x40017e("No participants are in the waiting list.");
    }
    const _0x16e34f = _0x1ae87d.filter(_0x58b280 => _0x58b280.jid.startsWith(config.AUTO_ADD_Country_Code));
    if (_0x16e34f.length === 0x0) {
      return _0x40017e("No +94 users found in the waiting list.");
    }
    const _0x308793 = _0x16e34f.map(_0x432fde => _0x432fde.jid);
    const _0x1abe34 = await _0x3022ad.groupRequestParticipantsUpdate(_0xea2090, _0x308793, "approve");
    console.log(_0x1abe34);
    _0x40017e("Approved the following +94 users:\n" + _0x308793.join("\n"));
  } catch (_0x323975) {
    console.log(_0x323975);
    await _0x3022ad.sendMessage(from, {
      'react': {
        'text': '❌',
        'key': _0x26ef9a.key
      }
    });
    _0x40017e("Error: " + _0x323975);
  }
});
cmd({
  'pattern': "requests",
  'desc': "View pending join requests",
  'use': ".requests",
  'react': '📝',
  'category': "group",
  'filename': __filename
}, async (_0x435a91, _0x6e9c85, _0x89fb29, {
  from: _0x904628,
  isGroup: _0x1d3dcf,
  reply: _0x300d94
}) => {
  if (!_0x1d3dcf) {
    return await _0x300d94("This command can only be used in groups.");
  }
  const _0x5f44dd = _0x435a91.user.jid;
  const _0x328b7f = await _0x435a91.groupMetadata(_0x904628);
  const _0x525def = _0x328b7f.participants.some(_0x3618a3 => _0x3618a3.jid === _0x5f44dd && _0x3618a3.admin);
  if (!_0x525def) {
    return await _0x300d94("I'm not an admin in this group.");
  }
  try {
    const _0x3a4a60 = await _0x435a91.groupRequestParticipantsList(_0x904628);
    if (_0x3a4a60.length === 0x0) {
      return await _0x300d94("No pending join requests.");
    }
    let _0x18c621 = "Pending Join Requests:\n\n";
    _0x3a4a60.forEach((_0x1ddea5, _0x2f4304) => {
      _0x18c621 += _0x2f4304 + 0x1 + ". @" + _0x1ddea5.jid.split('@')[0x0] + "\n";
    });
    return await _0x300d94(_0x18c621, {
      'mentions': _0x3a4a60.map(_0x428abd => _0x428abd.jid)
    });
  } catch (_0x53e219) {
    console.error("Error retrieving join requests:", _0x53e219);
    return await _0x300d94("Failed to retrieve join requests. Please try again later.");
  }
});
cmd({
  'pattern': 'accept',
  'desc': "Accept group join request(s)",
  'use': ".accept <request numbers>",
  'react': '✔️',
  'category': 'group',
  'filename': __filename
}, async (_0x548e23, _0x5eb192, _0x22c36e, {
  from: _0x195a89,
  isGroup: _0x2687af,
  reply: _0x391da4,
  match: _0x38acec
}) => {
  if (!_0x2687af) {
    return await _0x391da4("This command can only be used in groups.");
  }
  const _0xeec561 = _0x548e23.user.jid;
  const _0x2d8a52 = await _0x548e23.groupMetadata(_0x195a89);
  const _0x4426fb = _0x2d8a52.participants.some(_0x5203ba => _0x5203ba.jid === _0xeec561 && _0x5203ba.admin);
  if (!_0x4426fb) {
    return await _0x391da4("_I'm not an admin in this group._");
  }
  try {
    const _0x167130 = await _0x548e23.groupRequestParticipantsList(_0x195a89);
    if (_0x167130.length === 0x0) {
      return await _0x391da4("No pending join requests.");
    }
    if (!_0x38acec) {
      return await _0x391da4("_Provide the number(s) of the request(s) to accept, separated by commas._");
    }
    const _0x2d3baf = _0x38acec.split(',').map(_0x27558e => parseInt(_0x27558e.trim()) - 0x1);
    const _0x1a2385 = _0x2d3baf.filter(_0x40e195 => _0x40e195 >= 0x0 && _0x40e195 < _0x167130.length);
    if (_0x1a2385.length === 0x0) {
      return await _0x391da4("_Invalid request number(s)._");
    }
    for (let _0x3801e8 of _0x1a2385) {
      await _0x548e23.groupRequestParticipantsUpdate(_0x195a89, [_0x167130[_0x3801e8].jid], "accept");
    }
    return await _0x391da4("_Accepted " + _0x1a2385.length + " join request(s)._");
  } catch (_0x174505) {
    console.error("Error accepting join requests:", _0x174505);
    await _0x548e23.sendMessage(_0x195a89, {
      'react': {
        'text': '❌',
        'key': _0x5eb192.key
      }
    });
    return await _0x391da4("Failed to accept join requests. Please try again later.");
  }
});
cmd({
  'pattern': "reject",
  'desc': "Reject group join request(s)",
  'use': ".reject <request numbers>",
  'react': '❌',
  'category': "group",
  'filename': __filename
}, async (_0x4dbe64, _0x1cc294, _0x4c6dd0, {
  from: _0x56ae41,
  isGroup: _0x28dcf3,
  reply: _0x1d0a11,
  match: _0x17a3f5
}) => {
  if (!_0x28dcf3) {
    return await _0x1d0a11("This command can only be used in groups.");
  }
  const _0xf52d21 = _0x4dbe64.user.jid;
  const _0x3f2bd6 = await _0x4dbe64.groupMetadata(_0x56ae41);
  const _0x5e660b = _0x3f2bd6.participants.some(_0x26eaea => _0x26eaea.jid === _0xf52d21 && _0x26eaea.admin);
  if (!_0x5e660b) {
    return await _0x1d0a11("I'm not an admin in this group.");
  }
  try {
    const _0x5174c0 = await _0x4dbe64.groupRequestParticipantsList(_0x56ae41);
    if (_0x5174c0.length === 0x0) {
      return await _0x1d0a11("No pending join requests.");
    }
    if (!_0x17a3f5) {
      return await _0x1d0a11("Provide the number(s) of the request(s) to reject, separated by commas.");
    }
    const _0x4ad54c = _0x17a3f5.split(',').map(_0x5c40e5 => parseInt(_0x5c40e5.trim()) - 0x1);
    const _0x77835f = _0x4ad54c.filter(_0x14c1b0 => _0x14c1b0 >= 0x0 && _0x14c1b0 < _0x5174c0.length);
    if (_0x77835f.length === 0x0) {
      return await _0x1d0a11("_Invalid request number(s)._");
    }
    for (let _0x4f5682 of _0x77835f) {
      await _0x4dbe64.groupRequestParticipantsUpdate(_0x56ae41, [_0x5174c0[_0x4f5682].jid], "reject");
    }
    return await _0x1d0a11("_Rejected " + _0x77835f.length + " join request(s)._");
  } catch (_0x315f0c) {
    console.error("Error rejecting join requests:", _0x315f0c);
    await _0x4dbe64.sendMessage(_0x56ae41, {
      'react': {
        'text': '❌',
        'key': _0x1cc294.key
      }
    });
    return await _0x1d0a11("Failed to reject join requests. Please try again later.");
  }
});
cmd({
  'pattern': "hidetag",
  'react': '📢',
  'alias': ["htag"],
  'desc': "Tags everyperson of group without mentioning their numbers",
  'category': "group",
  'filename': __filename,
  'use': '<text>'
}, async (_0x18a2d2, _0x138f74, _0x2ec2a7, {
  from: _0x1d4174,
  l: _0x3c9cb3,
  quoted: _0x1a214d,
  body: _0x5abd3f,
  isCmd: _0xfacf7e,
  command: _0x2aa3ab,
  args: _0x1d9e88,
  q: _0x1e2736,
  isGroup: _0x1aabaa,
  sender: _0x3fd386,
  senderNumber: _0x4bdea5,
  botNumber2: _0x4fd7d9,
  botNumber: _0x3de8fa,
  pushname: _0x40b577,
  isMe: _0x2ae894,
  isOwner: _0x3b950e,
  groupMetadata: _0x3aa2e5,
  groupName: _0x2ab350,
  participants: _0x323f70,
  isItzcp: _0x464c5f,
  groupAdmins: _0x478cc5,
  isBotAdmins: _0x5077af,
  isAdmins: _0x45fc43,
  reply: _0x4663ba
}) => {
  if (!_0x3b950e || !_0x45fc43) {
    return;
  }
  try {
    if (!_0x2ec2a7.isGroup) {
      return _0x4663ba(mg.onlygroup);
    }
    if (!_0x5077af) {
      return _0x4663ba(mg.needbotadmins);
    }
    _0x18a2d2.sendMessage(_0x2ec2a7.chat, {
      'text': _0x1e2736 ? text : '',
      'mentions': _0x323f70.map(_0x49ae13 => _0x49ae13.id)
    }, {
      'quoted': _0x138f74
    });
  } catch (_0x565120) {
    _0x4663ba("*Error !!*");
    _0x3c9cb3(_0x565120);
  }
});
cmd({
  'pattern': 'kick',
  'react': '🥏',
  'alias': ['remove'],
  'desc': "To Remove a participant from Group",
  'category': "group",
  'use': '.kick',
  'filename': __filename
}, async (_0x8b48a0, _0x168ee5, _0x292447, {
  from: _0x2d2ff4,
  l: _0x123425,
  quoted: _0x5d59b4,
  body: _0x29b9d3,
  isCmd: _0x47a0c5,
  command: _0x34cc63,
  mentionByTag: _0x403b87,
  args: _0x391f69,
  q: _0x47169c,
  isGroup: _0x25a4f1,
  sender: _0xe9aed2,
  senderNumber: _0x5ad77a,
  botNumber2: _0x5dc93f,
  botNumber: _0xdefacf,
  pushname: _0x29bc31,
  isMe: _0x57fd9f,
  isOwner: _0x470114,
  groupMetadata: _0x5866fc,
  groupName: _0x2524da,
  participants: _0x1b2ff4,
  groupAdmins: _0x5bc80e,
  isBotAdmins: _0x3a4139,
  isCreator: _0x260012,
  isDev: _0xac8931,
  isAdmins: _0xb11cd9,
  reply: _0xe07b2e
}) => {
  try {
    if (!_0x25a4f1) {
      return _0xe07b2e("This is Group only Command");
    }
    if (!_0xb11cd9) {
      if (!_0x57fd9f) {
        return _0x8b48a0.sendMessage(_0x2d2ff4, {
          'text': "🚫 *This is admin only command*"
        }, {
          'quoted': _0x168ee5
        });
      }
    }
    if (!_0x3a4139) {
      return _0xe07b2e("❌ *Bot must be Admin Frist*  ❗");
    }
    const _0x46fbc7 = await _0x403b87;
    let _0x93f0e4 = (await _0x46fbc7) || _0x168ee5.msg.contextInfo.participant;
    if (!_0x93f0e4) {
      return _0xe07b2e("🚫 *Couldn't find any user in context*");
    }
    await _0x8b48a0.groupParticipantsUpdate(_0x2d2ff4, [_0x93f0e4], "remove");
    await _0x8b48a0.sendMessage(_0x2d2ff4, {
      'text': "*Removed 🚫*"
    }, {
      'quoted': _0x168ee5
    });
  } catch (_0x20f33f) {
    _0xe07b2e("🚫 *Error Accurated !!*\n\n" + _0x20f33f);
    console.log(_0x20f33f);
  }
});
cmd({
  'pattern': "promote",
  'react': '🥏',
  'alias': ["addadmin"],
  'desc': "To Add a participatant as a Admin",
  'category': "group",
  'use': ".promote",
  'filename': __filename
}, async (_0x18501d, _0x54a22b, _0xe5741d, {
  from: _0x18a83a,
  l: _0x4c4135,
  quoted: _0x58b954,
  body: _0x3a0191,
  isCmd: _0x4ba9f7,
  command: _0x167d03,
  mentionByTag: _0x23cb25,
  args: _0x4a9013,
  q: _0x133558,
  isGroup: _0x34f916,
  sender: _0x3b04af,
  senderNumber: _0x2ad9d1,
  botNumber2: _0x38ff65,
  botNumber: _0x35610e,
  pushname: _0x535db1,
  isMe: _0x26be0d,
  isOwner: _0x4f4141,
  groupMetadata: _0x50d251,
  groupName: _0x37229b,
  participants: _0x3e0b50,
  groupAdmins: _0x23ca45,
  isBotAdmins: _0x226061,
  isCreator: _0x11ed7d,
  isDev: _0xf192b,
  isAdmins: _0x531fb2,
  reply: _0x1d354d
}) => {
  try {
    if (!_0x34f916) {
      return _0x1d354d("This is Group only Command");
    }
    if (!_0x531fb2) {
      if (!_0x26be0d) {
        return _0x18501d.sendMessage(_0x18a83a, {
          'text': "🚫 *This is admin only command*"
        }, {
          'quoted': _0x54a22b
        });
      }
    }
    if (!_0x226061) {
      return _0x1d354d("*Bot must be admin first ❗*");
    }
    const _0x3eb56f = await _0x23cb25;
    let _0x443781 = (await _0x3eb56f) || _0x54a22b.msg.contextInfo.participant;
    if (!_0x443781) {
      return _0x1d354d("🚫 *Couldn't find any user in context*");
    }
    const _0x95fa60 = await getGroupAdmins(_0x3e0b50);
    if (_0x95fa60.includes(_0x443781)) {
      return _0x1d354d("*User all ready and admin ✅*");
    }
    await _0x18501d.groupParticipantsUpdate(_0x18a83a, [_0x443781], 'promote');
    await _0x18501d.sendMessage(_0x18a83a, {
      'text': "*Promoted as an admin ✔️*"
    }, {
      'quoted': _0x54a22b
    });
  } catch (_0x278282) {
    _0x1d354d("🚫 *Error Accurated !!*\n\n" + _0x278282);
    console.log(_0x278282);
  }
});
cmd({
  'pattern': "demote",
  'react': '🥏',
  'alias': ["removeadmin"],
  'desc': "To Demote Admin to Member",
  'category': 'group',
  'use': ".demote",
  'filename': __filename
}, async (_0x518eaf, _0x49b9b0, _0x30adcc, {
  from: _0x27d759,
  l: _0xd9f077,
  quoted: _0x466e85,
  body: _0x4c7921,
  isCmd: _0x1afe0c,
  command: _0x96e723,
  mentionByTag: _0x9df894,
  args: _0x43bcbb,
  q: _0x84ad51,
  isGroup: _0x5bd4e3,
  sender: _0x1b51be,
  senderNumber: _0x1126c8,
  botNumber2: _0x408331,
  botNumber: _0x45fa94,
  pushname: _0xf14f12,
  isMe: _0x1bed98,
  isOwner: _0x1478c6,
  groupMetadata: _0x34e02d,
  groupName: _0x2bf18d,
  participants: _0x434719,
  groupAdmins: _0x46948b,
  isBotAdmins: _0x32ecb5,
  isCreator: _0x302d0b,
  isDev: _0x4ac064,
  isAdmins: _0xe002b0,
  reply: _0x5d07bb
}) => {
  try {
    if (!_0x5bd4e3) {
      return _0x5d07bb("This is Group only Command");
    }
    if (!_0xe002b0) {
      if (!_0x1bed98) {
        return _0x518eaf.sendMessage(_0x27d759, {
          'text': "🚫 *This is admin only command*"
        }, {
          'quoted': _0x49b9b0
        });
      }
    }
    if (!_0x32ecb5) {
      return _0x5d07bb("*Bot must be admin first ❗*");
    }
    const _0xadfcae = await _0x9df894;
    let _0x5d248f = (await _0xadfcae) || _0x49b9b0.msg.contextInfo.participant;
    if (!_0x5d248f) {
      return _0x5d07bb("🚫 *Couldn't find any user in context*");
    }
    const _0x5c7eef = await getGroupAdmins(_0x434719);
    if (!_0x5c7eef.includes(_0x5d248f)) {
      return _0x5d07bb("*User all ready not and admin ✅*");
    }
    await _0x518eaf.groupParticipantsUpdate(_0x27d759, [_0x5d248f], 'demote');
    await _0x518eaf.sendMessage(_0x27d759, {
      'text': "*User no longer an admin ✔️*"
    }, {
      'quoted': _0x49b9b0
    });
  } catch (_0x1ce72d) {
    _0x5d07bb("🚫 *Error Accurated !!*\n\n" + _0x1ce72d);
    console.log(_0x1ce72d);
  }
});
cmd({
  'pattern': 'mute',
  'react': '🔒',
  'alias': ["close", "mute_cyber"],
  'desc': "Change to group settings to only admins can send messages.",
  'category': 'group',
  'use': ".mute",
  'filename': __filename
}, async (_0xcda1e, _0x35e4ac, _0x29ee22, {
  from: _0x24f8d3,
  l: _0x43c432,
  quoted: _0x437b26,
  body: _0x2a436c,
  isCmd: _0x255ba2,
  command: _0x445346,
  args: _0x51b5b0,
  q: _0x18e250,
  isGroup: _0x52d883,
  sender: _0x23daea,
  senderNumber: _0x3a6d6a,
  botNumber2: _0x243aaf,
  botNumber: _0x2a3631,
  pushname: _0x2c94a9,
  isMe: _0x47d7ab,
  isOwner: _0x71e18a,
  groupMetadata: _0x453a9f,
  groupName: _0x3f305a,
  participants: _0x34f490,
  groupAdmins: _0x4a85cd,
  isBotAdmins: _0x1dbcd3,
  isCreator: _0x13c170,
  isDev: _0x3393da,
  isAdmins: _0x33a4b5,
  reply: _0x2d1657
}) => {
  try {
    if (!_0x52d883) {
      return _0x2d1657("🚫 *This is Group command*");
    }
    if (!_0x1dbcd3) {
      return _0x2d1657("🚫 *Bot must be Admin frist*");
    }
    if (!_0x33a4b5) {
      if (!_0x47d7ab) {
        return _0x2d1657("🚫 *You must be admin frist*");
      }
    }
    await _0xcda1e.groupSettingUpdate(_0x24f8d3, "announcement");
    await _0xcda1e.sendMessage(_0x24f8d3, {
      'text': "*Group chat muted🔒*"
    }, {
      'quoted': _0x35e4ac
    });
  } catch (_0x25da72) {
    _0x2d1657("*Error !!*");
    console.log(_0x25da72);
  }
});
cmd({
  'pattern': "unmute",
  'react': '🔓',
  'alias': ["open", "unmute_cyber"],
  'desc': "Change to group settings to all members can send messages.",
  'category': 'group',
  'use': '.unmute',
  'filename': __filename
}, async (_0x1d2d85, _0x189b2e, _0x35402b, {
  from: _0x22b908,
  l: _0x530c93,
  quoted: _0x53c3fb,
  body: _0x3f7d80,
  isCmd: _0x4e9374,
  command: _0x1f26d5,
  args: _0x55de62,
  q: _0x3c3486,
  isGroup: _0x473ba7,
  sender: _0x434282,
  senderNumber: _0x301e7f,
  botNumber2: _0x3c946e,
  botNumber: _0x440ccb,
  pushname: _0x4b7b8a,
  isMe: _0x462c67,
  isOwner: _0x5b49c6,
  groupMetadata: _0x76fd6d,
  groupName: _0x4e7603,
  participants: _0x1442b2,
  groupAdmins: _0x32fd90,
  isBotAdmins: _0x510e5d,
  isCreator: _0x503e8e,
  isDev: _0x12ff00,
  isAdmins: _0x21137f,
  reply: _0x547704
}) => {
  try {
    if (!_0x473ba7) {
      return _0x547704("🚫 *This is Group command*");
    }
    if (!_0x510e5d) {
      return _0x547704("🚫 *Bot must be Admin frist*");
    }
    if (!_0x21137f) {
      if (!_0x462c67) {
        return _0x547704("🚫 *You must be admin frist*");
      }
    }
    await _0x1d2d85.groupSettingUpdate(_0x22b908, 'not_announcement');
    await _0x1d2d85.sendMessage(_0x22b908, {
      'text': "*Group chat unmuted 🔓*"
    }, {
      'quoted': _0x189b2e
    });
  } catch (_0x58c93a) {
    _0x547704("*Error !!*");
    console.log(_0x58c93a);
  }
});
cmd({
  'pattern': "join",
  'desc': "joins group by link",
  'category': 'main',
  'use': "<group link.>"
}, async (_0x4408bc, _0x4f48b1, _0x567364, {
  from: _0x40f4f3,
  l: _0x342d67,
  quoted: _0x5ba87d,
  body: _0xb51a70,
  isCmd: _0x20e786,
  command: _0x1babcb,
  args: _0x262b5d,
  q: _0x5dd2d6,
  isGroup: _0x4f3f54,
  sender: _0x5c9b3c,
  senderNumber: _0x36e1fc,
  botNumber2: _0x364b82,
  botNumber: _0x447619,
  pushname: _0x367bab,
  isSachintha: _0xaf4b42,
  isSavi: _0x46b8aa,
  isSadas: _0x1a66c8,
  isMani: _0x21eede,
  isMe: _0x171027,
  isOwner: _0x51bc26,
  isDev: _0x31cafa,
  groupMetadata: _0x3a4584,
  groupName: _0x354945,
  participants: _0xb041b3,
  groupAdmins: _0x49c85b,
  isBotAdmins: _0x1d3c1b,
  isAdmins: _0x221346,
  reply: _0x1ea6b4
}) => {
  if (!_0x51bc26 && !_0xaf4b42 && !_0x46b8aa && !_0x31cafa && !_0x21eede && !_0x171027) {
    return;
  }
  try {
    if (!_0x5dd2d6) {
      return _0x1ea6b4("Please give me Query");
    }
    if (!_0x5dd2d6.split(" ")[0x0] && !_0x5dd2d6.split(" ")[0x0].includes("whatsapp.com")) {
      _0x1ea6b4("Link Invalid, Please Send a valid whatsapp Group Link!");
    }
    let _0x28be84 = _0x5dd2d6.split(" ")[0x0].split('https://chat.whatsapp.com/')[0x1];
    await _0x4408bc.groupAcceptInvite(_0x28be84).then(_0x12487a => _0x1ea6b4("*Joined group ✔️*"))["catch"](_0x12c0c0 => _0x1ea6b4("Error in Joining Group"));
  } catch (_0x2aceb4) {
    _0x1ea6b4("🚩 Not Found !");
    console.log(_0x2aceb4);
  }
});
cmd({
  'pattern': "del",
  'react': '⛔',
  'alias': [','],
  'desc': "delete message",
  'category': "main",
  'use': ".del",
  'filename': __filename
}, async (_0x5f21dc, _0x1500a2, _0x412559, {
  from: _0x274c35,
  l: _0x2447b8,
  quoted: _0x3a39cd,
  body: _0x3e0359,
  isCmd: _0x4d4547,
  isDev: _0x975a82,
  command: _0x31c100,
  args: _0x1593cd,
  q: _0x351276,
  isGroup: _0x5535e5,
  sender: _0x528064,
  senderNumber: _0x2a9ef5,
  botNumber2: _0x466017,
  botNumber: _0x54f3f4,
  pushname: _0x4296a6,
  isSachintha: _0x223c8d,
  isSavi: _0x5ebe5e,
  isSadas: _0x982d07,
  isMani: _0x5314ae,
  isMe: _0x1d8287,
  isOwner: _0x239bf6,
  groupMetadata: _0xab9995,
  groupName: _0x584dde,
  participants: _0x5f226b,
  groupAdmins: _0x139137,
  isBotAdmins: _0x3af2d5,
  isAdmins: _0x557635,
  reply: _0x58cfc1
}) => {
  try {
    const _0x448024 = {
      'remoteJid': _0x412559.chat,
      'fromMe': false,
      'id': _0x412559.quoted.id,
      'participant': _0x412559.quoted.sender
    };
    await _0x5f21dc.sendMessage(_0x412559.chat, {
      'delete': _0x448024
    });
  } catch (_0x983861) {
    _0x58cfc1("*Error !!*");
    _0x2447b8(_0x983861);
  }
});
cmd({
  'pattern': 'leave',
  'react': '🔓',
  'alias': ["left", "kickme"],
  'desc': "To leave from the group",
  'category': 'group',
  'use': '.leave',
  'filename': __filename
}, async (_0x1eaf65, _0x5b725f, _0x810bbc, {
  from: _0xb16a4d,
  l: _0x42636a,
  quoted: _0x5f2344,
  body: _0x6247cc,
  isCmd: _0x1b3e41,
  command: _0x31b033,
  args: _0x5c1189,
  q: _0x44ddf5,
  isGroup: _0x3dc398,
  sender: _0x14a712,
  senderNumber: _0x446c87,
  botNumber2: _0x427f46,
  botNumber: _0xbb721,
  pushname: _0x437a72,
  isMe: _0x14fab0,
  isOwner: _0xa4b80,
  groupMetadata: _0xec589c,
  groupName: _0x1f5818,
  participants: _0x30908e,
  groupAdmins: _0x2af2dc,
  isBotAdmins: _0x36a6be,
  isCreator: _0x19eb24,
  isDev: _0x26b913,
  isAdmins: _0x3ab1f8,
  reply: _0x573c77
}) => {
  try {
    if (!_0x3dc398) {
      return _0x573c77("🚫 *This is Group command*");
    }
    if (!_0x14fab0) {
      return _0x573c77("🚫 *This is Group command*");
    }
    await _0x1eaf65.sendMessage(_0xb16a4d, {
      'text': "🔓 *Good Bye All*"
    }, {
      'quoted': _0x5b725f
    });
    await _0x1eaf65.groupLeave(_0xb16a4d);
  } catch (_0x52cbac) {
    _0x573c77("*Error !!*");
    console.log(_0x52cbac);
  }
});
cmd({
  'pattern': "invite",
  'react': "🖇️",
  'alias': ["grouplink", "glink"],
  'desc': "To Get the Group Invite link",
  'category': "group",
  'use': ".invite",
  'filename': __filename
}, async (_0x1ee6dc, _0x5d5312, _0x453a4f, {
  from: _0x5998d3,
  l: _0x9ba171,
  quoted: _0x41ddbb,
  body: _0x1b4af4,
  isCmd: _0x376f9b,
  command: _0x32b17d,
  args: _0x51bab6,
  q: _0x2cc725,
  isGroup: _0x459215,
  sender: _0x213f63,
  senderNumber: _0x523e3d,
  botNumber2: _0x36286d,
  botNumber: _0x2da225,
  pushname: _0x26c4ba,
  isMe: _0x308066,
  isOwner: _0x5aaff7,
  groupMetadata: _0x18d03c,
  groupName: _0x4c65f0,
  participants: _0x16ce4c,
  groupAdmins: _0x542f56,
  isBotAdmins: _0x132078,
  isCreator: _0x262963,
  isDev: _0x75c210,
  isAdmins: _0x48de7f,
  reply: _0x1b9cd4
}) => {
  try {
    if (!_0x459215) {
      return _0x1b9cd4("🚫 *This is Group command*");
    }
    if (!_0x132078) {
      return _0x1b9cd4("🚫 *Bot must be Admin frist*");
    }
    if (!_0x48de7f) {
      if (!_0x308066) {
        return _0x1b9cd4("🚫 *You must be admin frist*");
      }
    }
    const _0x4413ed = await _0x1ee6dc.groupInviteCode(_0x5998d3);
    await _0x1ee6dc.sendMessage(_0x5998d3, {
      'text': "🖇️ *Group Link*\n\nhttps://chat.whatsapp.com/" + _0x4413ed
    }, {
      'quoted': _0x5d5312
    });
  } catch (_0x251516) {
    _0x1b9cd4("*Error !!*");
    console.log(_0x251516);
  }
});
cmd({
  'pattern': "ginfo",
  'react': '🥏',
  'alias': ["groupinfo"],
  'desc': "Get group informations.",
  'category': "group",
  'use': ".ginfo",
  'filename': __filename
}, async (_0x564778, _0x10d648, _0x5eb9b3, {
  from: _0x5f15be,
  l: _0x325575,
  quoted: _0x1b6e8c,
  body: _0x4dc669,
  isCmd: _0x3b3652,
  command: _0x1745d1,
  args: _0x557c26,
  q: _0x4dd727,
  isGroup: _0xa4a0fb,
  sender: _0xc76139,
  senderNumber: _0x3f6563,
  botNumber2: _0x438045,
  botNumber: _0x59fbb3,
  pushname: _0x1e9ee4,
  isMe: _0x58540d,
  isOwner: _0x7212ba,
  groupMetadata: _0x601dd4,
  groupName: _0x454332,
  participants: _0x28049f,
  groupAdmins: _0x3e42b3,
  isBotAdmins: _0x5bc19b,
  isCreator: _0x587f3c,
  isDev: _0x1e9e8b,
  isAdmins: _0x32a6eb,
  reply: _0x478d7
}) => {
  try {
    if (!_0xa4a0fb) {
      return _0x478d7("⛔ *This is Group only Command* ");
    }
    if (!_0x5bc19b) {
      return _0x478d7("⛔ *Bot must be Admin Frist* ");
    }
    if (!_0x32a6eb) {
      if (!_0x58540d) {
        return _0x478d7("🚫 *You must be a admin frist*");
      }
    }
    const _0x548b4d = await _0x564778.groupMetadata(_0x5f15be);
    let _0x5a29e2 = await _0x564778.profilePictureUrl(_0x5f15be, 'image');
    const _0x1a4a41 = "\n*" + _0x548b4d.subject + "*\n\n🐉 *Group Jid* - " + _0x548b4d.id + "\n\n📬 *Participant Count* - " + _0x548b4d.size + "\n\n👤 *Group Creator* - " + _0x548b4d.owner + "\n\n📃 *Group Description* - " + _0x548b4d.desc + "\n\n";
    await _0x564778.sendMessage(_0x5f15be, {
      'image': {
        'url': _0x5a29e2
      },
      'caption': _0x1a4a41
    }, {
      'quoted': _0x10d648
    });
  } catch (_0x2290b5) {
    _0x478d7("⛔ *Error accurated !!*\n\n" + _0x2290b5);
    console.log(_0x2290b5);
  }
});
cmd({
  'pattern': "block",
  'react': '🥏',
  'alias': ["groupinfo"],
  'desc': "Get group informations.",
  'category': "group",
  'use': ".ginfo",
  'filename': __filename
}, async (_0x346905, _0x3fdbb9, _0x30c353, {
  from: _0x5ebd5a,
  l: _0x424536,
  quoted: _0x5c6d82,
  body: _0x48329c,
  isCmd: _0x4ba0d4,
  command: _0x1fb9cf,
  args: _0xa86b72,
  q: _0x49c4bf,
  isGroup: _0x36ee61,
  sender: _0x3ccfaf,
  senderNumber: _0x3094cd,
  botNumber2: _0x38a088,
  botNumber: _0x2ead88,
  pushname: _0x259c0e,
  isMe: _0x48d11c,
  isOwner: _0x307405,
  groupMetadata: _0x1786e9,
  groupName: _0x24879d,
  participants: _0x5c6935,
  groupAdmins: _0x25a079,
  isBotAdmins: _0x35268b,
  isCreator: _0x11139b,
  isDev: _0xc9eb5c,
  isAdmins: _0x2c7163,
  reply: _0x2a9f37
}) => {
  try {
    if (!_0x48d11c) {
      return _0x2a9f37("⛔ *OWNER ONLY COMMAND* ");
    }
    await _0x346905.updateBlockStatus(_0x5ebd5a, "block");
  } catch (_0x4c2a57) {
    _0x2a9f37("⛔ *Error accurated !!*\n\n" + _0x4c2a57);
    console.log(_0x4c2a57);
  }
});
cmd({
  'pattern': "add",
  'desc': "Add a member to the group.",
  'category': "group",
  'react': '➕',
  'filename': __filename
}, async (_0x1ed660, _0x34a620, _0x41e219, {
  from: _0x5e7157,
  quoted: _0x2e1b07,
  body: _0x2a4334,
  isCmd: _0x72ddc3,
  command: _0x11c8f1,
  args: _0x54ee80,
  q: _0x5d7ec3,
  isGroup: _0x31fe26,
  sender: _0x4f291b,
  senderNumber: _0x42ceb7,
  botNumber2: _0x47b4ad,
  botNumber: _0x372f49,
  pushname: _0x35abea,
  isMe: _0x2f15f5,
  isOwner: _0x112a02,
  groupMetadata: _0xe6a026,
  groupName: _0x1fca42,
  participants: _0x47db04,
  groupAdmins: _0x5a57b2,
  isBotAdmins: _0x78c3a2,
  isAdmins: _0x135b76,
  reply: _0x5c49c1
}) => {
  try {
    if (!_0x31fe26) {
      return _0x5c49c1("*🚨 ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ɪɴ ɢʀᴏᴜᴘ*");
    }
    if (!_0x78c3a2) {
      return _0x5c49c1("*🚨 ᴘʟᴇᴀꜱᴇ ɢɪᴠᴇ ᴍᴇ ᴀᴅᴍɪɴ.*");
    }
    if (!_0x135b76 && !_0x2f15f5) {
      return _0x5c49c1("*🚨 ᴏɴʟʏ ᴀᴅᴍɪɴ ᴄᴀɴ ʏᴏᴜ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ*");
    }
    const _0x294c59 = _0x5d7ec3.split(" ")[0x0];
    if (!_0x294c59) {
      return _0x5c49c1("Please provide a phone number to add.");
    }
    await _0x1ed660.groupParticipantsUpdate(_0x5e7157, [_0x294c59 + '@s.whatsapp.net'], "add");
    await _0x5c49c1('@' + _0x294c59 + " has been added to the group.", {
      'mentions': [_0x294c59 + "@s.whatsapp.net"]
    });
  } catch (_0x3f76b9) {
    console.log(_0x3f76b9);
    _0x5c49c1('' + _0x3f76b9);
  }
});
cmd({
  'pattern': "end",
  'desc': "Remove all members from the group (except bot and group creator).",
  'category': "group",
  'filename': __filename,
  'react': '🚫'
}, async (_0x53c8de, _0x4c3c6f, _0x44d3b9, {
  from: _0x5010cd,
  isGroup: _0x30bcd2,
  isAdmins: _0x2f4cac,
  isOwner: _0xd58598,
  isBotAdmins: _0xbe75d7,
  isMe: _0x504f67,
  groupMetadata: _0x1d60f7,
  reply: _0x44f2f7
}) => {
  try {
    if (!_0xd58598 && !_0x504f67 && !_0x2f4cac && !_0xbe75d7) {
      return _0x44f2f7("This command can only be used by the bot owner.");
    }
    const _0x36831e = _0x1d60f7.owner;
    const _0x41ba57 = _0x53c8de.user.id;
    const _0x560a0c = _0x1d60f7.participants.filter(_0x4d9f33 => _0x4d9f33.id !== _0x36831e && _0x4d9f33.id !== _0x41ba57);
    await _0x53c8de.groupParticipantsUpdate(_0x5010cd, _0x560a0c.map(_0x4f8878 => _0x4f8878.id), "remove");
    _0x44f2f7("*🚫 All members have been removed from the group (except the bot and group creator).*");
  } catch (_0x341210) {
    console.error(_0x341210);
    _0x44f2f7("❌ Error: " + _0x341210);
  }
});
cmd({
  'pattern': "tagadmin",
  'desc': "Tags all the admins in the group.",
  'category': 'group',
  'use': ".tagadmin",
  'filename': __filename
}, async (_0x5f2389, _0xe5b236, _0x3f9d98, {
  from: _0x13aac9,
  isGroup: _0x12d6f3,
  groupMetadata: _0x4c5500,
  groupAdmins: _0x1d3cf0,
  reply: _0x347925
}) => {
  try {
    if (!_0x12d6f3) {
      return _0x347925("This command is only for groups.");
    }
    if (_0x1d3cf0.length === 0x0) {
      return _0x347925("There are no admins in this group.");
    }
    let _0x46e50b = "*Tagging all admins in the group:*\n\n";
    for (let _0x1152b1 of _0x1d3cf0) {
      _0x46e50b += '@' + _0x1152b1.split('@')[0x0] + "\n";
    }
    await _0x5f2389.sendMessage(_0x13aac9, {
      'text': _0x46e50b,
      'mentions': _0x1d3cf0
    }, {
      'quoted': _0xe5b236
    });
  } catch (_0x5b45b7) {
    console.error("Error tagging admins:", _0x5b45b7);
    _0x347925("An error occurred while trying to tag all admins. Please try again.");
  }
});
cmd({
  'pattern': "boom",
  'desc': "forward msgs",
  'alias': ["bbb"],
  'category': 'owner',
  'use': ".boom <jid> & <count>",
  'filename': __filename
}, async (_0x20ba1e, _0x2b46a0, _0x3a69e3, {
  from: _0x79d395,
  l: _0x1e2c68,
  quoted: _0x3edfcc,
  body: _0x45113d,
  isCmd: _0x50977b,
  command: _0x2d5feb,
  args: _0x39ebdb,
  q: _0x3c6977,
  isGroup: _0x26ee95,
  sender: _0x409845,
  senderNumber: _0x56662d,
  botNumber2: _0x302afa,
  botNumber: _0x25cae5,
  pushname: _0x457b6b,
  isMe: _0x5b1719,
  isOwner: _0x26a205,
  groupMetadata: _0x2460b7,
  groupName: _0x49261a,
  participants: _0x502b23,
  groupAdmins: _0x1322dd,
  isBotAdmins: _0x106d9e,
  isAdmins: _0x144ca7,
  reply: _0x2ca6b8
}) => {
  if (!_0x26a205) {
    return _0x2ca6b8("*Owner Only ❌*");
  }
  if (!_0x3c6977 || !_0x3a69e3.quoted) {
    _0x2ca6b8("*give me message ❌*");
  }
  const _0x4fe834 = _0x3c6977.split(" & ")[0x0];
  const _0x36b5e4 = _0x3c6977.split(" & ")[0x1];
  let _0x5a8f58 = 0x0;
  let _0x273f08;
  let _0x1529ad = {
    'key': _0x2b46a0.quoted?.['fakeObj']?.["key"]
  };
  if (_0x2b46a0.quoted?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]) {
    let _0x4d6d6c = _0x2b46a0.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x551469 = require("mime-types");
    let _0x1e2c70 = _0x551469.extension(_0x4d6d6c);
    _0x2b46a0.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (_0x273f08 ? _0x273f08 : _0x2b46a0.quoted.documentWithCaptionMessage.message.documentMessage.caption) + '.' + _0x1e2c70;
  }
  _0x1529ad.message = _0x2b46a0.quoted;
  while (_0x5a8f58 < _0x36b5e4) {
    _0x5a8f58++;
  }
  return _0x2ca6b8("*Boom sender to:*\n\n " + _0x4fe834);
});
cmd({
  'pattern': "shutdown",
  'desc': "Shutdown the bot.",
  'category': "owner",
  'use': '.shutdown',
  'react': '🛑',
  'filename': __filename
}, async (_0x33c443, _0x4f306f, _0x53f5e8, {
  from: _0x821945,
  isOwner: _0x38be3b,
  reply: _0x157faf
}) => {
  if (!_0x38be3b) {
    return _0x157faf("❌ You are not the owner!");
  }
  _0x157faf("🛑 Shutting down...").then(() => process.exit());
});
cmd({
  'pattern': "broadcast",
  'desc': "Broadcast a message to all groups.",
  'category': "owner",
  'use': ".broadcast",
  'react': '📢',
  'filename': __filename
}, async (_0x23bd08, _0x28ce5b, _0xa6439d, {
  from: _0x1b0122,
  isOwner: _0x5f2c15,
  args: _0x56783d,
  reply: _0x48bb2f
}) => {
  if (!_0x5f2c15) {
    return _0x48bb2f("❌ You are not the owner!");
  }
  if (_0x56783d.length === 0x0) {
    return _0x48bb2f("📢 Please provide a message to broadcast.");
  }
  const _0x2b1ade = _0x56783d.join(" ");
  const _0x257039 = Object.keys(await _0x23bd08.groupFetchAllParticipating());
  for (const _0x374f4f of _0x257039) {
    await _0x23bd08.sendMessage(_0x374f4f, {
      'text': _0x2b1ade
    }, {
      'quoted': _0x28ce5b
    });
  }
  _0x48bb2f("📢 Message broadcasted to all groups.");
});
cmd({
  'pattern': 'clearchats',
  'desc': "Clear all chats from the bot.",
  'category': 'owner',
  'use': ".clearchats",
  'react': '🧹',
  'filename': __filename
}, async (_0x54167e, _0x4d20fa, _0x2f4d18, {
  from: _0x47eaf8,
  isOwner: _0xe93db1,
  reply: _0x208513
}) => {
  if (!_0xe93db1) {
    return _0x208513("❌ You are not the owner!");
  }
  try {
    const _0x53039c = _0x54167e.chats.all();
    for (const _0x170240 of _0x53039c) {
      await _0x54167e.modifyChat(_0x170240.jid, "delete");
    }
    _0x208513("🧹 All chats cleared successfully!");
  } catch (_0x3092fe) {
    _0x208513("❌ Error clearing chats: " + _0x3092fe.message);
  }
});
