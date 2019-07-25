require('module-alias/register');

/**
 * This list manages all the files we want to cover during the refactor.
 * Please also include the test-ready module in package.json's "nyc.include" list.
 * Make sure test coverage meets the bar.
 */
[
    '@test/unit/printTest.js',
].forEach((testFile) => {
    // eslint ignore
    require(testFile);
});
