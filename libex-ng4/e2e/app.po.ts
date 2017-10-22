import { browser, by, element } from 'protractor';

export class LibexNg4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('libex-root h1')).getText();
  }
}
