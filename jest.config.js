module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  testRegex: "(/__tests__/.*(\\.|/)(test|spec))\\.[jt]sx?$",
  snapshotSerializers: ["@emotion/jest/serializer"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$":
      "<rootDir>/src/__tests__/__mocks__/fileMock.ts",
    "\\.css$": "<rootDir>/src/__tests__/__mocks__/styleMock.ts",
    "^@@src(.*)$": "<rootDir>/src/$1",
    "^@@assets(.*)$": "<rootDir>/src/assets$1",
    "^@@icons(.*)$": "<rootDir>/src/assets/icons$1",
    "^@@images(.*)$": "<rootDir>/src/assets/images$1",
    "^@@styles(.*)$": "<rootDir>/src/assets/styles$1",
    "^@@components(.*)$": "<rootDir>/src/components$1",
    "^@@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@@lib(.*)$": "<rootDir>/src/lib$1"
  }
};
