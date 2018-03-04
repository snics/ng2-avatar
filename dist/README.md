# ng2-avatar

[![npm version](https://badge.fury.io/js/ng2-avatar.svg)](https://badge.fury.io/js/ng2-avatar),
[![Build Status](https://travis-ci.org/snics/ng2-avatar.svg?branch=master)](https://travis-ci.org/snics/ng2-avatar)
[![Coverage Status](https://coveralls.io/repos/github/snics/ng2-avatar/badge.svg?branch=master)](https://coveralls.io/github/snics/ng2-avatar?branch=master)
[![dependency Status](https://david-dm.org/snics/ng2-avatar/status.svg)](https://david-dm.org/snics/ng2-avatar)
[![devDependency Status](https://david-dm.org/snics/ng2-avatar/dev-status.svg?branch=master)](https://david-dm.org/snics/ng2-avatar#info=devDependencies)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/snics/ng2-avatar#the-mit-license)

Angular Avatar (ng2-avatar) is a simple and lightweight avatar component

## Demo

View all the directives in action at https://snics.github.io/ng2-avatar

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ng2-avatar` via:
```shell
npm install --save ng2-avatar
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ng2-avatar`:
```js
map: {
  'ng2-avatar': 'node_modules/ng2-avatar/bundles/ng2-avatar.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { AvatarModule } from 'ng2-avatar';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` AvatarModule.forRoot()`):
```js
import { AvatarModule } from 'ng2-avatar';

@NgModule({
  declarations: [
    AppComponent, 
    ...
  ],
  imports: [
    AvatarModule.forRoot(), 
    ...
  ],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` AvatarModule `:

```js
import { AvatarModule } from 'ng2-avatar';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

# Usage
```html
  <avatar [email]="email" [displayType]="'circle'"></avatar>
  <input type="email" [(ngModel)]="email">
```

# Configuration
| configuration option |  type  |   default    | description                                                                                      |
|:---------------------|:------:|:------------:|:-------------------------------------------------------------------------------------------------|
| email                | String |     none     | This email is for generated the initials letters or get the picture from Gravatar API (required) |
| name                 | string |     none     | This name is for generated the initials letters (required)                                       |
| size                 | number |     100      | Is the size of the image and avatar                                                              |
| background           | string | Random color | The background colors for the letter's avatar                                                    |
| displayType          | string |    circle    | none, circle, rounded                                                                              |
| letter               | string |      ?       | These are the default letter                                                                     |
| defaultProtocol      | string |      null    | specifies a protocol or uses protocol-agnostic gravatar url when empty                              |

## License

Copyright (c) 2017 Nico Swiatecki. Licensed under the MIT License (MIT) - *Initial work* - [Snics](https://github.com/snics)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
