'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) : typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/core'], factory) : factory(global.ng2Avatar = {}, global.ng.common, global.ng.core);
})(undefined, function (exports, common, core) {
    'use strict';

    /* tslint:disable */

    var Md5 = function () {
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

    /* tslint:disable component-selector-name */
    /**
     * The main component for the avatar
     *
     * @example
     * <avatar [email]="email" [displayType]="'circle'"></avatar>
     *
     */
    var AvatarComponent = function () {
        function AvatarComponent() {
            /**
             * The display size
             * @type {number}
             */
            this.size = 100;
            /**
             * Value to set a fixed color via HEX code
             * @type {string}
             */
            this.background = this.getRandomColor();
            /**
             * Value to set the display type
             * @type {string} - none|circle|rounded
             */
            this.displayType = 'none';
            /**
             * Value to set a default letter
             * @type {string}
             */
            this.letter = '?';
            /**
             * Value to set a default protocol
             * @type {string|null} - http|https
             */
            this.defaultProtocol = null;
            this.displayImage = true;
            this.fontSize = 49;
            this.fontColor = '#FFFFFF';
            this.props = null;
        }
        /**
         * Randomly generates a HEX color
         * @return {string}
         */
        AvatarComponent.prototype.getRandomColor = function () {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        /**
         * Set the avatar letter based on full name or email
         */
        AvatarComponent.prototype.getLetter = function () {
            if (this.name && this.name.length) {
                var nameInitials = this.name.match(/\b(\w)/g);
                var nameLetters = nameInitials.slice(0, 3).join('');
                this.letter = nameLetters.toUpperCase();
            } else if (this.email && this.email.length) {
                var emailInitials = this.email.split('@')[0].match(/\b(\w)/g);
                var emailLetters = emailInitials.slice(0, 3).join('');
                this.letter = emailLetters.toUpperCase();
            }
        };
        /**
         * Create a Gravatar API url
         */
        AvatarComponent.prototype.getAvatar = function () {
            // tslint:disable-next-line
            if (this.email && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
                var hash = Md5.init(this.email);
                var protocol = this.defaultProtocol ? this.defaultProtocol + ':' : '';
                this.gravatarUrl = protocol + "//www.gravatar.com/avatar/" + hash + "?s=" + this.size + "&d=404";
                this.displayImage = true;
            } else {
                this.displayImage = false;
            }
        };
        AvatarComponent.prototype.setCssProps = function () {
            this.fontSize = 39 * this.size / 100;
            this.props = {
                size: this.size + "px",
                lineheight: this.size + "px",
                background: this.background,
                fontSize: this.fontSize + "px"
            };
            switch (this.displayType) {
                case 'rounded':
                    this.props['borderradius'] = '5%';
                    break;
                case 'circle':
                    this.props['borderradius'] = '50%';
                    break;
                default:
                    this.props['borderradius'] = '0';
            }
        };
        /**
         * Set avatar size, background and display type
         */
        AvatarComponent.prototype.ngOnInit = function () {
            this.setCssProps();
            this.getLetter();
            this.getAvatar();
        };
        /**
         * Updates avatar image and letter on email updates
         */
        AvatarComponent.prototype.ngOnChanges = function () {
            this.getAvatar();
            this.getLetter();
        };
        AvatarComponent.decorators = [{ type: core.Component, args: [{
                selector: 'avatar',
                template: "\n    <div class=\"avatar\"\n         *ngIf=\"props\"\n         [style.background-color]=\"props.background\"\n         [style.width]=\"props.size\"\n         [style.line-height]='props.lineheight'\n         [style.height]='props.size'\n         [style.font-size]='props.fontSize'\n         [style.border-radius]='props.borderradius'>\n          <img *ngIf=\"displayImage\"\n               [src]=\"gravatarUrl\"\n               (error)=\"displayImage = false;\"\n               alt=\"{{name}} | {{letter}}\"/>\n          <span *ngIf=\"!displayImage\" [style.color]='fontColor'>{{letter}}</span>\n    </div>\n  ",
                styles: ["\n    .avatar{text-align:center;overflow:hidden}.avatar img{vertical-align:top}\n  "]
            }] }];
        /** @nocollapse */
        AvatarComponent.ctorParameters = [];
        AvatarComponent.propDecorators = {
            'email': [{ type: core.Input, args: ['email'] }],
            'name': [{ type: core.Input, args: ['name'] }],
            'size': [{ type: core.Input, args: ['size'] }],
            'background': [{ type: core.Input, args: ['background'] }],
            'displayType': [{ type: core.Input, args: ['displayType'] }],
            'letter': [{ type: core.Input, args: ['letter'] }],
            'defaultProtocol': [{ type: core.Input, args: ['defaultProtocol'] }]
        };
        return AvatarComponent;
    }();

    var AvatarModule = function () {
        function AvatarModule() {}
        AvatarModule.forRoot = function () {
            return {
                ngModule: AvatarModule,
                providers: []
            };
        };
        AvatarModule.decorators = [{ type: core.NgModule, args: [{
                imports: [common.CommonModule],
                exports: [AvatarComponent],
                declarations: [AvatarComponent]
            }] }];
        /** @nocollapse */
        AvatarModule.ctorParameters = [];
        return AvatarModule;
    }();

    exports.AvatarModule = AvatarModule;
    exports.AvatarComponent = AvatarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });
});
//# sourceMappingURL=ng2-avatar.umd.js.map