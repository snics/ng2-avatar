/* tslint:disable component-selector-name */

import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit, OnChanges {

  @Input('email') email: string;
  @Input('name') name: string;
  @Input('size') size = 100;
  @Input('background') background = this.getRandomColor();
  @Input('displayType') displayType = 'none';
  @Input('letter') letter = '?';
  @Input('defaultProtocol') defaultProtocol: string = null;

  gravatarUrl: string;
  displayImage = true;
  fontSize = 49;
  fontColor = '#FFFFFF';
  props: any = null;

  constructor() {
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for ( let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getLetter(): void {
    if (this.name && this.name.length) {
      const nameInitials = this.name.match(/\b(\w)/g);
      const nameLetters = nameInitials.slice(0, 3).join('');
      this.letter = nameLetters.toUpperCase();
    } else if (this.email && this.email.length) {
      console.log(this.email);
      const emailInitials = this.email.split('@')[0].match(/\b(\w)/g);
      const emailLetters = emailInitials.slice(0, 3).join('');
      this.letter = emailLetters.toUpperCase();
    }
  }

  getAvatar(): void {
    const md5 = new Md5();
    // tslint:disable-next-line
    if (this.email && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
      const hash = md5.start()
        .appendStr(this.email)
        .end();

      const protocol = this.defaultProtocol ? this.defaultProtocol + ':' : '';
      this.gravatarUrl = `${protocol}//www.gravatar.com/avatar/${hash}?s=${this.size}&d=404`;
      this.displayImage = true;
    } else {
      this.displayImage = false;
    }
  }

  ngOnInit() {
    this.fontSize = (39 * this.size) / 100;
    this.props = {
      size      : `${this.size}px`,
      lineheight: `${this.size}px`,
      background: this.background,
      fontSize  : `${this.fontSize}px`
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

    this.getLetter();
    this.getAvatar();
  }

  ngOnChanges() {
    this.getAvatar();
    this.getLetter();
  }

}
