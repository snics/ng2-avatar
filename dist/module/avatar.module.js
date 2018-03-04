'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AvatarModule = exports.AvatarComponent = undefined;

var _avatar = require('./component/avatar.component');

Object.defineProperty(exports, 'AvatarComponent', {
    enumerable: true,
    get: function get() {
        return _avatar.AvatarComponent;
    }
});

var _common = require('@angular/common');

var _core = require('@angular/core');

var AvatarModule = exports.AvatarModule = function () {
    function AvatarModule() {}
    AvatarModule.forRoot = function () {
        return {
            ngModule: AvatarModule,
            providers: []
        };
    };
    AvatarModule.decorators = [{ type: _core.NgModule, args: [{
            imports: [_common.CommonModule],
            exports: [_avatar.AvatarComponent],
            declarations: [_avatar.AvatarComponent]
        }] }];
    /** @nocollapse */
    AvatarModule.ctorParameters = [];
    return AvatarModule;
}();
//# sourceMappingURL=avatar.module.js.map