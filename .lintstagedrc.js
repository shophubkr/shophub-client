const path = require("path");

const buildPrettierCommand = () => `yarn prettier --write .`;

const buildEslintCommand = (filenames) =>
  `yarn lint ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

module.exports = {
  "./apps/**/.{ts,tsx}": [buildPrettierCommand, buildEslintCommand],
  "./packages/**/.{ts,tsx}": [buildPrettierCommand, buildEslintCommand],
};
