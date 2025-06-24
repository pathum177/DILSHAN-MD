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
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb
} = require("../lib/database");
var tesadtag = '';
if (config.LANG === 'SI') {
  tesadtag = "*මට settings update කිරීමට text එකක් දෙන්න. !*";
} else {
  tesadtag = "*Give me text to update settings !*";
}
var desc1 = '';
if (config.LANG === 'SI') {
  desc1 = "එය groups settings fetures යාවත්කාලීන කරයි.";
} else {
  desc1 = "It updates groups setting fetures.";
}
var desc2 = '';
if (config.LANG === 'SI') {
  desc2 = "එය bot's settings යාවත්කාලීන කරයි.";
} else {
  desc2 = "It updates එය bot's  setting.";
}
var desc3 = '';
if (config.LANG === 'SI') {
  desc3 = "එය bot's configs යාවත්කාලීන කරයි.";
} else {
  desc3 = "It updates එය bot's  configs.";
}
var ONLGROUP = '';
if (config.LANG === 'SI') {
  ONLGROUP = "*මෙය group එකක් නොවේ !*";
} else {
  ONLGROUP = "*This is not a group !*";
}
var ADMIN = '';
if (config.LANG === 'SI') {
  ADMIN = "*ඔබ admin නොවේ !*";
} else {
  ADMIN = "*You are not an admin !*";
}
var ADMINim = '';
if (config.LANG === 'SI') {
  ADMINim = "*මම admin නොවේ !*";
} else {
  ADMINim = "*Im not an admin !*";
}
var BOTOW = '';
if (config.LANG) {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*";
} else {
  BOTOW = "*You are not bot's owner or moderator !*";
}
var alredy = "This setting alredy updated!";
if (config.LANG) {
  alredy = "මෙම සැකසුම....";
}
cmd({
  'pattern': "group",
  'alias': ["groupset", 'groupsettings'],
  'desc': desc1,
  'category': "owner",
  'use': ".group",
  'filename': __filename
}, async (_0x4a0e76, _0x32da99, _0x3ecfa5, {
  from: _0x206380,
  l: _0x10a2f5,
  quoted: _0x125d21,
  body: _0x50e981,
  isCmd: _0x167ef5,
  command: _0x481d9e,
  args: _0x560973,
  q: _0x2a54c7,
  isGroup: _0x34d1cb,
  sender: _0x3464fb,
  senderNumber: _0x349a8a,
  botNumber2: _0x358cd6,
  botNumber: _0xdc2f74,
  pushname: _0x2465ff,
  isMe: _0x3f3d8c,
  isOwner: _0x50a02d,
  groupMetadata: _0x12828c,
  groupName: _0xd715a5,
  participants: _0x8e8477,
  groupAdmins: _0x3bb94a,
  isBotAdmins: _0x4f3157,
  isAdmins: _0x1ef471,
  reply: _0x5ebbb4
}) => {
  try {
    if (!_0x34d1cb) {
      return await _0x5ebbb4(ONLGROUP);
    }
    if (!_0x1ef471) {
      return await _0x5ebbb4(ADMIN);
    }
    if (!_0x4f3157) {
      return await _0x5ebbb4(ADMINim);
    }
    const _0x13a510 = [{
      'title': "ANTI_LINK",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".antilink on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".antilink off"
      }]
    }, {
      'title': 'ANTI_BAD',
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".antibad on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".antibad off"
      }]
    }, {
      'title': "ANTI_BOT",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".antibot on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".antibot off"
      }]
    }];
    const _0xb8f137 = {
      'text': "*⚙️ DARK SHUTER SETTINGS ⚙️*\n\n_*⚒️ Select settings what you want to on or off*_",
      'footer': config.FOOTER,
      'title': '',
      'buttonText': "*🔢 Reply below number*",
      'sections': _0x13a510
    };
    await _0x4a0e76.listMessage(_0x206380, _0xb8f137, _0x32da99);
    _0x3ecfa5.react('⚙️');
  } catch (_0x298f0f) {
    _0x5ebbb4("*Error !!*");
    _0x10a2f5(_0x298f0f);
  }
});
cmd({
  'pattern': 'settings',
  'alias': ["setting", "botsetting"],
  'desc': desc2,
  'category': "owner",
  'use': ".settings",
  'filename': __filename
}, async (_0x4e64fd, _0x37aef8, _0x18b00d, {
  from: _0x379422,
  l: _0x2380ad,
  quoted: _0x93bc1d,
  body: _0x1d52af,
  isCmd: _0x3b77cf,
  command: _0x4bf0d1,
  args: _0x3450e8,
  q: _0x3891e1,
  isGroup: _0x189f2f,
  sender: _0x5ca5ff,
  senderNumber: _0xf17af0,
  botNumber2: _0x2e6e9f,
  botNumber: _0x396634,
  pushname: _0x3b59c7,
  isMe: _0x3ed56b,
  isOwner: _0x4fceba,
  groupMetadata: _0x41ac48,
  groupName: _0x386dee,
  participants: _0x2c6ede,
  groupAdmins: _0x4d3b33,
  isBotAdmins: _0x39bdeb,
  isAdmins: _0x4abf26,
  reply: _0x1fa027
}) => {
  try {
    if (!_0x3ed56b) {
      return await _0x1fa027("*OWNER COMMAND ⛔*");
    }
    const _0x56bbac = [{
      'title': 'MODE',
      'rows': [{
        'title': "PRIVATE ⚒️",
        'rowId': ".pv on"
      }, {
        'title': "PUBLIC ⚒️",
        'rowId': ".pv off"
      }]
    }, {
      'title': "ONLY_GROUP",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".onlygroup on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".onlygroup off"
      }]
    }, {
      'title': 'AUTO_STATUS_READ',
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autos on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autos off"
      }]
    }, {
      'title': "AUTO_MSG_READ",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autoread on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autoread off"
      }]
    }, {
      'title': "AUTO_RECORDING",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autorec on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autorec off"
      }]
    }, {
      'title': "AUTO_TYPING",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autotyping on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autotyping off"
      }]
    }, {
      'title': "READ_ONLY_COMMANDS",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".ronly on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".ronly off"
      }]
    }, {
      'title': 'AUTO_BLOCK',
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autoblock on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autoblock off"
      }]
    }, {
      'title': "ANTI_CALL",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".anticall on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".anticall off"
      }]
    }, {
      'title': "AUTO_REACT",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autoreact on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autoreact off"
      }]
    }, {
      'title': "AI_CHAT",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".aichat on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".aichat off"
      }]
    }, {
      'title': "ANTI_DELETE",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".antdel on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".antdel off"
      }]
    }];
    const _0x29cd75 = {
      'text': "*⚙️ DARK SHUTER SETTINGS ⚙️*\n\n_*⚒️ Select settings what you want to on or off*_",
      'footer': config.FOOTER,
      'title': '',
      'buttonText': "*🔢 Reply below number*",
      'sections': _0x56bbac
    };
    await _0x4e64fd.listMessage(_0x379422, _0x29cd75, _0x37aef8);
    _0x18b00d.react('⚙️');
  } catch (_0x2cd8f7) {
    _0x1fa027("*Error !!*");
    _0x2380ad(_0x2cd8f7);
  }
});
cmd({
  'alias': ["apply"],
  'filename': __filename
}, async (_0x365328, _0x14e0c6, _0x6c6d91, {
  from: _0x522537,
  l: _0x42f922,
  quoted: _0x5c3817,
  prefix: _0x42d7c5,
  body: _0x38fa8b,
  isCmd: _0x2823b8,
  command: _0x36319c,
  args: _0x2396fa,
  q: _0x817a93,
  isGroup: _0x46ef61,
  sender: _0x387660,
  senderNumber: _0x36bfba,
  botNumber2: _0x1840ed,
  botNumber: _0x400c63,
  pushname: _0x2cbf41,
  isMe: _0x3cfb2b,
  isOwner: _0x1b7323,
  groupMetadata: _0x39a1b2,
  groupName: _0x43a973,
  participants: _0x173ef0,
  groupAdmins: _0x27feca,
  isBotAdmins: _0x577904,
  isAdmins: _0x393358,
  reply: _0xe21ae8
}) => {
  try {
    if (!_0x3cfb2b) {
      return await _0xe21ae8("*OWNER COMMAND ⛔*");
    }
    const _0xc4cf70 = [{
      'buttonId': _0x42d7c5 + "alivemg " + _0x817a93,
      'buttonText': {
        'displayText': "Change bot alive massege ⛁"
      },
      'type': 0x1
    }, {
      'buttonId': _0x42d7c5 + "setlogo " + _0x817a93,
      'buttonText': {
        'displayText': "Change logo ⛁"
      },
      'type': 0x1
    }, {
      'buttonId': _0x42d7c5 + "setprefix " + _0x817a93,
      'buttonText': {
        'displayText': "Change bot prefix ⛁"
      },
      'type': 0x1
    }, {
      'buttonId': _0x42d7c5 + "resetdb " + _0x817a93,
      'buttonText': {
        'displayText': "Reset default ⛁"
      },
      'type': 0x1
    }];
    const _0x1d90d0 = {
      'image': {
        'url': config.LOGO
      },
      'caption': "*👾 DATABASE INFO CHANGE 👾*",
      'footer': config.FOOTER,
      'buttons': _0xc4cf70,
      'headerType': 0x1
    };
    return await _0x365328.buttonMessage(_0x522537, _0x1d90d0, _0x14e0c6);
  } catch (_0x4dce58) {
    _0xe21ae8(N_FOUND);
    _0x42f922(_0x4dce58);
  }
});
cmd({
  'pattern': 'antilink',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x59213c, _0x1ca845, _0x210ae2, {
  from: _0x5555ea,
  l: _0xa357da,
  quoted: _0x3ad1c4,
  body: _0x7be72,
  isCmd: _0x27613c,
  command: _0x32219b,
  args: _0x37f665,
  q: _0x178d25,
  isGroup: _0x5ef46c,
  sender: _0x57adee,
  senderNumber: _0x804ca3,
  botNumber2: _0x556d23,
  botNumber: _0x130dd7,
  pushname: _0x550d14,
  isMe: _0xd0a77c,
  isOwner: _0x3105e5,
  groupMetadata: _0x401afb,
  groupName: _0x4e4749,
  participants: _0x106bc2,
  groupAdmins: _0x187051,
  isBotAdmins: _0x4d5db4,
  isAdmins: _0x1a8062,
  reply: _0x5243ab
}) => {
  try {
    if (!_0xd0a77c) {
      return await _0x5243ab(BOTOW);
    }
    if (_0x178d25 === 'on') {
      let _0xac94f6 = await get('ANTI_LINK');
      if (_0xac94f6 === true) {
        return await _0x5243ab(alredy);
      }
      await input("ANTI_LINK", true);
      await _0x5243ab("*ANTI_LINK: " + _0x178d25 + '*');
    } else {
      let _0x41b81f = await get("ANTI_LINK");
      if (_0x41b81f === false) {
        return await _0x5243ab(alredy);
      }
      await input("ANTI_LINK", false);
      await _0x5243ab("*ANTI_LINK updated: " + _0x178d25 + '*');
    }
  } catch (_0x1c8ae0) {
    _0x5243ab("*Error !!*");
    _0xa357da(_0x1c8ae0);
  }
});
cmd({
  'pattern': "antdel",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x399306, _0x1fd30a, _0x44327b, {
  from: _0x17337d,
  l: _0x17669d,
  quoted: _0x4bdc96,
  body: _0x30e81c,
  isCmd: _0x4db930,
  command: _0x41e352,
  args: _0x481ff1,
  q: _0x454476,
  isGroup: _0x2a506f,
  sender: _0x45c743,
  senderNumber: _0x46e90f,
  botNumber2: _0x586f18,
  botNumber: _0xdd8bc1,
  pushname: _0x5662ed,
  isMe: _0xc1bb48,
  isOwner: _0x3abbbf,
  groupMetadata: _0x478caf,
  groupName: _0x5445ff,
  participants: _0x58d194,
  groupAdmins: _0x520c55,
  isBotAdmins: _0x2671f8,
  isAdmins: _0x970a2e,
  reply: _0x2d23fc
}) => {
  try {
    if (!_0xc1bb48) {
      return await _0x2d23fc(BOTOW);
    }
    if (_0x454476 === 'on') {
      let _0x3017e2 = await get("ANTI_DELETE");
      if (_0x3017e2 === true) {
        return await _0x2d23fc(alredy);
      }
      await input('ANTI_DELETE', true);
      await _0x2d23fc("*ANTI_DELETE updated: " + _0x454476 + '*');
    } else {
      let _0x5e45c5 = await get("ANTI_DELETE");
      if (_0x5e45c5 === false) {
        return await _0x2d23fc(alredy);
      }
      await input("ANTI_DELETE", false);
      await _0x2d23fc("*ANTI_DELETE updated: " + _0x454476 + '*');
    }
  } catch (_0x32a027) {
    _0x2d23fc("*Error !!*");
    _0x17669d(_0x32a027);
  }
});
cmd({
  'pattern': "antibot",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3bec6b, _0x18d1c7, _0x3cc3a6, {
  from: _0x2af003,
  l: _0x5f3d36,
  quoted: _0x1b0e84,
  body: _0x528643,
  isCmd: _0x306aeb,
  command: _0x4cbd70,
  args: _0x22751d,
  q: _0x5a4305,
  isGroup: _0x56b0e7,
  sender: _0x2706ba,
  senderNumber: _0x2ec778,
  botNumber2: _0x17b843,
  botNumber: _0x3119c6,
  pushname: _0x32451c,
  isMe: _0x42f2fd,
  isOwner: _0x418244,
  groupMetadata: _0x4995ae,
  groupName: _0x3d66ed,
  participants: _0x2f494e,
  groupAdmins: _0x5b4cb3,
  isBotAdmins: _0x4dad5b,
  isAdmins: _0x31e743,
  reply: _0x2803af
}) => {
  try {
    if (!_0x42f2fd) {
      return await _0x2803af(BOTOW);
    }
    if (_0x5a4305 === 'on') {
      let _0x4c945e = await get("ANTI_BOT");
      if (_0x4c945e === true) {
        return await _0x2803af(alredy);
      }
      await input("ANTI_BOT", true);
      await _0x2803af("*ANTI_BOT updated: " + _0x5a4305 + '*');
    } else {
      let _0x2b92dc = await get('ANTI_BOT');
      if (_0x2b92dc === false) {
        return await _0x2803af(alredy);
      }
      await input("ANTI_BOT", false);
      await _0x2803af("*ANTI_BOT updated: " + _0x5a4305 + '*');
    }
  } catch (_0x4aed51) {
    _0x2803af("*Error !!*");
    _0x5f3d36(_0x4aed51);
  }
});
cmd({
  'pattern': "aic",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4ad02c, _0xc8435e, _0x1acda4, {
  from: _0x49694f,
  l: _0x5dde4c,
  quoted: _0x12b50e,
  body: _0x1d7103,
  isCmd: _0x5b87c4,
  command: _0x13aabc,
  args: _0x549c88,
  q: _0x3c25e5,
  isGroup: _0x472a9a,
  sender: _0x28eb83,
  senderNumber: _0x34229a,
  botNumber2: _0x24093f,
  botNumber: _0x2edbd0,
  pushname: _0x487ffe,
  isMe: _0x27714f,
  isOwner: _0x9e5150,
  groupMetadata: _0x429075,
  groupName: _0x129472,
  participants: _0x2d558c,
  groupAdmins: _0x22dfee,
  isBotAdmins: _0x56e780,
  isAdmins: _0x3b1491,
  reply: _0x466e68
}) => {
  try {
    if (!_0x27714f) {
      return await _0x466e68(BOTOW);
    }
    if (_0x3c25e5 === 'on') {
      let _0x5d34c4 = await get('AI_CHAT');
      if (_0x5d34c4 === true) {
        return await _0x466e68(alredy);
      }
      await input("AI_CHAT", true);
      await _0x466e68("*AI_CHAT updated: " + _0x3c25e5 + '*');
    } else {
      let _0xc7a690 = await get("AI_CHAT");
      if (_0xc7a690 === false) {
        return await _0x466e68(alredy);
      }
      await input("AI_CHAT", false);
      await _0x466e68("*AI_CHAT updated: " + _0x3c25e5 + '*');
    }
  } catch (_0x3166c0) {
    _0x466e68("*Error !!*");
    _0x5dde4c(_0x3166c0);
  }
});
cmd({
  'pattern': "antibad",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3ccc62, _0x4e4634, _0xfed02e, {
  from: _0x4ce764,
  l: _0x41d705,
  quoted: _0x41c7b1,
  body: _0x1cac71,
  isCmd: _0x5226b4,
  command: _0x55a25d,
  args: _0x3325d7,
  q: _0x71782d,
  isGroup: _0x4da888,
  sender: _0xa5e06a,
  senderNumber: _0x5dbfc7,
  botNumber2: _0x4ae0bf,
  botNumber: _0x3e5f13,
  pushname: _0x49bd95,
  isMe: _0x249712,
  isOwner: _0x3d390c,
  groupMetadata: _0x11bc74,
  groupName: _0x398ff4,
  participants: _0x37e80c,
  groupAdmins: _0x7f1dc1,
  isBotAdmins: _0x2e8323,
  isAdmins: _0x53af47,
  reply: _0xa8f67e
}) => {
  try {
    if (!_0x249712) {
      return await _0xa8f67e(BOTOW);
    }
    if (_0x71782d === 'on') {
      let _0x7a7904 = await get('ANTI_BAD');
      if (_0x7a7904 === true) {
        return await _0xa8f67e(alredy);
      }
      await input('ANTI_BAD', true);
      await _0xa8f67e("*ANTI_BAD updated: " + _0x71782d + '*');
    } else {
      let _0x3a3fa7 = await get("ANTI_BAD");
      if (_0x3a3fa7 === false) {
        return await _0xa8f67e(alredy);
      }
      await input("ANTI_BAD", false);
      await _0xa8f67e("*ANTI_BAD updated: " + _0x71782d + '*');
    }
  } catch (_0x532d8a) {
    _0xa8f67e("*Error !!*");
    _0x41d705(_0x532d8a);
  }
});
cmd({
  'pattern': "onlygroup",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x295dfe, _0x57118e, _0x32b752, {
  from: _0x27228f,
  l: _0x4d029e,
  quoted: _0xb36b8e,
  body: _0x26bf80,
  isCmd: _0x5632ed,
  command: _0x2cd40c,
  args: _0x23df93,
  q: _0x2328c6,
  isGroup: _0x11705d,
  sender: _0x2db39e,
  senderNumber: _0x506930,
  botNumber2: _0x47b369,
  botNumber: _0x14b88d,
  pushname: _0x4abaa3,
  isMe: _0x46a895,
  isOwner: _0x19dc71,
  groupMetadata: _0xe06845,
  groupName: _0x2e65d1,
  participants: _0x40c268,
  groupAdmins: _0x2b5645,
  isBotAdmins: _0x1a7f12,
  isAdmins: _0xfe54e7,
  reply: _0x3ece70
}) => {
  try {
    if (!_0x46a895) {
      return await _0x3ece70(BOTOW);
    }
    if (_0x2328c6 === 'on') {
      let _0x100b5f = await get("ONLY_GROUP");
      if (_0x100b5f === true) {
        return await _0x3ece70(alredy);
      }
      await input("ONLY_GROUP", true);
      await _0x3ece70("*Only group updated: " + _0x2328c6 + '*');
    } else {
      let _0x155522 = await get("ONLY_GROUP");
      if (_0x155522 === false) {
        return await _0x3ece70(alredy);
      }
      await input("ONLY_GROUP", false);
      await _0x3ece70("*Only group updated: " + _0x2328c6 + '*');
    }
  } catch (_0x1174d5) {
    _0x3ece70("*Error !!*");
    _0x4d029e(_0x1174d5);
  }
});
cmd({
  'pattern': "autoreact",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2d14cb, _0x372646, _0x5cc2f2, {
  from: _0x3cfdc9,
  l: _0x1cbd52,
  quoted: _0x489267,
  body: _0x48f3f7,
  isCmd: _0x285f56,
  command: _0x1d490c,
  args: _0x399c28,
  q: _0x737eae,
  isGroup: _0x12d0b7,
  sender: _0x2bdee2,
  senderNumber: _0x2c1e08,
  botNumber2: _0x3762a5,
  botNumber: _0x4e253e,
  pushname: _0x1ba2f9,
  isMe: _0x1d7adf,
  isOwner: _0x127016,
  groupMetadata: _0x2d19c4,
  groupName: _0x250f00,
  participants: _0x33ffcc,
  groupAdmins: _0x31ad88,
  isBotAdmins: _0x18c041,
  isAdmins: _0x149ded,
  reply: _0x61739a
}) => {
  try {
    if (!_0x1d7adf) {
      return await _0x61739a(BOTOW);
    }
    if (_0x737eae === 'on') {
      let _0xd40940 = await get("AUTO_REACT");
      if (_0xd40940 === true) {
        return await _0x61739a(alredy);
      }
      await input("AUTO_REACT", true);
      await _0x61739a("*AUTO_REACT updated: " + _0x737eae + '*');
    } else {
      let _0x35394a = await get("AUTO_REACT");
      if (_0x35394a === false) {
        return await _0x61739a(alredy);
      }
      await input("AUTO_REACT", false);
      await _0x61739a("*AUTO_REACT updated: " + _0x737eae + '*');
    }
  } catch (_0x3d3dbc) {
    _0x61739a("*Error !!*");
    _0x1cbd52(_0x3d3dbc);
  }
});
cmd({
  'pattern': 'pv',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2c9441, _0xd8d92e, _0x446d1c, {
  from: _0x211fde,
  l: _0x5d2583,
  quoted: _0x59104a,
  body: _0x1955da,
  isCmd: _0x4d1680,
  command: _0x1a657a,
  args: _0xb8e2e3,
  q: _0x3c4806,
  isGroup: _0x3829a8,
  sender: _0x13690e,
  senderNumber: _0x2f86e7,
  botNumber2: _0x516b17,
  botNumber: _0x3d5062,
  pushname: _0x5db31d,
  isMe: _0x1b55a1,
  isOwner: _0x193c33,
  groupMetadata: _0xa56882,
  groupName: _0x1e57e1,
  participants: _0x4dd31b,
  groupAdmins: _0x5bdf62,
  isBotAdmins: _0x556e45,
  isAdmins: _0x48e4c0,
  reply: _0x514af6
}) => {
  try {
    if (!_0x1b55a1) {
      return await _0x514af6(BOTOW);
    }
    if (_0x3c4806 === 'on') {
      let _0x3c4956 = await get("PRIVATE");
      if (_0x3c4956 === true) {
        return await _0x514af6(alredy);
      }
      await input("PRIVATE", true);
      await _0x514af6("*PRIVATE MODE ON*");
    } else {
      let _0x3ba270 = await get("PRIVATE");
      if (_0x3ba270 === false) {
        return await _0x514af6(alredy);
      }
      await input("PRIVATE", false);
      await _0x514af6("*PUBLIC MODE ON*");
    }
  } catch (_0x3953d6) {
    _0x514af6("*Error !!*");
    _0x5d2583(_0x3953d6);
  }
});
cmd({
  'pattern': "anticall",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x88cb9, _0xba7cf2, _0x5a5def, {
  from: _0x32b9ed,
  l: _0x312377,
  quoted: _0x432b45,
  body: _0x74bc1c,
  isCmd: _0x16dc08,
  command: _0x24a18c,
  args: _0x2ab005,
  q: _0x672ba2,
  isGroup: _0x21801a,
  sender: _0x1d61b9,
  senderNumber: _0x1892aa,
  botNumber2: _0x3efb16,
  botNumber: _0x4a9695,
  pushname: _0x44a8c7,
  isMe: _0x5f5de2,
  isOwner: _0x337cd8,
  groupMetadata: _0x4bf6a9,
  groupName: _0x3434e2,
  participants: _0x2f09dc,
  groupAdmins: _0x5709bc,
  isBotAdmins: _0x3bec79,
  isAdmins: _0x10cc6f,
  reply: _0x176269
}) => {
  try {
    if (!_0x5f5de2) {
      return await _0x176269(BOTOW);
    }
    if (_0x672ba2 === 'on') {
      let _0x3c769e = await get("ANTI_CALL");
      if (_0x3c769e === true) {
        return await _0x176269(alredy);
      }
      await input("ANTI_CALL", true);
      await _0x176269("*ANTI_CALL updated: " + _0x672ba2 + '*');
    } else {
      let _0x275658 = await get('ANTI_CALL');
      if (_0x275658 === false) {
        return await _0x176269(alredy);
      }
      await input('ANTI_CALL', false);
      await _0x176269("*ANTI_CALL updated: " + _0x672ba2 + '*');
    }
  } catch (_0x463dec) {
    _0x176269("*Error !!*");
    _0x312377(_0x463dec);
  }
});
cmd({
  'pattern': "autoblock",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4b52ec, _0x2c5555, _0x117256, {
  from: _0x39f1d1,
  l: _0x3719ab,
  quoted: _0x359aa3,
  body: _0x1f9e36,
  isCmd: _0x199747,
  command: _0x21839c,
  args: _0x559532,
  q: _0x378df9,
  isGroup: _0x27ad53,
  sender: _0x1edfd1,
  senderNumber: _0x1c17ad,
  botNumber2: _0x2dfb0b,
  botNumber: _0x114c76,
  pushname: _0x2aca36,
  isMe: _0x49f708,
  isOwner: _0x420425,
  groupMetadata: _0x52827e,
  groupName: _0x317ccb,
  participants: _0x3402e4,
  groupAdmins: _0x3eff6d,
  isBotAdmins: _0x4ebba6,
  isAdmins: _0x5c2f2d,
  reply: _0x5e5990
}) => {
  try {
    if (!_0x49f708) {
      return await _0x5e5990(BOTOW);
    }
    if (_0x378df9 === 'on') {
      let _0x42ebb6 = await get("AUTO_BLOCK");
      if (_0x42ebb6 === true) {
        return await _0x5e5990(alredy);
      }
      await input("AUTO_BLOCK", true);
      await _0x5e5990("*AUTO_BLOCK updated: " + _0x378df9 + '*');
    } else {
      let _0x2c228d = await get("AUTO_BLOCK");
      if (_0x2c228d === false) {
        return await _0x5e5990(alredy);
      }
      await input("AUTO_BLOCK", false);
      await _0x5e5990("*AUTO_BLOCK updated: " + _0x378df9 + '*');
    }
  } catch (_0x3f68f3) {
    _0x5e5990("*Error !!*");
    _0x3719ab(_0x3f68f3);
  }
});
cmd({
  'pattern': "lang",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2902be, _0x169299, _0x105ee6, {
  from: _0x1602c1,
  l: _0x1570c4,
  quoted: _0xb1c5b4,
  body: _0x3271bb,
  isCmd: _0x74f8ae,
  command: _0xa05d65,
  args: _0x13110d,
  q: _0x556717,
  isGroup: _0x1a764e,
  sender: _0x407134,
  senderNumber: _0x5176c0,
  botNumber2: _0x585699,
  botNumber: _0x3883e4,
  pushname: _0x4a009f,
  isMe: _0x18522e,
  isOwner: _0x49302e,
  groupMetadata: _0x5ba12d,
  groupName: _0x8ce76,
  participants: _0x2f96f0,
  groupAdmins: _0x893f9e,
  isBotAdmins: _0xebd0cb,
  isAdmins: _0x1dd090,
  reply: _0x5c799e
}) => {
  try {
    if (!_0x18522e) {
      return await _0x5c799e(BOTOW);
    }
    let _0x49a473 = await get("LANG");
    if (_0x49a473 === _0x556717) {
      return await _0x5c799e(alredy);
    }
    await input("LANG", _0x556717);
    await _0x5c799e("*Language updated: " + _0x556717 + '*');
  } catch (_0x3bff0f) {
    _0x5c799e("*Error !!*");
    _0x1570c4(_0x3bff0f);
  }
});
cmd({
  'pattern': "uploadsz",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x259a15, _0x53b9a9, _0x581067, {
  from: _0xbe3ed7,
  l: _0x1ca568,
  quoted: _0x5303de,
  body: _0x36968d,
  isCmd: _0x3919bd,
  command: _0x40a177,
  args: _0x500053,
  q: _0x34b77a,
  isGroup: _0x2de6b6,
  sender: _0x2f1df7,
  senderNumber: _0x14f9bd,
  botNumber2: _0x25f64c,
  botNumber: _0x46cc11,
  pushname: _0x82413e,
  isMe: _0x434307,
  isOwner: _0x19e8f9,
  groupMetadata: _0x5c4135,
  groupName: _0xbb1aad,
  participants: _0x59ab50,
  groupAdmins: _0x270829,
  isBotAdmins: _0x2fc803,
  isAdmins: _0x2c79a2,
  reply: _0x108323
}) => {
  try {
    if (!_0x434307) {
      return await _0x108323(BOTOW);
    }
    let _0x3fa764 = await get("MAX_SIZE");
    if (_0x3fa764 === Number(_0x34b77a)) {
      return await _0x108323(alredy);
    }
    await input('MAX_SIZE', Number(_0x34b77a));
    await _0x108323("*Max upload size updated: " + _0x34b77a + '*');
  } catch (_0x501239) {
    _0x108323("*Error !!*");
    _0x1ca568(_0x501239);
  }
});
cmd({
  'pattern': "alivemg",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5c0f51, _0x3a27db, _0x41d552, {
  from: _0x1868ba,
  l: _0x3a1f0b,
  quoted: _0x37a169,
  body: _0x44e682,
  isCmd: _0x5198fa,
  command: _0x3fd5d,
  args: _0x2a760e,
  q: _0x33382f,
  isGroup: _0x455f5f,
  sender: _0x1d63cc,
  senderNumber: _0x224d95,
  botNumber2: _0x5df64a,
  botNumber: _0x3db318,
  pushname: _0x1950ee,
  isMe: _0x4cf642,
  isOwner: _0x1e03d2,
  groupMetadata: _0x4a3287,
  groupName: _0x41f5d4,
  participants: _0xd984aa,
  groupAdmins: _0x4a87ee,
  isBotAdmins: _0x56c996,
  isAdmins: _0x322a61,
  reply: _0x597edc
}) => {
  try {
    if (!_0x4cf642) {
      return await _0x597edc(BOTOW);
    }
    let _0x20077a = await get("ALIVE");
    if (_0x20077a === _0x33382f) {
      return await _0x597edc(alredy);
    }
    await input("ALIVE", _0x33382f);
    await _0x597edc("*Alive massage updated:* " + _0x33382f);
  } catch (_0x258893) {
    _0x597edc("*Error !!*");
    _0x3a1f0b(_0x258893);
  }
});
cmd({
  'pattern': 'active',
  'category': 'movie',
  'desc': "Active to jid",
  'filename': __filename
}, async (_0x1f841c, _0x2f3483, _0x49f797, {
  from: _0x3ababf,
  l: _0x5001bf,
  quoted: _0x59366f,
  body: _0x2dbc13,
  isCmd: _0x11666c,
  command: _0x1caa4d,
  args: _0x53ffc2,
  q: _0x2b12f4,
  isGroup: _0x2e30d2,
  sender: _0x80d55a,
  senderNumber: _0x54b424,
  botNumber2: _0x2f6d09,
  botNumber: _0x4549c8,
  pushname: _0x157055,
  isMe: _0x44d44d,
  isOwner: _0x1d234b,
  groupMetadata: _0x4c2e12,
  groupName: _0x17780e,
  participants: _0x2f6f3a,
  groupAdmins: _0x5b66e9,
  isBotAdmins: _0x401a80,
  isAdmins: _0x5a4f7a,
  reply: _0x475e19
}) => {
  try {
    if (!_0x44d44d && !_0x1d234b) {
      return await _0x475e19(BOTOW);
    }
    let _0x331f7e = await get("JID");
    if (_0x331f7e === _0x2b12f4) {
      return await _0x475e19(alredy);
    }
    await input('JID', _0x2b12f4);
    await _0x475e19("*Activeted:* " + _0x2b12f4);
  } catch (_0x14f298) {
    _0x475e19("*Error !!*");
    _0x5001bf(_0x14f298);
  }
});
cmd({
  'pattern': "setowner",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x508299, _0x48a205, _0x31ec00, {
  from: _0x5088e0,
  l: _0x41aaa8,
  quoted: _0x1dc22e,
  body: _0x5627cb,
  isCmd: _0x1284bb,
  command: _0x58b652,
  args: _0x319cda,
  q: _0x3a6a8e,
  isGroup: _0x17cc13,
  sender: _0x235248,
  senderNumber: _0x1affb2,
  botNumber2: _0xd00ff8,
  botNumber: _0x39b7c,
  pushname: _0x4dfa71,
  isMe: _0x3e72cf,
  isOwner: _0x1539d7,
  groupMetadata: _0x40be09,
  groupName: _0x1e0f81,
  participants: _0x20aa0a,
  groupAdmins: _0x15ceac,
  isBotAdmins: _0x5e77f1,
  isAdmins: _0x554b92,
  reply: _0x10ba6b
}) => {
  try {
    if (!_0x3e72cf && !_0x1539d7) {
      return await _0x10ba6b(BOTOW);
    }
    let _0x53f83e = await get("OWNER_NUMBER");
    if (_0x53f83e === _0x3a6a8e) {
      return await _0x10ba6b(alredy);
    }
    await input("OWNER_NUMBER", _0x3a6a8e);
    await _0x10ba6b("*OWNER_NUMBER:* " + _0x3a6a8e);
  } catch (_0x156fc5) {
    _0x10ba6b("*Error !!*");
    _0x41aaa8(_0x156fc5);
  }
});
cmd({
  'pattern': "setlogo",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x30f0b6, _0x23d5bb, _0x396f45, {
  from: _0x5da6e4,
  l: _0x2bf7af,
  quoted: _0x126c42,
  body: _0x5b2002,
  isCmd: _0x2c62fb,
  command: _0x42e994,
  args: _0x458ccd,
  q: _0x1e977b,
  isGroup: _0x1a1210,
  sender: _0x308a81,
  senderNumber: _0x58c52c,
  botNumber2: _0x3dafa0,
  botNumber: _0x5d8969,
  pushname: _0x52642f,
  isMe: _0x328fd1,
  isOwner: _0x462fee,
  groupMetadata: _0x26df54,
  groupName: _0x522dd5,
  participants: _0xffa151,
  groupAdmins: _0x282800,
  isBotAdmins: _0x2f50fb,
  isAdmins: _0x21d76b,
  reply: _0x341e4d
}) => {
  try {
    if (!_0x328fd1) {
      return await _0x341e4d(BOTOW);
    }
    let _0x265ed1 = await get("LOGO");
    if (_0x265ed1 === _0x1e977b) {
      return await _0x341e4d(alredy);
    }
    await input("LOGO", _0x1e977b);
    await _0x341e4d("*Logo updated: " + _0x1e977b + '*');
  } catch (_0x501117) {
    _0x341e4d("*Error !!*");
    _0x2bf7af(_0x501117);
  }
});
var needus = '';
if (config.LANG === 'SI') {
  needus = "එය දත්ත සමුදාය නැවත සකසයි.";
} else {
  needus = "It resets database.";
}
cmd({
  'pattern': "resetdb",
  'desc': needus,
  'category': "owner",
  'use': '.resetdb',
  'filename': __filename
}, async (_0x30795d, _0x7cf1a4, _0xf19b40, {
  from: _0xac67cf,
  l: _0x530dd8,
  quoted: _0x4b8bc1,
  body: _0x18f051,
  isCmd: _0x4dd659,
  command: _0x442867,
  args: _0x2ca24a,
  q: _0x22d4aa,
  isGroup: _0x4de757,
  sender: _0x43b1f7,
  senderNumber: _0x4d0fa5,
  botNumber2: _0x4b3809,
  botNumber: _0x471327,
  pushname: _0x148c2e,
  isMe: _0x2d52f8,
  isOwner: _0x7ef478,
  groupMetadata: _0x47e9ed,
  groupName: _0x164231,
  participants: _0x3ba63e,
  groupAdmins: _0x1aaa91,
  isBotAdmins: _0x3a5974,
  isAdmins: _0x2b896c,
  reply: _0x35a4a4
}) => {
  try {
    if (!_0x2d52f8) {
      return await _0x35a4a4(BOTOW);
    }
    await updfb();
    return _0x35a4a4("*Database reseted ✅*");
  } catch (_0x8a502f) {
    _0x35a4a4(cantf);
    _0x530dd8(_0x8a502f);
  }
});
cmd({
  'pattern': "autotyping",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x55581a, _0x3829d5, _0x34f66b, {
  from: _0x22c25f,
  l: _0x32c29f,
  quoted: _0x3b6976,
  body: _0x1ab90d,
  isCmd: _0x50ce0f,
  command: _0x421a7b,
  args: _0x20bd5c,
  q: _0x6d4cad,
  isGroup: _0x149fa2,
  sender: _0x135024,
  senderNumber: _0x27154f,
  botNumber2: _0x3ed2cb,
  botNumber: _0xe71383,
  pushname: _0xa67fda,
  isMe: _0x3490e9,
  isOwner: _0x577645,
  groupMetadata: _0x3ed7b1,
  groupName: _0x7f4efd,
  participants: _0x406574,
  groupAdmins: _0x591a53,
  isBotAdmins: _0x2e9fc6,
  isAdmins: _0x1d0f58,
  reply: _0x1d418d
}) => {
  try {
    if (!_0x3490e9) {
      return await _0x1d418d(BOTOW);
    }
    if (_0x6d4cad === 'on') {
      let _0x19e1cd = await get("AUTO_TYPING");
      if (_0x19e1cd === true) {
        return await _0x1d418d(alredy);
      }
      await input("AUTO_TYPING", true);
      await _0x1d418d("*AUTO_TYPING updated: " + _0x6d4cad + '*');
    } else {
      let _0x36fc53 = await get("AUTO_TYPING");
      if (_0x36fc53 === false) {
        return await _0x1d418d(alredy);
      }
      await input('AUTO_TYPING', false);
      await _0x1d418d("*AUTO_TYPING updated: " + _0x6d4cad + '*');
    }
  } catch (_0x32adb8) {
    _0x1d418d("*Error !!*");
    _0x32c29f(_0x32adb8);
  }
});
cmd({
  'pattern': "autorec",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x59af46, _0x244a57, _0x2fd229, {
  from: _0x42857e,
  l: _0x1b8af9,
  quoted: _0x3fd7f8,
  body: _0x1deb14,
  isCmd: _0x2e084c,
  command: _0x95298f,
  args: _0x166fd6,
  q: _0x3efba5,
  isGroup: _0x4f17d0,
  sender: _0xaa2e9c,
  senderNumber: _0x2a16ec,
  botNumber2: _0x5eb468,
  botNumber: _0x44c016,
  pushname: _0x41b13a,
  isMe: _0x526276,
  isOwner: _0x42e2e3,
  groupMetadata: _0x31d67d,
  groupName: _0x165d23,
  participants: _0x436a5b,
  groupAdmins: _0x3c29c6,
  isBotAdmins: _0x30bb6d,
  isAdmins: _0x115e27,
  reply: _0x5dc3ec
}) => {
  try {
    if (!_0x526276) {
      return await _0x5dc3ec(BOTOW);
    }
    if (_0x3efba5 === 'on') {
      let _0x53ee34 = await get("AUTO_RECORDING");
      if (_0x53ee34 === true) {
        return await _0x5dc3ec(alredy);
      }
      await input('AUTO_RECORDING', true);
      await _0x5dc3ec("*AUTO_RECORDING updated: " + _0x3efba5 + '*');
    } else {
      let _0x7953ba = await get('AUTO_RECORDING');
      if (_0x7953ba === false) {
        return await _0x5dc3ec(alredy);
      }
      await input("AUTO_RECORDING", false);
      await _0x5dc3ec("*AUTO_RECORDING updated: " + _0x3efba5 + '*');
    }
  } catch (_0x1589a2) {
    _0x5dc3ec("*Error !!*");
    _0x1b8af9(_0x1589a2);
  }
});
cmd({
  'pattern': 'autos',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3118cc, _0x5dd19f, _0x15f4aa, {
  from: _0x3df330,
  l: _0x5aeba7,
  quoted: _0x1aa7e3,
  body: _0x4d70c5,
  isCmd: _0x2c5b26,
  command: _0x4700ba,
  args: _0x13192b,
  q: _0x3b6b79,
  isGroup: _0x432896,
  sender: _0x2f14f6,
  senderNumber: _0xa074c0,
  botNumber2: _0x3f1553,
  botNumber: _0x5553ac,
  pushname: _0x26e8c0,
  isMe: _0x2c39ed,
  isOwner: _0x5c53e0,
  groupMetadata: _0x39ad4c,
  groupName: _0x3fb280,
  participants: _0x1be702,
  groupAdmins: _0x301084,
  isBotAdmins: _0x16393a,
  isAdmins: _0x4fa5e4,
  reply: _0x66cfb1
}) => {
  try {
    if (!_0x2c39ed) {
      return await _0x66cfb1(BOTOW);
    }
    if (_0x3b6b79 === 'on') {
      let _0x198ce4 = await get('AUTO_READ_STATUS');
      if (_0x198ce4 === true) {
        return await _0x66cfb1(alredy);
      }
      await input("AUTO_READ_STATUS", true);
      await _0x66cfb1("*AUTO_READ_STATUS updated: " + _0x3b6b79 + '*');
    } else {
      let _0x22fee9 = await get('STATUS_VIEW');
      if (_0x22fee9 === false) {
        return await _0x66cfb1(alredy);
      }
      await input("AUTO_READ_STATUS", false);
      await _0x66cfb1("*AUTO_READ_STATUS updated: " + _0x3b6b79 + '*');
    }
  } catch (_0x225fdf) {
    _0x66cfb1("*Error !!*");
    _0x5aeba7(_0x225fdf);
  }
});
cmd({
  'pattern': "setprefix",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x33a418, _0x49e31f, _0x1bbf12, {
  from: _0x27d51d,
  l: _0x2c6a5b,
  quoted: _0x50acc6,
  body: _0x485349,
  isCmd: _0x3177e7,
  command: _0x3f0c6d,
  args: _0x11908e,
  q: _0x42dda1,
  isGroup: _0x6f5bbe,
  sender: _0xccf6f3,
  senderNumber: _0x347bec,
  botNumber2: _0x345860,
  botNumber: _0x4e63c6,
  pushname: _0x439ed7,
  isMe: _0x2d1059,
  isOwner: _0x178cd5,
  groupMetadata: _0x11b3da,
  groupName: _0x357ac1,
  participants: _0x15f4eb,
  groupAdmins: _0x24483b,
  isBotAdmins: _0x26225a,
  isAdmins: _0x54ed2e,
  reply: _0x5ae266
}) => {
  try {
    if (!_0x2d1059) {
      return await _0x5ae266(BOTOW);
    }
    let _0x1ba7ca = await get("PREFIX");
    if (_0x1ba7ca === _0x42dda1) {
      return await _0x5ae266(alredy);
    }
    await input("PREFIX", _0x42dda1);
    await _0x5ae266("*PREFIX updated:* " + _0x42dda1);
  } catch (_0x47c68a) {
    _0x5ae266("*Error !!*");
    _0x2c6a5b(_0x47c68a);
  }
});
cmd({
  'pattern': 'autoread',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x55c052, _0x54efa6, _0xf49025, {
  from: _0x5463b3,
  l: _0x2df899,
  quoted: _0x448a57,
  body: _0x2d1a8d,
  isCmd: _0x2eba82,
  command: _0x3b001c,
  args: _0x406ebe,
  q: _0x1ff43f,
  isGroup: _0x26d5b6,
  sender: _0x356494,
  senderNumber: _0x31d082,
  botNumber2: _0x147f2c,
  botNumber: _0x3966b5,
  pushname: _0x503a3e,
  isMe: _0x38118e,
  isOwner: _0x470bdd,
  groupMetadata: _0x4f4ebb,
  groupName: _0x44c69c,
  participants: _0x269a53,
  groupAdmins: _0x309c40,
  isBotAdmins: _0x2326de,
  isAdmins: _0x594b89,
  reply: _0x5347a9
}) => {
  try {
    if (!_0x38118e) {
      return await _0x5347a9(BOTOW);
    }
    if (_0x1ff43f === 'on') {
      let _0x57101d = await get("AUTO_MSG_READ");
      if (_0x57101d === true) {
        return await _0x5347a9(alredy);
      }
      await input('AUTO_MSG_READ', true);
      await _0x5347a9("*AUTO_MSG_READ updated: " + _0x1ff43f + '*');
    } else {
      let _0x2009a0 = await get('AUTO_MSG_READ');
      if (_0x2009a0 === false) {
        return await _0x5347a9(alredy);
      }
      await input('AUTO_MSG_READ', false);
      await _0x5347a9("*AUTO_MSG_READ updated: " + _0x1ff43f + '*');
    }
  } catch (_0x245e75) {
    _0x5347a9("*Error !!*");
    _0x2df899(_0x245e75);
  }
});
cmd({
  'pattern': "ronly",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x11f466, _0xb19bfe, _0x30fe31, {
  from: _0x1a8dbf,
  l: _0x4840c6,
  quoted: _0x252807,
  body: _0x72d11e,
  isCmd: _0x2d5500,
  command: _0x246eac,
  args: _0x571b80,
  q: _0x10f66b,
  isGroup: _0x371d40,
  sender: _0x4e0e66,
  senderNumber: _0x2d80c4,
  botNumber2: _0x2c673f,
  botNumber: _0x448caf,
  pushname: _0x1a079a,
  isMe: _0x192dbe,
  isOwner: _0xcdee2c,
  groupMetadata: _0x232139,
  groupName: _0x10190f,
  participants: _0x71a71d,
  groupAdmins: _0x232624,
  isBotAdmins: _0x42ff6f,
  isAdmins: _0x3cce2e,
  reply: _0xee1a6
}) => {
  try {
    if (!_0x192dbe) {
      return await _0xee1a6(BOTOW);
    }
    if (_0x10f66b === 'on') {
      let _0x46dda1 = await get('CMD_ONLY_READ');
      if (_0x46dda1 === true) {
        return await _0xee1a6(alredy);
      }
      await input('CMD_ONLY_READ', true);
      await _0xee1a6("*CMD_ONLY_READ updated: " + _0x10f66b + '*');
    } else {
      let _0x39122f = await get("CMD_ONLY_READ");
      if (_0x39122f === false) {
        return await _0xee1a6(alredy);
      }
      await input("CMD_ONLY_READ", false);
      await _0xee1a6("*CMD_ONLY_READ updated: " + _0x10f66b + '*');
    }
  } catch (_0x116d3c) {
    _0xee1a6("*Error !!*");
    _0x4840c6(_0x116d3c);
  }
});
