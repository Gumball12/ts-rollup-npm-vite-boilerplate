module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/__tests__/**/*spec.[jt]s'],
};
