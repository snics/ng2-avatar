# ng2-avatar

[![npm version](https://img.shields.io/npm/v/ng2-avatar.svg?style=flat-square)](https://www.npmjs.com/package/snic/ng2-avatar)
[![devDependencies Status](https://img.shields.io/david/dev/snics/ng2-avatar.svg?style=flat-square)](https://david-dm.org/snics/ng2-avatar?type=dev)
[![Dependencies Status](https://david-dm.org/snics/ng2-avatar/status.svg)](https://david-dm.org/snics/ng2-avatar)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/snics/ng2-avatar#the-mit-license)

Angular 2/4 Avatar (ng2-avatar) is a simple and lightweight component that generates a letter's avatar or displayed a picture from Gravatar API

## Installation
1. Install the npm package.
```bash
npm i --save ng2-avatar
```

2. Import AvatarComponent in your application :
```TypeScript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AvatarModule } from "ng2-avatar";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AvatarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

# Usage
```
  <avatar [email]="email" [displayType]="'circle'"></avatar>
  <input type="email" [(ngModel)]="email">
```

# Configuration
| configuration option |  type  |    default   | description                                                                           |
|----------------------|:------:|:------------:|---------------------------------------------------------------------------------------|
| email                | String | ''           | This email is for generated the initials letters or get the picture from Gravatar API |
| name                 | string | ''           | This name is for generated the initials letters                                       |
| size                 | number | 100          | Is the size of the image and avatar                                                   |
| background           | string | Random color | The background colors for the letter's avatar                                         |
| displayType          | string | none         | none,circle,rounded                                                                   |
| letter               | string | ?            | These are the default letter                                                          |


### Dependencies

* [ts-md5](https://github.com/cotag/ts-md5) - The Md5 hashing framework used

### (The MIT License)

Copyright (c) 12.05.17 Nico Swiatecki - *Initial work* - [Snics](https://github.com/snics)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
