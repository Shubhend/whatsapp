'use strict';
const _0x1fc5f1 = _0xccf1;
(function(_0x55c88f, _0x3e3080) {
    const _0x164ffd = _0xccf1,
        _0x360d09 = _0x55c88f();
    while (!![]) {
        try {
            const _0x487366 = -parseInt(_0x164ffd(0x140)) / 0x1 * (parseInt(_0x164ffd(0x12a)) / 0x2) + -parseInt(_0x164ffd(0x15b)) / 0x3 * (-parseInt(_0x164ffd(0x13d)) / 0x4) + parseInt(_0x164ffd(0x130)) / 0x5 * (parseInt(_0x164ffd(0x11d)) / 0x6) + -parseInt(_0x164ffd(0x126)) / 0x7 + parseInt(_0x164ffd(0x143)) / 0x8 * (parseInt(_0x164ffd(0x15a)) / 0x9) + parseInt(_0x164ffd(0x158)) / 0xa * (-parseInt(_0x164ffd(0x136)) / 0xb) + -parseInt(_0x164ffd(0x14d)) / 0xc * (-parseInt(_0x164ffd(0x14c)) / 0xd);
            if (_0x487366 === _0x3e3080) break;
            else _0x360d09['push'](_0x360d09['shift']());
        } catch (_0x536227) {
            _0x360d09['push'](_0x360d09['shift']());
        }
    }
}(_0x4fa1, 0xb2ae5));
const {
    default: makeWASocket,
    makeWALegacySocket,
    downloadContentFromMessage
} = require(_0x1fc5f1(0x125)), {
    useSingleFileAuthState,
    makeInMemoryStore,
    fetchLatestBaileysVersion,
    AnyMessageContent,
    delay,
    MessageRetryMap,
    useMultiFileAuthState
} = require(_0x1fc5f1(0x125)), {
    DisconnectReason
} = require(_0x1fc5f1(0x125)), QRCode = require('qrcode'), lib = require(_0x1fc5f1(0x15f)), fs = require('fs');
let sock = [],
    qrcode = [],
    intervalStore = [];

