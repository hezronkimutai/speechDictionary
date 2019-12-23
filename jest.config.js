module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/utils/*",
    "!src/index.js",
    "!data/keyMap.js",
    "!/node_modules/"
  ],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy"
  },
 setupFiles: [
      "<rootDir>/src/setupTests.js",
    ],
  testEnvironment: 'jsdom',
};
