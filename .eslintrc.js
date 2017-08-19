module.exports = {
    "extends": "airbnb-base",
    "env": { "es6": true },
    "parserOptions": {
      "ecmaFeatures": {
        "impliedStrict": true
      }
    },
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
    },
    "rules": {
      "class-methods-use-this": "off",
      "import/no-extraneous-dependencies": "off"
    },
};