function _0xccf1(_0x2a8bb4, _0xe7e91e) {
    const _0x4fa1a0 = _0x4fa1();
    return _0xccf1 = function(_0xccf1fe, _0x3b63f3) {
        _0xccf1fe = _0xccf1fe - 0x115;
        let _0x3635e5 = _0x4fa1a0[_0xccf1fe];
        return _0x3635e5;
    }, _0xccf1(_0x2a8bb4, _0xe7e91e);
}
const {
    setStatus
} = require(_0x1fc5f1(0x162)), {
    autoReply
} = require(_0x1fc5f1(0x16a)), {
    formatReceipt
} = require(_0x1fc5f1(0x13c)), axios = require(_0x1fc5f1(0x129)), MAIN_LOGGER = require(_0x1fc5f1(0x146)), logger = MAIN_LOGGER[_0x1fc5f1(0x160)]({}), useStore = !process[_0x1fc5f1(0x150)]['includes']('--no-store'), msgRetryCounterMap = () => MessageRetryMap = {}, connectToWhatsApp = async (_0x36542a, _0x4fe36c = null) => {
    const _0x31dd01 = _0x1fc5f1;
    if (typeof qrcode[_0x36542a] !== _0x31dd01(0x153)) return _0x4fe36c !== null && _0x4fe36c['emit'](_0x31dd01(0x11b), {
        'token': _0x36542a,
        'data': qrcode[_0x36542a],
        'message': _0x31dd01(0x170)
    }), {
        'status': ![],
        'sock': sock[_0x36542a],
        'qrcode': qrcode[_0x36542a],
        'message': _0x31dd01(0x11a)
    };
    try {
        let _0x2be7da = sock[_0x36542a][_0x31dd01(0x15d)]['id']['split'](':');
        _0x2be7da = _0x2be7da[0x0] + _0x31dd01(0x148);
        const _0x2d3023 = await getPpUrl(_0x36542a, _0x2be7da);
        return _0x4fe36c !== null && _0x4fe36c[_0x31dd01(0x118)](_0x31dd01(0x141), {
            'token': _0x36542a,
            'user': sock[_0x36542a]['user'],
            'ppUrl': _0x2d3023
        }), {
            'status': !![],
            'message': 'Already\x20connected'
        };
    } catch (_0x1d9b12) {
        _0x4fe36c !== null && _0x4fe36c['emit'](_0x31dd01(0x139), {
            'token': _0x36542a,
            'message': 'Try\x20to\x20connecting\x20' + _0x36542a
        }), console['log']('Try\x20to\x20connecting\x20' + _0x36542a);
    }
    const {
        state: _0x14d8fe,
        saveCreds: _0xdf6961
    } = await useMultiFileAuthState('./credentials/' + _0x36542a), _0x4405e6 = await getChromeLates();
    console['log'](_0x31dd01(0x138) + _0x4405e6?.[_0x31dd01(0x173)]?.['versions'][0x0]?.[_0x31dd01(0x147)] + _0x31dd01(0x123) + (_0x4405e6?.[_0x31dd01(0x173)]?.[_0x31dd01(0x176)][_0x31dd01(0x15c)] > 0x0 ? !![] : ![]));
    const {
        version: _0x45992e,
        isLatest: _0x4604e8
    } = await fetchLatestBaileysVersion();
    return console[_0x31dd01(0x156)](_0x31dd01(0x135) + _0x45992e[_0x31dd01(0x14a)]('.') + _0x31dd01(0x123) + _0x4604e8), sock[_0x36542a] = makeWASocket({
        'version': _0x45992e,
        'browser': ['WatzApi\x20App', _0x31dd01(0x166), _0x4405e6?.[_0x31dd01(0x173)]?.[_0x31dd01(0x176)][0x0]?.[_0x31dd01(0x147)]],
        'logger': logger,
        'printQRInTerminal': !![],
        'auth': _0x14d8fe
    }), sock[_0x36542a]['ev']['on']('messages.upsert', _0x1a3be0 => {
        autoReply(_0x1a3be0, sock[_0x36542a]);
    }), sock[_0x36542a]['ev']['on']('connection.update', async _0x527dc9 => {
        const _0x1c9822 = _0x31dd01,
            {
                connection: _0x4811cc,
                qr: _0x7164cf,
                lastDisconnect: _0x158f27
            } = _0x527dc9;
        if (_0x4811cc === _0x1c9822(0x132)) {
            if (_0x158f27['error']?.[_0x1c9822(0x171)]?.[_0x1c9822(0x12f)] !== DisconnectReason[_0x1c9822(0x159)]) {
                if (_0x158f27[_0x1c9822(0x119)]?.[_0x1c9822(0x171)]?.[_0x1c9822(0x115)]?.['message'] === 'Stream\x20Errored\x20(restart\x20required)') {
                    delete qrcode[_0x36542a], connectToWhatsApp(_0x36542a, _0x4fe36c);
                    if (_0x4fe36c != null) _0x4fe36c[_0x1c9822(0x118)](_0x1c9822(0x139), {
                        'token': _0x36542a,
                        'message': _0x1c9822(0x11c)
                    });
                } else {
                    if (_0x158f27[_0x1c9822(0x119)]?.['output']?.[_0x1c9822(0x115)]?.[_0x1c9822(0x139)] === _0x1c9822(0x122)) {
                        delete qrcode[_0x36542a];
                        if (_0x4fe36c != null) _0x4fe36c[_0x1c9822(0x118)](_0x1c9822(0x139), {
                            'token': _0x36542a,
                            'message': _0x158f27[_0x1c9822(0x119)][_0x1c9822(0x171)][_0x1c9822(0x115)][_0x1c9822(0x139)],
                            'error': _0x158f27[_0x1c9822(0x119)]['output'][_0x1c9822(0x115)]['error']
                        });
                    }
                }
            } else _0x158f27[_0x1c9822(0x119)]?.[_0x1c9822(0x171)]?.[_0x1c9822(0x12f)] === 0x191 && (setStatus(_0x36542a, 'Disconnect'), console[_0x1c9822(0x156)](_0x1c9822(0x12c)), _0x4fe36c !== null && _0x4fe36c[_0x1c9822(0x118)]('message', {
                'token': _0x36542a,
                'message': _0x1c9822(0x12c)
            }), clearConnection(_0x36542a));
        }
        _0x7164cf && QRCode['toDataURL'](_0x7164cf, function(_0x5b031e, _0x4f2b70) {
            const _0xb0e13b = _0x1c9822;
            _0x5b031e && console[_0xb0e13b(0x156)](_0x5b031e), qrcode[_0x36542a] = _0x4f2b70, _0x4fe36c !== null && _0x4fe36c[_0xb0e13b(0x118)](_0xb0e13b(0x11b), {
                'token': _0x36542a,
                'data': _0x4f2b70,
                'message': _0xb0e13b(0x170)
            });
        });
        if (_0x4811cc === _0x1c9822(0x116)) {
            setStatus(_0x36542a, 'Connected');
            let _0x45598d = sock[_0x36542a][_0x1c9822(0x15d)]['id'][_0x1c9822(0x142)](':');
            _0x45598d = _0x45598d[0x0] + _0x1c9822(0x148);
            const _0x595ce4 = await getPpUrl(_0x36542a, _0x45598d);
            _0x4fe36c !== null && _0x4fe36c[_0x1c9822(0x118)](_0x1c9822(0x141), {
                'token': _0x36542a,
                'user': sock[_0x36542a]['user'],
                'ppUrl': _0x595ce4
            }), delete qrcode[_0x36542a];
        }
    }), sock[_0x36542a]['ev']['on'](_0x31dd01(0x151), _0xdf6961), {
        'sock': sock[_0x36542a],
        'qrcode': qrcode[_0x36542a]
    };
};
async function connectWaBeforeSend(_0x3aa644) {
    const _0xf47d06 = _0x1fc5f1;
    let _0x5e252a = undefined,
        _0x11d43c;
    _0x11d43c = await connectToWhatsApp(_0x3aa644), await _0x11d43c[_0xf47d06(0x16f)]['ev']['on'](_0xf47d06(0x145), _0x438f9e => {
        const {
            connection: _0x1b890a,
            qr: _0x30416c
        } = _0x438f9e;
        _0x1b890a === 'open' && (_0x5e252a = !![]), _0x30416c && (_0x5e252a = ![]);
    });
    let _0x27d7c0 = 0x0;
    while (typeof _0x5e252a === _0xf47d06(0x153)) {
        _0x27d7c0++;
        if (_0x27d7c0 > 0x4) break;
        await new Promise(_0x2b1637 => setTimeout(_0x2b1637, 0x3e8));
    }
    return _0x5e252a;
}
const sendText = async (_0x5800c8, _0x37eb22, _0x317fa1) => {
    const _0x4371f2 = _0x1fc5f1;
    try {
        const _0x1e237c = await sock[_0x5800c8][_0x4371f2(0x168)](formatReceipt(_0x37eb22), {
            'text': _0x317fa1
        });
        return _0x1e237c;
    } catch (_0x58cb9c) {
        return console[_0x4371f2(0x156)](_0x58cb9c), ![];
    }
}, sendMessage = async (_0xf61396, _0x1b8dd7, _0xf723a6) => {
    const _0x2a0d54 = _0x1fc5f1;
    try {
        const _0x26dca2 = JSON['parse'](_0xf723a6);
        let _0x515dba = ![];
        _0x1b8dd7['length'] > 0xe ? (_0x1b8dd7 = _0x1b8dd7 + _0x2a0d54(0x127), _0x515dba = !![]) : (_0x515dba = await isExist(_0xf61396, formatReceipt(_0x1b8dd7)), console[_0x2a0d54(0x156)](formatReceipt(_0x1b8dd7)));
        if (_0x515dba) {
            const _0x5d0696 = await sock[_0xf61396][_0x2a0d54(0x168)](formatReceipt(_0x1b8dd7), JSON[_0x2a0d54(0x172)](_0xf723a6));
            return _0x5d0696;
        } else return ![];
    } catch (_0x2dac8a) {
        return console[_0x2a0d54(0x156)](_0x2dac8a), ![];
    }
};
async function sendMedia(_0x36bc34, _0x2862ab, _0x540afd, _0xe54ced, _0x13e0ba, _0x8dce8a) {
    const _0x56a10f = _0x1fc5f1,
        _0x3f1855 = formatReceipt(_0x2862ab);
    try {
        if (_0x540afd == _0x56a10f(0x121)) var _0x4d7479 = await sock[_0x36bc34][_0x56a10f(0x168)](_0x3f1855, {
            'image': _0xe54ced ? {
                'url': _0xe54ced
            } : fs[_0x56a10f(0x16d)](_0x56a10f(0x13a) + _0x13e0ba),
            'caption': _0x8dce8a ? _0x8dce8a : null
        });
        else {
            if (_0x540afd == _0x56a10f(0x13e)) var _0x4d7479 = await sock[_0x36bc34]['sendMessage'](_0x3f1855, {
                'video': _0xe54ced ? {
                    'url': _0xe54ced
                } : fs[_0x56a10f(0x16d)](_0x56a10f(0x13a) + _0x13e0ba),
                'caption': _0x8dce8a ? _0x8dce8a : null
            });
            else {
                if (_0x540afd == _0x56a10f(0x128)) var _0x4d7479 = await sock[_0x36bc34][_0x56a10f(0x168)](_0x3f1855, {
                    'audio': _0xe54ced ? {
                        'url': _0xe54ced
                    } : fs[_0x56a10f(0x16d)]('src/public/temp/' + _0x13e0ba),
                    'caption': _0x8dce8a ? _0x8dce8a : null
                });
                else {
                    if (_0x540afd == _0x56a10f(0x161)) var _0x4d7479 = await sock[_0x36bc34][_0x56a10f(0x168)](_0x3f1855, {
                        'document': {
                            'url': _0xe54ced
                        },
                        'mimetype': 'application/pdf'
                    }, {
                        'url': _0xe54ced
                    });
                    else {
                        if (_0x540afd == _0x56a10f(0x169)) var _0x4d7479 = await sock[_0x36bc34]['sendMessage'](_0x3f1855, {
                            'document': {
                                'url': _0xe54ced
                            },
                            'mimetype': _0x56a10f(0x154)
                        }, {
                            'url': _0xe54ced
                        });
                        else {
                            if (_0x540afd == 'xls') var _0x4d7479 = await sock[_0x36bc34][_0x56a10f(0x168)](_0x3f1855, {
                                'document': {
                                    'url': _0xe54ced
                                },
                                'mimetype': _0x56a10f(0x154)
                            }, {
                                'url': _0xe54ced
                            });
                            else {
                                if (_0x540afd == _0x56a10f(0x163)) var _0x4d7479 = await sock[_0x36bc34][_0x56a10f(0x168)](_0x3f1855, {
                                    'document': {
                                        'url': _0xe54ced
                                    },
                                    'mimetype': _0x56a10f(0x167)
                                }, {
                                    'url': _0xe54ced
                                });
                                else {
                                    if (_0x540afd == _0x56a10f(0x124)) var _0x4d7479 = await sock[_0x36bc34]['sendMessage'](_0x3f1855, {
                                        'document': {
                                            'url': _0xe54ced
                                        },
                                        'mimetype': _0x56a10f(0x164)
                                    }, {
                                        'url': _0xe54ced
                                    });
                                    else {
                                        if (_0x540afd == _0x56a10f(0x11f)) var _0x4d7479 = await sock[_0x36bc34]['sendMessage'](_0x3f1855, {
                                            'document': {
                                                'url': _0xe54ced
                                            },
                                            'mimetype': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                                        }, {
                                            'url': _0xe54ced
                                        });
                                        else {
                                            if (_0x540afd == 'zip') var _0x4d7479 = await sock[_0x36bc34][_0x56a10f(0x168)](_0x3f1855, {
                                                'document': {
                                                    'url': _0xe54ced
                                                },
                                                'mimetype': _0x56a10f(0x131)
                                            }, {
                                                'url': _0xe54ced
                                            });
                                            else {
                                                if (_0x540afd == _0x56a10f(0x157)) var _0x4d7479 = await sock[_0x36bc34][_0x56a10f(0x168)](_0x3f1855, {
                                                    'document': {
                                                        'url': _0xe54ced
                                                    },
                                                    'mimetype': _0x56a10f(0x144)
                                                }, {
                                                    'url': _0xe54ced
                                                });
                                                else return console[_0x56a10f(0x156)](_0x56a10f(0x14e)), ![];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return _0x4d7479;
    } catch (_0x13d6de) {
        return console['log'](_0x13d6de), ![];
    }
}
async function sendButtonMessage(_0x492c98, _0x58c374, _0xd4e6cd, _0x1ec98a, _0xab6aed, _0x3445cf) {
    const _0x14e93a = _0x1fc5f1;
    let _0x432557 = _0x14e93a(0x133);
    try {
        const _0x3d7760 = _0xd4e6cd[_0x14e93a(0x11e)]((_0x25013a, _0x55b06d) => {
            const _0x26f241 = _0x14e93a;
            return console[_0x26f241(0x156)](_0x25013a), {
                'buttonId': _0x55b06d,
                'buttonText': {
                    'displayText': _0x25013a[_0x26f241(0x117)]
                },
                'type': 0x1
            };
        });
        if (_0x3445cf) var _0x143b2a = {
            'image': _0x432557 == _0x14e93a(0x133) ? {
                'url': _0x3445cf
            } : fs[_0x14e93a(0x16d)]('src/public/temp/' + _0x3445cf),
            'caption': _0x1ec98a,
            'footer': _0xab6aed,
            'buttons': _0x3d7760,
            'headerType': 0x4
        };
        else var _0x143b2a = {
            'text': _0x1ec98a,
            'footer': _0xab6aed,
            'buttons': _0x3d7760,
            'headerType': 0x1
        };
        const _0x5b85b7 = await sock[_0x492c98]['sendMessage'](formatReceipt(_0x58c374), _0x143b2a);
        return _0x5b85b7;
    } catch (_0x42ebb0) {
        return console[_0x14e93a(0x156)](_0x42ebb0), ![];
    }
}
async function sendTemplateMessage(_0x239a79, _0xb06672, _0x3d94ae, _0x45275d, _0x501fa0, _0x255da2) {
    const _0x50faf8 = _0x1fc5f1;
    try {
        console[_0x50faf8(0x156)](_0x3d94ae);
        if (_0x255da2) var _0x5d4bb4 = {
            'caption': _0x45275d,
            'footer': _0x501fa0,
            'templateButtons': _0x3d94ae,
            'image': {
                'url': _0x255da2
            }
        };
        else var _0x5d4bb4 = {
            'text': _0x45275d,
            'footer': _0x501fa0,
            'templateButtons': _0x3d94ae
        };
        const _0x388e66 = await sock[_0x239a79]['sendMessage'](formatReceipt(_0xb06672), _0x5d4bb4);
        return _0x388e66;
    } catch (_0x37c6c2) {
        return console['log'](_0x37c6c2), ![];
    }
}
async function sendListMessage(_0xb529e6, _0x2083e0, _0x439c58, _0x528501, _0x1c4379, _0x536fb6, _0xfbf559) {
    const _0x59c6c3 = _0x1fc5f1;
    try {
        const _0x53579e = {
                'text': _0x528501,
                'footer': _0x1c4379,
                'title': _0x536fb6,
                'buttonText': _0xfbf559,
                'sections': [_0x439c58]
            },
            _0xc047e4 = await sock[_0xb529e6][_0x59c6c3(0x168)](formatReceipt(_0x2083e0), _0x53579e);
        return _0xc047e4;
    } catch (_0x3b446f) {
        return console[_0x59c6c3(0x156)](_0x3b446f), ![];
    }
}
async function fetchGroups(_0x326321) {
    const _0x41ae16 = _0x1fc5f1;
    try {
        let _0x272090 = await sock[_0x326321][_0x41ae16(0x165)](),
            _0x1ea200 = Object[_0x41ae16(0x134)](_0x272090)[_0x41ae16(0x13f)](0x0)[_0x41ae16(0x11e)](_0x5a7aee => _0x5a7aee[0x1]);
        return _0x1ea200;
    } catch (_0x2deee4) {
        return ![];
    }
}
async function isExist(_0x202539, _0x108740) {
    const _0x1b004a = _0x1fc5f1;
    if (typeof sock[_0x202539] === 'undefined') {
        const _0x397d1e = await connectWaBeforeSend(_0x202539);
        if (!_0x397d1e) return ![];
    }
    try {
        if (_0x108740['includes'](_0x1b004a(0x127))) return !![];
        else {
            const [_0x3fe5ea] = await sock[_0x202539]['onWhatsApp'](_0x108740);
            return console[_0x1b004a(0x156)](_0x3fe5ea?.['exists'] || ![]), _0x3fe5ea;
        }
    } catch (_0x41a510) {
        return ![];
    }
}
async function getPpUrl(_0x44deae, _0x3c352e, _0x420471) {
    const _0x36de70 = _0x1fc5f1;
    let _0x37fd06;
    try {
        return _0x420471 ? _0x37fd06 = await sock[_0x44deae][_0x36de70(0x16c)](_0x3c352e, _0x36de70(0x121)) : _0x37fd06 = await sock[_0x44deae][_0x36de70(0x16c)](_0x3c352e), _0x37fd06;
    } catch (_0x3e93ca) {
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png';
    }
}
async function deleteCredentials(_0xef17cd, _0x1efac1 = null) {
    const _0xf83b55 = _0x1fc5f1;
    _0x1efac1 !== null && _0x1efac1[_0xf83b55(0x118)](_0xf83b55(0x139), {
        'token': _0xef17cd,
        'message': 'Logout\x20Progres..'
    });
    try {
        if (typeof sock[_0xef17cd] === _0xf83b55(0x153)) {
            const _0xfaf315 = await connectWaBeforeSend(_0xef17cd);
            _0xfaf315 && (sock[_0xef17cd][_0xf83b55(0x12d)](), delete sock[_0xef17cd]);
        } else sock[_0xef17cd][_0xf83b55(0x12d)](), delete sock[_0xef17cd];
        return delete qrcode[_0xef17cd], clearInterval(intervalStore[_0xef17cd]), setStatus(_0xef17cd, _0xf83b55(0x16b)), _0x1efac1 != null && (_0x1efac1[_0xf83b55(0x118)](_0xf83b55(0x152), _0xef17cd), _0x1efac1[_0xf83b55(0x118)](_0xf83b55(0x139), {
            'token': _0xef17cd,
            'message': _0xf83b55(0x12c)
        })), fs[_0xf83b55(0x137)]('./credentials/' + _0xef17cd) && fs['rmSync']('./credentials/' + _0xef17cd, {
            'recursive': !![],
            'force': !![]
        }, _0x16c927 => {
            if (_0x16c927) console['log'](_0x16c927);
        }), {
            'status': !![],
            'message': 'Deleting\x20session\x20and\x20credential'
        };
    } catch (_0x4f7e2d) {
        return console['log'](_0x4f7e2d), {
            'status': !![],
            'message': _0xf83b55(0x175)
        };
    }
}
async function getChromeLates() {
    const _0x2fa971 = _0x1fc5f1,
        _0xe8617 = await axios[_0x2fa971(0x16e)](_0x2fa971(0x149));
    return _0xe8617;
}

function clearConnection(_0x363f56) {
    const _0xf8f0b4 = _0x1fc5f1;
    clearInterval(intervalStore[_0x363f56]), delete sock[_0x363f56], delete qrcode[_0x363f56], setStatus(_0x363f56, _0xf8f0b4(0x16b)), fs['existsSync'](_0xf8f0b4(0x15e) + _0x363f56) && (fs['rmSync'](_0xf8f0b4(0x15e) + _0x363f56, {
        'recursive': !![],
        'force': !![]
    }, _0x474ed5 => {
        if (_0x474ed5) console['log'](_0x474ed5);
    }), console['log'](_0xf8f0b4(0x13b) + _0x363f56 + '\x20is\x20deleted'));
}
async function initialize(_0x2bf722, _0x376ae4) {
    const _0x4f0f1b = _0x1fc5f1,
        {
            token: _0x400bdd
        } = _0x2bf722['body'];
    if (_0x400bdd) {
        const _0xa4fdab = require('fs'),
            _0x113036 = _0x4f0f1b(0x15e) + _0x400bdd;
        if (_0xa4fdab[_0x4f0f1b(0x137)](_0x113036)) {
            sock[_0x400bdd] = undefined;
            const _0x32d3b5 = await connectWaBeforeSend(_0x400bdd);
            return _0x32d3b5 ? _0x376ae4['status'](0xc8)[_0x4f0f1b(0x14f)]({
                'status': !![],
                'message': 'Connection\x20restored'
            }) : _0x376ae4[_0x4f0f1b(0x12b)](0xc8)['json']({
                'status': ![],
                'message': _0x4f0f1b(0x120)
            });
        }
        return _0x376ae4[_0x4f0f1b(0x155)]({
            'status': ![],
            'message': _0x400bdd + _0x4f0f1b(0x174)
        });
    }
    return _0x376ae4['send']({
        'status': ![],
        'message': _0x4f0f1b(0x14b)
    });
}

function _0x4fa1() {
    const _0xce7035 = ['image', 'QR\x20refs\x20attempts\x20ended', ',\x20isLatest:\x20', 'doc', '@adiwajshing/baileys', '3983910YeBeWs', '@g.us', 'audio', 'axios', '1579516ziLjau', 'status', 'Connection\x20closed.\x20You\x20are\x20logged\x20out.', 'logout', 'exports', 'statusCode', '1279065mlvrUi', 'application/zip', 'close', 'url', 'entries', 'using\x20WA\x20v', '121VABIEP', 'existsSync', 'using\x20Chrome\x20v', 'message', 'src/public/temp/', 'credentials/', '../helper', '2154228RWpbIH', 'video', 'slice', '1NLJIuG', 'connection-open', 'split', '168vGoGSi', 'application/mp3', 'connection.update', '../../lib/pino', 'version', '@s.whatsapp.net', 'https://versionhistory.googleapis.com/v1/chrome/platforms/linux/channels/stable/versions', 'join', 'Wrong\x20Parameterss', '13935896DHCkgY', '12ogZWow', 'Please\x20add\x20your\x20won\x20role\x20of\x20mimetype', 'json', 'argv', 'creds.update', 'Unauthorized', 'undefined', 'application/excel', 'send', 'log', 'mp3', '375360opTOAP', 'loggedOut', '42318cjifIe', '6yfiuwQ', 'length', 'user', './credentials/', '../../lib', 'child', 'pdf', '../../database/index', 'xlsx', 'application/msword', 'groupFetchAllParticipating', 'Chrome', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'sendMessage', 'xls', './autoreply', 'Disconnect', 'profilePictureUrl', 'readFileSync', 'get', 'sock', 'Qrcode\x20updated,\x20please\x20scann\x20with\x20your\x20Whatsapp\x20Device', 'output', 'parse', 'data', '\x20Connection\x20failed,please\x20scan\x20first', 'Nothing\x20deleted', 'versions', 'payload', 'open', 'displayText', 'emit', 'error', 'Please\x20scann\x20qrcode', 'qrcode', 'Reconnecting', '6YhnvVo', 'map', 'docx', 'Connection\x20failed'];
    _0x4fa1 = function() {
        return _0xce7035;
    };
    return _0x4fa1();
}
module[_0x1fc5f1(0x12e)] = {
    'connectToWhatsApp': connectToWhatsApp,
    'sendText': sendText,
    'sendMedia': sendMedia,
    'sendButtonMessage': sendButtonMessage,
    'sendTemplateMessage': sendTemplateMessage,
    'sendListMessage': sendListMessage,
    'isExist': isExist,
    'getPpUrl': getPpUrl,
    'fetchGroups': fetchGroups,
    'deleteCredentials': deleteCredentials,
    'sendMessage': sendMessage,
    'initialize': initialize,
    'connectWaBeforeSend': connectWaBeforeSend
};