'use strict';
const _0xaa9022 = _0x4c00;
(function(_0x439294, _0x3f6c38) {
    const _0x508e49 = _0x4c00,
        _0x3f4881 = _0x439294();
    while (!![]) {
        try {
            const _0x4c3f22 = parseInt(_0x508e49(0x1dc)) / 0x1 * (parseInt(_0x508e49(0x1eb)) / 0x2) + parseInt(_0x508e49(0x1f2)) / 0x3 * (-parseInt(_0x508e49(0x1ee)) / 0x4) + -parseInt(_0x508e49(0x1e2)) / 0x5 + -parseInt(_0x508e49(0x1e4)) / 0x6 * (-parseInt(_0x508e49(0x1da)) / 0x7) + parseInt(_0x508e49(0x1df)) / 0x8 + parseInt(_0x508e49(0x1e5)) / 0x9 + -parseInt(_0x508e49(0x1f1)) / 0xa * (parseInt(_0x508e49(0x1dd)) / 0xb);
            if (_0x4c3f22 === _0x3f6c38) break;
            else _0x3f4881['push'](_0x3f4881['shift']());
        } catch (_0x1e4d3a) {
            _0x3f4881['push'](_0x3f4881['shift']());
        }
    }
}(_0x2788, 0xa2abd));

function _0x2788() {
    const _0x18fe08 = ['Check\x20your\x20parameterr', '95428fuUaUc', 'end', 'processing', '5710xkUmyZ', '111UeTvse', 'send', 'Check\x20your\x20connection', 'deleteCredentials', 'isExist', 'sendMedia', '\x27\x20AND\x20campaign_id\x20=\x20\x27', 'delay', 'status', 'sender', 'The\x20destination\x20Number\x20not\x20registered\x20in\x20whatsapp\x20or\x20your\x20sender\x20not\x20connected', 'sendText', 'sendButtonMessage', 'parse', 'On\x20progress\x20blasat,you\x20can\x20check\x20the\x20report\x20at\x20history\x20blast\x20page', 'UPDATE\x20blasts\x20SET\x20status\x20=\x20\x27success\x27\x20WHERE\x20receiver\x20=\x20\x27', '../../database', 'exports', 'sendTemplateMessage', '63091yIinHK', 'Processing', '1076755ZmRISv', '21890kSvPch', '../../lib', '6407408yTOLgx', 'Check\x20your\x20parameter', 'Token\x20needed', '3214555PaKnDr', 'qrcode', '612gmSBSc', '4780836hHfDRD', 'connectToWhatsApp', 'body', './whatsapp', 'message', 'sendMessage', '2sxDDfD', 'log'];
    _0x2788 = function() {
        return _0x18fe08;
    };
    return _0x2788();
}

