module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  },
  roots: ["<rootDir>/src/jest"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.ts$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "node"
}