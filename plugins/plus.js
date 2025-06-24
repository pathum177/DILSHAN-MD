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
const cheerio = require("cheerio");
const fetch = require("node-fetch");
async function xnxxs(_0x15a88b) {
  return new Promise((_0x3bc085, _0x549c3b) => {
    fetch("https://www.xnxx.com/search/" + _0x15a88b + '/' + (Math.floor(Math.random() * 0x3) + 0x1), {
      'method': "get"
    }).then(_0x26e9c4 => _0x26e9c4.text()).then(_0x14f495 => {
      const _0x18958b = cheerio.load(_0x14f495, {
        'xmlMode': false
      });
      const _0x4c8854 = [];
      const _0x5513bf = [];
      const _0x1d72f4 = [];
      const _0x4af7ac = [];
      _0x18958b("div.mozaique").each(function (_0x52cb15, _0x35e80d) {
        _0x18958b(_0x35e80d).find("div.thumb").each(function (_0x336024, _0x483e9e) {
          _0x5513bf.push("https://www.xnxx.com" + _0x18958b(_0x483e9e).find('a').attr("href").replace("/THUMBNUM/", '/'));
        });
      });
      _0x18958b("div.mozaique").each(function (_0x1a6446, _0x422db9) {
        _0x18958b(_0x422db9).find("div.thumb-under").each(function (_0x42e843, _0x2ff62c) {
          _0x1d72f4.push(_0x18958b(_0x2ff62c).find('p.metadata').text());
          _0x18958b(_0x2ff62c).find('a').each(function (_0x3e3a43, _0x56339c) {
            _0x4c8854.push(_0x18958b(_0x56339c).attr("title"));
          });
        });
      });
      for (let _0x561b25 = 0x0; _0x561b25 < _0x4c8854.length; _0x561b25++) {
        _0x4af7ac.push({
          'title': _0x4c8854[_0x561b25],
          'info': _0x1d72f4[_0x561b25],
          'link': _0x5513bf[_0x561b25]
        });
      }
      _0x3bc085({
        'status': true,
        'result': _0x4af7ac
      });
    })['catch'](_0x25ed51 => _0x549c3b({
      'status': false,
      'result': _0x25ed51
    }));
  });
}
cmd({
  'pattern': "xnxx",
  'alias': ["xnxxs"],
  'use': ".xnxx <query>",
  'react': '🔞',
  'desc': "Download x video",
  'category': "download",
  'filename': __filename
}, async (_0x2111c9, _0x3aebff, _0x2e68db, {
  from: _0x3c050c,
  l: _0x4b154b,
  quoted: _0x1b865b,
  body: _0x58c90d,
  prefix: _0x452c48,
  isCmd: _0x44bd78,
  command: _0x30216e,
  args: _0x30f621,
  q: _0x459116,
  isGroup: _0x54df1d,
  sender: _0x255359,
  senderNumber: _0x234dbd,
  botNumber2: _0x40db4a,
  botNumber: _0x2619b2,
  pushname: _0xf0dd5e,
  isMe: _0x2a1e02,
  isOwner: _0x1a5a79,
  groupMetadata: _0x4c1b9b,
  groupName: _0xa9e92d,
  participants: _0x216bf4,
  groupAdmins: _0x123806,
  isBotAdmins: _0x5783a7,
  isAdmins: _0x4e4a04,
  reply: _0x3a975c
}) => {
  try {
    if (!_0x2a1e02) {
      return await _0x3a975c("*THIS COMMAND ONLY OWNER*");
    }
    if (!_0x459116) {
      return _0x3a975c("🚩 *Please give me words to search*");
    }
    let _0x4351e3 = await xnxxs(_0x459116);
    const _0xaeb40a = _0x4351e3.result;
    if (_0xaeb40a.length < 0x1) {
      return await _0x2111c9.sendMessage(_0x3c050c, {
        'text': N_FOUND
      }, {
        'quoted': _0x3aebff
      });
    }
    var _0x30aa4b = [];
    var _0x30aa4b = [];
    _0x4351e3.result.map(_0x3877ba => {
      _0x30aa4b.push({
        'buttonId': _0x452c48 + "xnxxdown " + _0x3877ba.link,
        'buttonText': {
          'displayText': '' + _0x3877ba.title
        },
        'type': 0x1
      });
    });
    const _0x467b27 = {
      'image': {
        'url': config.LOGO
      },
      'caption': "*🥃 DARK SHUTER X VIDEO DOWNLODER  🥃*",
      'footer': config.FOOTER,
      'buttons': _0x30aa4b,
      'headerType': 0x4
    };
    return await _0x2111c9.buttonMessage(_0x3c050c, _0x467b27, _0x3aebff);
  } catch (_0xca2f00) {
    _0x3a975c("*ERROR !!*");
    _0x4b154b(_0xca2f00);
  }
});
async function xdl(_0x4e6008) {
  return new Promise((_0x56fc5a, _0x51c9bf) => {
    fetch('' + _0x4e6008, {
      'method': "get"
    }).then(_0x4ef6eb => _0x4ef6eb.text()).then(_0xd96d4e => {
      const _0x17a127 = cheerio.load(_0xd96d4e, {
        'xmlMode': false
      });
      const _0x3da5d2 = _0x17a127("meta[property=\"og:title\"]").attr("content");
      const _0x4214a1 = _0x17a127("meta[property=\"og:duration\"]").attr("content");
      const _0x282aac = _0x17a127("meta[property=\"og:image\"]").attr("content");
      const _0xda2ac8 = _0x17a127("meta[property=\"og:video:type\"]").attr('content');
      const _0x31103a = _0x17a127("meta[property=\"og:video:width\"]").attr("content");
      const _0x3de8ff = _0x17a127("meta[property=\"og:video:height\"]").attr("content");
      const _0x420b6e = _0x17a127("span.metadata").text();
      const _0xa27742 = _0x17a127("#video-player-bg > script:nth-child(6)").html();
      const _0x698b08 = {
        'low': (_0xa27742.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
        'high': _0xa27742.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
        'HLS': _0xa27742.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1],
        'thumb': _0xa27742.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[0x1],
        'thumb69': _0xa27742.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[0x1],
        'thumbSlide': _0xa27742.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[0x1],
        'thumbSlideBig': _0xa27742.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[0x1]
      };
      _0x56fc5a({
        'status': true,
        'result': {
          'title': _0x3da5d2,
          'URL': _0x4e6008,
          'duration': _0x4214a1,
          'image': _0x282aac,
          'videoType': _0xda2ac8,
          'videoWidth': _0x31103a,
          'videoHeight': _0x3de8ff,
          'info': _0x420b6e,
          'files': _0x698b08
        }
      });
    })["catch"](_0x2e03ee => _0x51c9bf({
      'status': false,
      'result': _0x2e03ee
    }));
  });
}
cmd({
  'pattern': "xnxxdown",
  'alias': ["dlxnxx", "xnxxdl"],
  'react': '🔞',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x45e403, _0x4ebd30, _0x5a362e, {
  from: _0xe4ec40,
  l: _0x24e441,
  quoted: _0x29e11a,
  body: _0x4e3a84,
  isCmd: _0x156cdf,
  command: _0x42c637,
  args: _0x11710c,
  q: _0x5876a5,
  isGroup: _0x104cfa,
  sender: _0xe1140f,
  senderNumber: _0x2ea41f,
  botNumber2: _0x5f4e29,
  botNumber: _0x88e334,
  pushname: _0x4e18ed,
  isMe: _0x9b982c,
  isOwner: _0x858c8c,
  groupMetadata: _0x5bb297,
  groupName: _0x144077,
  participants: _0x3d96cc,
  groupAdmins: _0x58fa73,
  isBotAdmins: _0x1d3d19,
  isAdmins: _0x47cccb,
  reply: _0x34508f
}) => {
  try {
    if (!_0x5876a5) {
      return _0x34508f("*Please give me instagram url !!*");
    }
    let _0x366ab2 = await xdl(_0x5876a5);
    let _0xb85ec5 = _0x366ab2.result.title;
    await _0x45e403.sendMessage(_0xe4ec40, {
      'video': {
        'url': _0x366ab2.result.files.high
      },
      'caption': _0xb85ec5
    }, {
      'quoted': _0x4ebd30
    });
  } catch (_0x17154f) {
    _0x34508f("*Error !!*");
    console.log(_0x17154f);
  }
});
