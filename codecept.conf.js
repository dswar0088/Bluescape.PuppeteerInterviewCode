const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'script/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://bluescapeqainterview.wordpress.com/contact/',
      show: true,
      windowSize: '1920x1080',
	  waitForNavigation: 'domcontentloaded',
	  chrome: {
      args: ['--start-maximized']
    }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'BluescapeInterviewCode'
}