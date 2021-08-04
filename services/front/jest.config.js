const { resolve } = require('path');

const root = resolve(__dirname);
const packagesFolder = resolve(__dirname, '..', '..', 'packages');

module.exports = {
  rootDir: root,
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/__tests__/*.test.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/core/*.ts',
    '!<rootDir>/src/core/index.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
  moduleNameMapper: {
    '@truckify/(.*)': `${packagesFolder}/$1`
  }
}