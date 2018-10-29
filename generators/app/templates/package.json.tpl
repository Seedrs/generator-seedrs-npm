{
  "name": "@seedrs/<%= kebabCaseName %>",
  "version": "1.0.0",
  "main": "lib/index.js",
  "author": "tech@seedrs.com",
  "scripts": {
    "build": "babel src --presets @babel/env --out-dir lib",
    "commit": "git-cz",
    "lint": "eslint ./src/*",
    "test": "node scripts/test.js",
    "semantic-release": "semantic-release --no-ci -b $BUILDKITE_JOB_ID"
  },
  "devDependencies": {
    "@babel/core": "7.1.2",
    "@babel/cli": "7.1.2",
    "@babel/plugin-proposal-object-rest-spread": "7.0.0",
    "@babel/preset-env": "7.1.0",
    "@seedrs/eslint-config-seedrs-base": "^1.1.1",
    "babel-core": "^7.0.0-bridge",
    "babel-eslint": "10.0.1",
    "babel-jest": "^23.6.0",
    "cz-conventional-changelog": "^2.1.0",
    "eslint": "^5.6.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-jest": "^21.22.0",
    "jest": "^23.6.0",
    "semantic-release": "^15.9.15"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "jest": {
    "testMatch": [
      "<rootDir>__tests__/**/*.{js}"
    ],
    "testEnvironment": "node",
    "testURL": "http://localhost",
    "transform": {
      "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest"
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
    ],
    "moduleNameMapper": {},
    "moduleFileExtensions": [
      "js"
    ]
  }
}
