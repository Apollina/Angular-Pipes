import { Week3t2Page } from './app.po';

describe('week3t2 App', function() {
  let page: Week3t2Page;

  beforeEach(() => {
    page = new Week3t2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
