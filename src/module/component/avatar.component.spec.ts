import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';

import {AvatarComponent} from './avatar.component';

describe('AvatarComponent', function () {
  let comp: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should can sat avatar size', () => {
    comp.size = 250;

    fixture.detectChanges();
    expect(comp.fontSize).toEqual(97.5);
    expect(comp.props.size).toEqual('250px');
    expect(comp.props.size).not.toBeUndefined();
    expect(comp.props.lineheight).toEqual('250px');
    expect(comp.props.lineheight).not.toBeUndefined();
    expect(comp.props.fontSize).toEqual('97.5px');
    expect(comp.props.fontSize).not.toBeUndefined();
  });

  describe('should can sat display type', function () {
    it('should can sat display type to rounded', () => {
      comp.displayType = 'rounded';
      fixture.detectChanges();
      expect(comp.props.borderradius).toEqual('5%');
    });

    it('should can sat display type to circle', () => {
      comp.displayType = 'circle';
      fixture.detectChanges();
      expect(comp.props.borderradius).toEqual('50%');
    });

    it('should can sat display type to none', () => {
      fixture.detectChanges();
      expect(comp.props.borderradius).toEqual('0');
    });
  });

  describe('getRandomColor()', function () {

    it('should get a random color', () => {
      expect(comp.getRandomColor()).not.toEqual(comp.getRandomColor());
      expect(comp.getRandomColor().length).toEqual(7);
      expect(comp.getRandomColor()[0]).toEqual('#');
    });

  });

  describe('getLetter()', function () {
    it('should create letters by name', () => {
      expect(comp.letter).toEqual('?');

      expect(comp.name).toBeUndefined();
      comp.name = 'Alfonso Keenan';
      expect(comp.name).toEqual('Alfonso Keenan');
      comp.getLetter();
      expect(comp.letter).toEqual('AK');
    });


    it('should create letters by complex name', () => {
      expect(comp.letter).toEqual('?');

      expect(comp.name).toBeUndefined();
      comp.name = 'Alfonso H. Keenan';
      expect(comp.name).toEqual('Alfonso H. Keenan');
      comp.getLetter();
      expect(comp.letter).toEqual('AHK');


      comp.name = 'Alfonso Gertrude H. Keenan';
      expect(comp.name).toEqual('Alfonso Gertrude H. Keenan');
      comp.getLetter();
      expect(comp.letter).toEqual('AGH');
    });

    it('should create letters by email', () => {
      expect(comp.letter).toEqual('?');

      expect(comp.email).toBeUndefined();
      comp.email = 'alfonso.keenan@domain.com';
      expect(comp.email).toEqual('alfonso.keenan@domain.com');
      comp.getLetter();
      expect(comp.letter).toEqual('AK');
    });


    it('should create letters by complex email', () => {
      expect(comp.letter).toEqual('?');

      expect(comp.email).toBeUndefined();
      comp.email = 'alfonso.h.keenan@domain.com';
      expect(comp.email).toEqual('alfonso.h.keenan@domain.com');
      comp.getLetter();
      expect(comp.letter).toEqual('AHK');

      comp.email = 'alfonso.h.gertrude.keenan@domain.com';
      expect(comp.email).toEqual('alfonso.h.gertrude.keenan@domain.com');
      comp.getLetter();
      expect(comp.letter).toEqual('AHG');
    });
  });

  describe('getAvatar()', function () {
    it('should create Gravatar url', () => {
      expect(comp.displayImage).toBeTruthy();
      expect(comp.gravatarUrl).toBeUndefined();
      expect(comp.email).toBeUndefined();

      comp.email = 'alfonso.keenan@domain.com';
      comp.getAvatar();
      expect(comp.displayImage).toBeTruthy();
      expect(comp.gravatarUrl.indexOf('//www.gravatar.com/avatar/')).toBeGreaterThan(-1);
    });

    it('should can not create Gravatar url', () => {
      expect(comp.displayImage).toBeTruthy();
      expect(comp.gravatarUrl).toBeUndefined();
      expect(comp.email).toBeUndefined();

      comp.email = 'This is not an email';
      comp.getAvatar();
      expect(comp.displayImage).toBeFalsy();
    });

    it('should can not create Gravatar url', () => {
      expect(comp.displayImage).toBeTruthy();
      expect(comp.gravatarUrl).toBeUndefined();
      expect(comp.email).toBeUndefined();

      comp.email = 'This is not an email';
      comp.getAvatar();
      expect(comp.displayImage).toBeFalsy();
    });

    it('should have no protocol', () => {
      comp.email = 'alfonso.keenan@domain.com';

      comp.getAvatar();
      expect(comp.gravatarUrl.indexOf('http:')).toEqual(-1);
      expect(comp.gravatarUrl.indexOf('https:')).toEqual(-1);
    });

    it('should have http as a protocol', () => {
      comp.email = 'alfonso.keenan@domain.com';
      comp.defaultProtocol = 'http';

      comp.getAvatar();
      expect(comp.gravatarUrl.indexOf('http:')).toBeGreaterThan(-1);
      expect(comp.gravatarUrl.indexOf('https:')).toEqual(-1);
    });

    it('should have https as a protocol', () => {
      comp.email = 'alfonso.keenan@domain.com';
      comp.defaultProtocol = 'https';

      comp.getAvatar();
      expect(comp.gravatarUrl.indexOf('http:')).toEqual(-1);
      expect(comp.gravatarUrl.indexOf('https:')).toBeGreaterThan(-1);
    });
  });

});
