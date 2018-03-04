'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AvatarComponent = undefined;

var _core = require('@angular/core');

var _Md = require('../Md5');

/**
 * The main component for the avatar
 *
 * @example
 * <avatar [email]="email" [displayType]="'circle'"></avatar>
 *
 */
/* tslint:disable component-selector-name */
var AvatarComponent = exports.AvatarComponent = function () {
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
            var hash = _Md.Md5.init(this.email);
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
    AvatarComponent.decorators = [{ type: _core.Component, args: [{
            selector: 'avatar',
            template: "\n    <div class=\"avatar\"\n         *ngIf=\"props\"\n         [style.background-color]=\"props.background\"\n         [style.width]=\"props.size\"\n         [style.line-height]='props.lineheight'\n         [style.height]='props.size'\n         [style.font-size]='props.fontSize'\n         [style.border-radius]='props.borderradius'>\n          <img *ngIf=\"displayImage\"\n               [src]=\"gravatarUrl\"\n               (error)=\"displayImage = false;\"\n               alt=\"{{name}} | {{letter}}\"/>\n          <span *ngIf=\"!displayImage\" [style.color]='fontColor'>{{letter}}</span>\n    </div>\n  ",
            styles: ["\n    .avatar{text-align:center;overflow:hidden}.avatar img{vertical-align:top}\n  "]
        }] }];
    /** @nocollapse */
    AvatarComponent.ctorParameters = [];
    AvatarComponent.propDecorators = {
        'email': [{ type: _core.Input, args: ['email'] }],
        'name': [{ type: _core.Input, args: ['name'] }],
        'size': [{ type: _core.Input, args: ['size'] }],
        'background': [{ type: _core.Input, args: ['background'] }],
        'displayType': [{ type: _core.Input, args: ['displayType'] }],
        'letter': [{ type: _core.Input, args: ['letter'] }],
        'defaultProtocol': [{ type: _core.Input, args: ['defaultProtocol'] }]
    };
    return AvatarComponent;
}();
//# sourceMappingURL=avatar.component.js.map