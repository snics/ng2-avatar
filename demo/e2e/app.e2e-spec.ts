import { Ng2AvatarDemoPage } from './app.po';

describe('ng2-avatar-demo App', () => {
  let page: Ng2AvatarDemoPage;

  beforeEach(() => {
    page = new Ng2AvatarDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
