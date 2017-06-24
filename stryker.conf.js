module.exports = function (config) {
  config.set({
    files: [
      { pattern: 'src/**/*.js', mutated: true },
      { pattern: 'test/**/*.js', mutated: false }
    ],
    testFramework: 'mocha',
    testRunner: 'mocha',
    reporter: ['progress', 'clear-text', 'dots', 'html', 'event-recorder'],
    coverageAnalysis: 'all',
    plugins: ['stryker-mocha-runner', 'stryker-html-reporter'],
    logLevel: 'trace'
  });
};