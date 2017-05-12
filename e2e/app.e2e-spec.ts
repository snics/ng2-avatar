import { Ng2AvatarPage } from './app.po';

describe('ng2-avatar App', () => {
  let page: Ng2AvatarPage;

  beforeEach(() => {
    page = new Ng2AvatarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
