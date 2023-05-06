Feature('Contact to Bluescape support team');

Scenario('Connect with support team', async ({I}) => {
	try {
    await I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
	} catch (Exception) {
	I.wait(50);
	console.log('Waiting 20 seconds more for page to load.');
	}
	//I.waitForNavigation({waitUntil: 'domcontentloaded'});
	I.wait(30);
	//const scrText = await I.seeElement({xpath: '//*[contains(text(),"Send Us a Message")]'});
	await I.scrollTo('//*[contains(text(),"Get in Touch")]');
	await I.waitForElement('//*[@class="contact-submit"]/button', 130);
	I.wait(2);
	await I.seeElement({xpath: '//label[contains(text(),"Name")]/../input[@type="text"]'});
	await I.fillField('g7-name','Debashis');
	I.wait(2);
	await I.seeElement({xpath: '//label[contains(text(),"Email")]/../input'});
	await I.fillField('g7-email','ds78920@gmail.com');
	I.wait(3);
	await I.seeElement({xpath: '//label[contains(text(),"Web")]/../input'});
	await I.fillField('g7-website','https://bluescapeqainterview.wordpress.com/contact/');
	await I.seeElement({xpath: '//label[contains(text(),"Date")]/../input'});
    await I.fillField('g7-date','May 3, 2023');
	I.wait(2);
	await I.click('//label[contains(text(),"Name")]/../input[@type="text"]');
	I.wait(2);
    await I.click('//*[@class="contact-submit"]/button');
	await I.waitForElement('.go-back-message', 30);
	I.wait(8);
    await I.see('Your message has been sent');
});