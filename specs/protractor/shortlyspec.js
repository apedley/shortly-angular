describe('shortly login page', function() {
  it('should load', function(){
    browser.get('http://localhost:8000/#/signin');
    // element(by.model('user.username')).sendKeys('test123');
    // element(by.model('user.password')).sendKeys('test123');
    expect(browser.getTitle()).toEqual('Shortly');
  });
  it('should log in ', function() {
    browser.get('http://localhost:8000/#/signin');
    element(by.model('user.username')).sendKeys('test123');
    element(by.model('user.password')).sendKeys('test123');
    element(by.id('signinbutton')).click();

    expect(element(by.model('user.username')).isPresent()).toBe(false);
  });

  it ('should not log in', function() {
    browser.get('http://localhost:8000/#/signin');
    element(by.model('user.username')).sendKeys('hi');
    element(by.model('user.password')).sendKeys('notapassword');
    element(by.id('signinbutton')).click();
    expect(element(by.model('user.username')).isPresent()).toBe(true);
  })
});

describe('shortly shorten page', function() {
  beforeEach(function() {
    browser.get('http://localhost:8000/#/signin');
    element(by.model('user.username')).sendKeys('test123');
    element(by.model('user.password')).sendKeys('test123');
    element(by.id('signinbutton')).click();
  });

  it('add a link', function() {
    browser.get('http://localhost:8000/#/shorten');
    element(by.model('urlText')).sendKeys('http://google.com');
    element(by.id('submitbutton')).click();
    browser.get('http://localhost:8000/#/');
    var linksList = element.all(by.repeater('link in data'));
    var link = linksList.get(linksList.count() - 1);
    console.log(link.getText());
  });
})