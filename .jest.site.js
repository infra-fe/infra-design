const { moduleNameMapper, transformIgnorePatterns } = require('./.jest');

// jest config for server render environment
module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'md'],
  moduleNameMapper,
  transform: {
    '\\.tsx?$': './node_modules/@infra-fe/tools/lib/jest/codePreprocessor',
    '\\.js$': './node_modules/@infra-fe/tools/lib/jest/codePreprocessor',
    '\\.md$': './node_modules/@infra-fe/tools/lib/jest/demoPreprocessor',
    '\\.(jpg|png|gif|svg)$': './node_modules/@infra-fe/tools/lib/jest/imagePreprocessor',
  },
  testRegex: 'check-site\\.(j|t)s$',
  testEnvironment: 'node',
  transformIgnorePatterns,
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.test.json',
    },
  },
};
