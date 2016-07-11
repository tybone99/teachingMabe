var selenium = require('selenium-webdriver');

describe('The Google search site', function() {

    beforeEach(function(done) {
        this.driver = new selenium.Builder().
        withCapabilities(selenium.Capabilities.chrome()).
        build();

        this.driver.get('http://www.google.com/').then(done);
    });

    afterEach(function(done) {
        this.driver.quit().then(done);
    });

    it('should have a form with id=tsf and action=https://www.google.com/search', function(done) {
        var form = this.driver.findElement(selenium.By.id('tsf'));

        form.getAttribute('action').then(function(action) {
            expect(action).toBe('https://www.google.com/search');
            done();
        });
    });

    it('should submit a search term and change its url', function(done) {
        var searchBox = this.driver.findElement(selenium.By.id('lst-ib'));
        searchBox.sendKeys('selenium');

        var googleSearchBtn = this.driver.findElement(selenium.By.name('btnG'));
        googleSearchBtn.click();

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('#q=selenium');
            done();
        });
    });

    it('should submit a search term and get a result back', function(done) {
        var searchBox = this.driver.findElement(selenium.By.id('lst-ib'));
        searchBox.sendKeys('selenium');

        var googleSearchBtn = this.driver.findElement(selenium.By.name('btnG'));
        googleSearchBtn.click();

        this.driver.wait(selenium.until.elementLocated(selenium.By.id('rso')), 500, 'Could not locate the child element within the time specified');
        
        var firstResult = this.driver.findElement(selenium.By.css('#rso > div.srg > div:nth-child(1) > div > h3 > a'));

        firstResult.getText().then(function(text) {
            expect(text).toEqual('Selenium - Web Browser Automation');
            done();
        });
    });
});