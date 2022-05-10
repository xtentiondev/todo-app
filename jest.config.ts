import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  collectCoverageFrom: [
    './src/**/*.tsx',
    '!**/coverage/**',
    '!**/node_modules/**'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1'
  }
};

export default config;
