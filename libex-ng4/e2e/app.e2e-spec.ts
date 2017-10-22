import { LibexNg4Page } from './app.po';

describe('libex-ng4 App', () => {
  let page: LibexNg4Page;

  beforeEach(() => {
    page = new LibexNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to libex!!');
  });
});
