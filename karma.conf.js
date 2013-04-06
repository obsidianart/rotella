frameworks = ['mocha'];

files = [
  MOCHA,
  MOCHA_ADAPTER,
  'libs/jquery/jquery.js',
  'node_modules/chai/chai.js',
  'src/*.js',
  'test/*.js'
];

browsers = [
	'Chrome', 'Firefox'
];

plugins = [
	'karma-chrome-launcher',
	'karma-firefox-launcher',
	'karma-mocha'
];

autoWatch = true;