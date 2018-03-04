"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* tslint:disable */
var Md5 = exports.Md5 = function () {
    function Md5() {}
    Md5.AddUnsigned = function (lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (!!(lX4 & lY4)) {
            return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }
        if (!!(lX4 | lY4)) {
            if (!!(lResult & 0x40000000)) {
                return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
            } else {
                return lResult ^ 0x40000000 ^ lX8 ^ lY8;
            }
        } else {
            return lResult ^ lX8 ^ lY8;
        }
    };
    Md5.FF = function (a, b, c, d, x, s, ac) {
        a = Md5.AddUnsigned(a, Md5.AddUnsigned(Md5.AddUnsigned(Md5.F(b, c, d), x), ac));
        return Md5.AddUnsigned(Md5.RotateLeft(a, s), b);
    };
    Md5.GG = function (a, b, c, d, x, s, ac) {
        a = Md5.AddUnsigned(a, Md5.AddUnsigned(Md5.AddUnsigned(Md5.G(b, c, d), x), ac));
        return Md5.AddUnsigned(Md5.RotateLeft(a, s), b);
    };
    Md5.HH = function (a, b, c, d, x, s, ac) {
        a = Md5.AddUnsigned(a, Md5.AddUnsigned(Md5.AddUnsigned(Md5.H(b, c, d), x), ac));
        return Md5.AddUnsigned(Md5.RotateLeft(a, s), b);
    };
    Md5.II = function (a, b, c, d, x, s, ac) {
        a = Md5.AddUnsigned(a, Md5.AddUnsigned(Md5.AddUnsigned(Md5.I(b, c, d), x), ac));
        return Md5.AddUnsigned(Md5.RotateLeft(a, s), b);
    };
    Md5.ConvertToWordArray = function (string) {
        var lWordCount,
            lMessageLength = string.length,
            lNumberOfWords_temp1 = lMessageLength + 8,
            lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64,
            lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16,
            lWordArray = Array(lNumberOfWords - 1),
            lBytePosition = 0,
            lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
            lByteCount++;
        }
        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };
    Md5.WordToHex = function (lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = lValue >>> lCount * 8 & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };
    Md5.Utf8Encode = function (string) {
        var utftext = "",
            c;
        string = string.replace(/\r\n/g, "\n");
        for (var n = 0; n < string.length; n++) {
            c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode(c >> 6 | 192);
                utftext += String.fromCharCode(c & 63 | 128);
            } else {
                utftext += String.fromCharCode(c >> 12 | 224);
                utftext += String.fromCharCode(c >> 6 & 63 | 128);
                utftext += String.fromCharCode(c & 63 | 128);
            }
        }
        return utftext;
    };
    Md5.init = function (string) {
        var temp;
        if (typeof string !== 'string') string = JSON.stringify(string);
        Md5.string = Md5.Utf8Encode(string);
        Md5.x = Md5.ConvertToWordArray(Md5.string);
        Md5.a = 0x67452301;
        Md5.b = 0xEFCDAB89;
        Md5.c = 0x98BADCFE;
        Md5.d = 0x10325476;
        for (Md5.k = 0; Md5.k < Md5.x.length; Md5.k += 16) {
            Md5.AA = Md5.a;
            Md5.BB = Md5.b;
            Md5.CC = Md5.c;
            Md5.DD = Md5.d;
            Md5.a = Md5.FF(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k], Md5.S11, 0xD76AA478);
            Md5.d = Md5.FF(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 1], Md5.S12, 0xE8C7B756);
            Md5.c = Md5.FF(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 2], Md5.S13, 0x242070DB);
            Md5.b = Md5.FF(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 3], Md5.S14, 0xC1BDCEEE);
            Md5.a = Md5.FF(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 4], Md5.S11, 0xF57C0FAF);
            Md5.d = Md5.FF(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 5], Md5.S12, 0x4787C62A);
            Md5.c = Md5.FF(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 6], Md5.S13, 0xA8304613);
            Md5.b = Md5.FF(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 7], Md5.S14, 0xFD469501);
            Md5.a = Md5.FF(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 8], Md5.S11, 0x698098D8);
            Md5.d = Md5.FF(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 9], Md5.S12, 0x8B44F7AF);
            Md5.c = Md5.FF(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 10], Md5.S13, 0xFFFF5BB1);
            Md5.b = Md5.FF(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 11], Md5.S14, 0x895CD7BE);
            Md5.a = Md5.FF(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 12], Md5.S11, 0x6B901122);
            Md5.d = Md5.FF(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 13], Md5.S12, 0xFD987193);
            Md5.c = Md5.FF(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 14], Md5.S13, 0xA679438E);
            Md5.b = Md5.FF(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 15], Md5.S14, 0x49B40821);
            Md5.a = Md5.GG(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 1], Md5.S21, 0xF61E2562);
            Md5.d = Md5.GG(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 6], Md5.S22, 0xC040B340);
            Md5.c = Md5.GG(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 11], Md5.S23, 0x265E5A51);
            Md5.b = Md5.GG(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k], Md5.S24, 0xE9B6C7AA);
            Md5.a = Md5.GG(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 5], Md5.S21, 0xD62F105D);
            Md5.d = Md5.GG(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 10], Md5.S22, 0x2441453);
            Md5.c = Md5.GG(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 15], Md5.S23, 0xD8A1E681);
            Md5.b = Md5.GG(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 4], Md5.S24, 0xE7D3FBC8);
            Md5.a = Md5.GG(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 9], Md5.S21, 0x21E1CDE6);
            Md5.d = Md5.GG(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 14], Md5.S22, 0xC33707D6);
            Md5.c = Md5.GG(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 3], Md5.S23, 0xF4D50D87);
            Md5.b = Md5.GG(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 8], Md5.S24, 0x455A14ED);
            Md5.a = Md5.GG(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 13], Md5.S21, 0xA9E3E905);
            Md5.d = Md5.GG(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 2], Md5.S22, 0xFCEFA3F8);
            Md5.c = Md5.GG(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 7], Md5.S23, 0x676F02D9);
            Md5.b = Md5.GG(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 12], Md5.S24, 0x8D2A4C8A);
            Md5.a = Md5.HH(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 5], Md5.S31, 0xFFFA3942);
            Md5.d = Md5.HH(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 8], Md5.S32, 0x8771F681);
            Md5.c = Md5.HH(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 11], Md5.S33, 0x6D9D6122);
            Md5.b = Md5.HH(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 14], Md5.S34, 0xFDE5380C);
            Md5.a = Md5.HH(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 1], Md5.S31, 0xA4BEEA44);
            Md5.d = Md5.HH(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 4], Md5.S32, 0x4BDECFA9);
            Md5.c = Md5.HH(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 7], Md5.S33, 0xF6BB4B60);
            Md5.b = Md5.HH(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 10], Md5.S34, 0xBEBFBC70);
            Md5.a = Md5.HH(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 13], Md5.S31, 0x289B7EC6);
            Md5.d = Md5.HH(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k], Md5.S32, 0xEAA127FA);
            Md5.c = Md5.HH(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 3], Md5.S33, 0xD4EF3085);
            Md5.b = Md5.HH(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 6], Md5.S34, 0x4881D05);
            Md5.a = Md5.HH(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 9], Md5.S31, 0xD9D4D039);
            Md5.d = Md5.HH(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 12], Md5.S32, 0xE6DB99E5);
            Md5.c = Md5.HH(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 15], Md5.S33, 0x1FA27CF8);
            Md5.b = Md5.HH(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 2], Md5.S34, 0xC4AC5665);
            Md5.a = Md5.II(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k], Md5.S41, 0xF4292244);
            Md5.d = Md5.II(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 7], Md5.S42, 0x432AFF97);
            Md5.c = Md5.II(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 14], Md5.S43, 0xAB9423A7);
            Md5.b = Md5.II(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 5], Md5.S44, 0xFC93A039);
            Md5.a = Md5.II(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 12], Md5.S41, 0x655B59C3);
            Md5.d = Md5.II(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 3], Md5.S42, 0x8F0CCC92);
            Md5.c = Md5.II(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 10], Md5.S43, 0xFFEFF47D);
            Md5.b = Md5.II(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 1], Md5.S44, 0x85845DD1);
            Md5.a = Md5.II(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 8], Md5.S41, 0x6FA87E4F);
            Md5.d = Md5.II(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 15], Md5.S42, 0xFE2CE6E0);
            Md5.c = Md5.II(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 6], Md5.S43, 0xA3014314);
            Md5.b = Md5.II(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 13], Md5.S44, 0x4E0811A1);
            Md5.a = Md5.II(Md5.a, Md5.b, Md5.c, Md5.d, Md5.x[Md5.k + 4], Md5.S41, 0xF7537E82);
            Md5.d = Md5.II(Md5.d, Md5.a, Md5.b, Md5.c, Md5.x[Md5.k + 11], Md5.S42, 0xBD3AF235);
            Md5.c = Md5.II(Md5.c, Md5.d, Md5.a, Md5.b, Md5.x[Md5.k + 2], Md5.S43, 0x2AD7D2BB);
            Md5.b = Md5.II(Md5.b, Md5.c, Md5.d, Md5.a, Md5.x[Md5.k + 9], Md5.S44, 0xEB86D391);
            Md5.a = Md5.AddUnsigned(Md5.a, Md5.AA);
            Md5.b = Md5.AddUnsigned(Md5.b, Md5.BB);
            Md5.c = Md5.AddUnsigned(Md5.c, Md5.CC);
            Md5.d = Md5.AddUnsigned(Md5.d, Md5.DD);
        }
        temp = Md5.WordToHex(Md5.a) + Md5.WordToHex(Md5.b) + Md5.WordToHex(Md5.c) + Md5.WordToHex(Md5.d);
        return temp.toLowerCase();
    };
    Md5.x = Array();
    Md5.S11 = 7;
    Md5.S12 = 12;
    Md5.S13 = 17;
    Md5.S14 = 22;
    Md5.S21 = 5;
    Md5.S22 = 9;
    Md5.S23 = 14;
    Md5.S24 = 20;
    Md5.S31 = 4;
    Md5.S32 = 11;
    Md5.S33 = 16;
    Md5.S34 = 23;
    Md5.S41 = 6;
    Md5.S42 = 10;
    Md5.S43 = 15;
    Md5.S44 = 21;
    Md5.RotateLeft = function (lValue, iShiftBits) {
        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
    };
    Md5.F = function (x, y, z) {
        return x & y | ~x & z;
    };
    Md5.G = function (x, y, z) {
        return x & z | y & ~z;
    };
    Md5.H = function (x, y, z) {
        return x ^ y ^ z;
    };
    Md5.I = function (x, y, z) {
        return y ^ (x | ~z);
    };
    return Md5;
}();
//# sourceMappingURL=Md5.js.map