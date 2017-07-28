import { Angular2Lesson10Task3Page } from './app.po';

describe('angular2-lesson10-task3 App', () => {
  let page: Angular2Lesson10Task3Page;

  beforeEach(() => {
    page = new Angular2Lesson10Task3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
