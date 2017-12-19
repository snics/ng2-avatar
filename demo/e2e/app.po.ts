import { browser, element, by } from 'protractor';

export class Ng2AvatarDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
