const path = require("path");

const buildPrettierCommand = () => `yarn prettier --write .`;

const buildEslintCommand = (filenames) =>
  `yarn lint ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

module.exports = {
  "./@{apps,packages}/**/.{js,jsx,ts,tsx}": [buildPrettierCommand, buildEslintCommand],
};
