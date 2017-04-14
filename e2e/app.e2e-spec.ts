import { DoobooFrontendPage } from './app.po';

describe('dooboo-frontend App', () => {
  let page: DoobooFrontendPage;

  beforeEach(() => {
    page = new DoobooFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