function _0x4c00(_0x22c0d3, _0x2fffc4) {
    const _0x2788ae = _0x2788();
    return _0x4c00 = function(_0x4c00fa, _0xd58e12) {
        _0x4c00fa = _0x4c00fa - 0x1d9;
        let _0x5547d4 = _0x2788ae[_0x4c00fa];
        return _0x5547d4;
    }, _0x4c00(_0x22c0d3, _0x2fffc4);
}
const wa = require(_0xaa9022(0x1e8)),
    lib = require(_0xaa9022(0x1de)),
    {
        dbQuery
    } = require(_0xaa9022(0x202)),
    {
        asyncForEach,
        formatReceipt
    } = require('../helper'),
    createInstance = async (_0xffb9b1, _0x5c024b) => {
        const _0x4da6b8 = _0xaa9022,
            {
                token: _0x2ae0a9
            } = _0xffb9b1[_0x4da6b8(0x1e7)];
        if (_0x2ae0a9) try {
            const _0x5dde2f = await wa[_0x4da6b8(0x1e6)](_0x2ae0a9, _0xffb9b1['io']),
                _0x5780d0 = _0x5dde2f?.[_0x4da6b8(0x1fa)],
                _0x555cb8 = _0x5dde2f?.[_0x4da6b8(0x1e9)];
            return _0x5c024b['send']({
                'status': _0x5780d0 ?? _0x4da6b8(0x1f0),
                'qrcode': _0x5dde2f?.[_0x4da6b8(0x1e3)],
                'message': _0x555cb8 ? _0x555cb8 : _0x4da6b8(0x1db)
            });
        } catch (_0x2a0be1) {
            return console[_0x4da6b8(0x1ec)](_0x2a0be1), _0x5c024b[_0x4da6b8(0x1f3)]({
                'status': ![],
                'error': _0x2a0be1
            });
        }
        _0x5c024b[_0x4da6b8(0x1fa)](0x193)[_0x4da6b8(0x1ef)](_0x4da6b8(0x1e1));
    }, sendText = async (_0x1ef0b5, _0x433513) => {
        const _0x686ae3 = _0xaa9022,
            {
                token: _0x3be157,
                number: _0x50b39b,
                text: _0x21f4a8
            } = _0x1ef0b5['body'];
        if (_0x3be157 && _0x50b39b && _0x21f4a8) {
            let _0x469399 = await wa[_0x686ae3(0x1f6)](_0x3be157, formatReceipt(_0x50b39b));
            if (!_0x469399) return _0x433513[_0x686ae3(0x1f3)]({
                'status': ![],
                'message': _0x686ae3(0x1fc)
            });
            const _0x283a9f = await wa[_0x686ae3(0x1fd)](_0x3be157, _0x50b39b, _0x21f4a8);
            if (_0x283a9f) return _0x433513[_0x686ae3(0x1f3)]({
                'status': !![],
                'data': _0x283a9f
            });
            return _0x433513[_0x686ae3(0x1f3)]({
                'status': ![],
                'message': 'Check\x20your\x20whatsapp\x20connection'
            });
        }
        _0x433513['send']({
            'status': ![],
            'message': _0x686ae3(0x1e0)
        });
    }, sendMedia = async (_0x5c4314, _0xab223f) => {
        const _0x69f2b5 = _0xaa9022,
            {
                token: _0x2e6d5e,
                number: _0x4f15e3,
                type: _0x5e3cb3,
                url: _0x5a2547,
                fileName: _0x524af9,
                caption: _0x5c20c1
            } = _0x5c4314['body'];
        if (_0x2e6d5e && _0x4f15e3 && _0x5e3cb3 && _0x5a2547 && _0x5c20c1) {
            let _0x3241ac = await wa[_0x69f2b5(0x1f6)](_0x2e6d5e, formatReceipt(_0x4f15e3));
            if (!_0x3241ac) return _0xab223f[_0x69f2b5(0x1f3)]({
                'status': ![],
                'message': _0x69f2b5(0x1fc)
            });
            const _0x43928d = await wa[_0x69f2b5(0x1f7)](_0x2e6d5e, _0x4f15e3, _0x5e3cb3, _0x5a2547, _0x524af9, _0x5c20c1);
            if (_0x43928d) return _0xab223f['send']({
                'status': !![],
                'data': _0x43928d
            });
            return _0xab223f['send']({
                'status': ![],
                'message': _0x69f2b5(0x1f4)
            });
        }
        _0xab223f[_0x69f2b5(0x1f3)]({
            'status': ![],
            'message': _0x69f2b5(0x1e0)
        });
    }, sendButtonMessage = async (_0x54f576, _0x125ab4) => {
        const _0x291de6 = _0xaa9022,
            {
                token: _0x382b5a,
                number: _0x1fa3bb,
                button: _0x2a4c87,
                message: _0x5e565a,
                footer: _0x5007df,
                image: _0x2109d2
            } = _0x54f576[_0x291de6(0x1e7)],
            _0x4f6ba6 = JSON[_0x291de6(0x1ff)](_0x2a4c87);
        if (_0x382b5a && _0x1fa3bb && _0x2a4c87 && _0x5e565a && _0x5007df) {
            let _0x5f4504 = await wa['isExist'](_0x382b5a, formatReceipt(_0x1fa3bb));
            if (!_0x5f4504) return _0x125ab4['send']({
                'status': ![],
                'message': _0x291de6(0x1fc)
            });
            const _0x4dc312 = await wa[_0x291de6(0x1fe)](_0x382b5a, _0x1fa3bb, _0x4f6ba6, _0x5e565a, _0x5007df, _0x2109d2);
            if (_0x4dc312) return _0x125ab4['send']({
                'status': !![],
                'data': _0x4dc312
            });
            return _0x125ab4['send']({
                'status': ![],
                'message': _0x291de6(0x1f4)
            });
        }
        _0x125ab4[_0x291de6(0x1f3)]({
            'status': ![],
            'message': _0x291de6(0x1ed)
        });
    }, sendTemplateMessage = async (_0x388bfd, _0x3dabd2) => {
        const _0x312a9d = _0xaa9022,
            {
                token: _0x2c579f,
                number: _0x13e92d,
                button: _0x4e165f,
                text: _0x53aa7b,
                footer: _0x4c4d55,
                image: _0x1d4569
            } = _0x388bfd['body'];
        if (_0x2c579f && _0x13e92d && _0x4e165f && _0x53aa7b && _0x4c4d55) {
            let _0x2546ef = await wa[_0x312a9d(0x1f6)](_0x2c579f, formatReceipt(_0x13e92d));
            if (!_0x2546ef) return _0x3dabd2[_0x312a9d(0x1f3)]({
                'status': ![],
                'message': 'The\x20destination\x20Number\x20not\x20registered\x20in\x20whatsapp\x20or\x20your\x20sender\x20not\x20connected'
            });
            const _0x222766 = await wa[_0x312a9d(0x1d9)](_0x2c579f, _0x13e92d, JSON[_0x312a9d(0x1ff)](_0x4e165f), _0x53aa7b, _0x4c4d55, _0x1d4569);
            if (_0x222766) return _0x3dabd2[_0x312a9d(0x1f3)]({
                'status': !![],
                'data': _0x222766
            });
            return _0x3dabd2[_0x312a9d(0x1f3)]({
                'status': ![],
                'message': _0x312a9d(0x1f4)
            });
        }
        _0x3dabd2[_0x312a9d(0x1f3)]({
            'status': ![],
            'message': _0x312a9d(0x1e0)
        });
    }, sendListMessage = async (_0x577f6e, _0x8329e8) => {
        const _0x19ddd8 = _0xaa9022,
            {
                token: _0x230433,
                number: _0x2c91fe,
                list: _0x3e9171,
                text: _0x567631,
                footer: _0x5bc5c1,
                title: _0x3406f7,
                buttonText: _0x547665
            } = _0x577f6e['body'];
        if (_0x230433 && _0x2c91fe && _0x3e9171 && _0x567631 && _0x5bc5c1 && _0x3406f7 && _0x547665) {
            let _0x1ea895 = await wa[_0x19ddd8(0x1f6)](_0x230433, formatReceipt(_0x2c91fe));
            if (!_0x1ea895) return _0x8329e8[_0x19ddd8(0x1f3)]({
                'status': ![],
                'message': _0x19ddd8(0x1fc)
            });
            const _0x30d56a = await wa['sendListMessage'](_0x230433, _0x2c91fe, JSON[_0x19ddd8(0x1ff)](_0x3e9171), _0x567631, _0x5bc5c1, _0x3406f7, _0x547665);
            if (_0x30d56a) return _0x8329e8[_0x19ddd8(0x1f3)]({
                'status': !![],
                'data': _0x30d56a
            });
            return _0x8329e8[_0x19ddd8(0x1f3)]({
                'status': ![],
                'message': _0x19ddd8(0x1f4)
            });
        }
        _0x8329e8[_0x19ddd8(0x1f3)]({
            'status': ![],
            'message': _0x19ddd8(0x1ed)
        });
    }, fetchGroups = async (_0x236ece, _0x3acdb7) => {
        const _0x232da7 = _0xaa9022,
            {
                token: _0x1bbc1e
            } = _0x236ece[_0x232da7(0x1e7)];
        if (_0x1bbc1e) {
            const _0x3162a4 = await wa['fetchGroups'](_0x1bbc1e);
            if (_0x3162a4) return _0x3acdb7['send']({
                'status': !![],
                'data': _0x3162a4
            });
            return _0x3acdb7[_0x232da7(0x1f3)]({
                'status': ![],
                'message': _0x232da7(0x1f4)
            });
        }
        _0x3acdb7['send']({
            'status': ![],
            'message': _0x232da7(0x1e0)
        });
    }, blast = async (_0x74a4e2, _0x38b84b) => {
        const _0x203d00 = _0xaa9022,
            _0xef3ed0 = _0x74a4e2['body']['data'],
            _0x30912d = JSON['parse'](_0xef3ed0),
            _0x432f2e = _0x74a4e2[_0x203d00(0x1e7)][_0x203d00(0x1f9)];

        function _0x3fb6df(_0x5d6a80) {
            return new Promise(_0x59a50e => {
                setTimeout(() => {
                    _0x59a50e('');
                }, _0x5d6a80);
            });
        }
        const _0x3775d4 = await wa[_0x203d00(0x1f6)](_0x30912d[0x0][_0x203d00(0x1fb)], formatReceipt(_0x30912d[0x0]['sender']));
        if (!_0x3775d4) return _0x38b84b[_0x203d00(0x1f3)]({
            'status': ![],
            'message': 'Check\x20your\x20whatsapp\x20connection'
        });
        return asyncForEach(_0x30912d, async (_0x37c52e, _0x43f00d) => {
            const _0x2a1aa7 = _0x203d00;
            console[_0x2a1aa7(0x1ec)](_0x43f00d);
            const {
                sender: _0x495239,
                receiver: _0x33cf6d,
                message: _0x335bab,
                campaign_id: _0x86cb0c
            } = _0x37c52e;
            if (_0x495239 && _0x33cf6d && _0x335bab) {
                const _0x344b30 = await wa[_0x2a1aa7(0x1ea)](_0x495239, _0x33cf6d, _0x335bab);
                if (_0x344b30) {
                    const _0x3229ca = await dbQuery(_0x2a1aa7(0x201) + _0x33cf6d + _0x2a1aa7(0x1f8) + _0x86cb0c + '\x27');
                } else {
                    const _0x5d3abe = await dbQuery('UPDATE\x20blasts\x20SET\x20status\x20=\x20\x27failed\x27\x20WHERE\x20receiver\x20=\x20\x27' + _0x33cf6d + _0x2a1aa7(0x1f8) + _0x86cb0c + '\x27');
                }
            }
            await _0x3fb6df(_0x74a4e2[_0x2a1aa7(0x1e7)]['delay'] * 0x3e8);
        }), _0x38b84b[_0x203d00(0x1f3)]({
            'status': !![],
            'message': _0x203d00(0x200)
        });
    }, deleteCredentials = async (_0xc558d2, _0x2cee34) => {
        const _0x5c1d9a = _0xaa9022,
            {
                token: _0x5d9eb7
            } = _0xc558d2[_0x5c1d9a(0x1e7)];
        if (_0x5d9eb7) {
            const _0x57a3f3 = await wa[_0x5c1d9a(0x1f5)](_0x5d9eb7);
            if (_0x57a3f3) return _0x2cee34['send']({
                'status': !![],
                'data': _0x57a3f3
            });
            return _0x2cee34['send']({
                'status': ![],
                'message': _0x5c1d9a(0x1f4)
            });
        }
        _0x2cee34[_0x5c1d9a(0x1f3)]({
            'status': ![],
            'message': _0x5c1d9a(0x1e0)
        });
    };
module[_0xaa9022(0x203)] = {
    'createInstance': createInstance,
    'sendText': sendText,
    'sendMedia': sendMedia,
    'sendButtonMessage': sendButtonMessage,
    'sendTemplateMessage': sendTemplateMessage,
    'sendListMessage': sendListMessage,
    'deleteCredentials': deleteCredentials,
    'fetchGroups': fetchGroups,
    'blast': blast
};