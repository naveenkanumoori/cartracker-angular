import { CarTrackerPage } from './app.po';

describe('car-tracker App', () => {
  let page: CarTrackerPage;

  beforeEach(() => {
    page = new CarTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
