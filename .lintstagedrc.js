// lint-staged.config.js
const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '**/*.(ts|tsx)': () => 'yarn tsc --noemit',
  '*.{js,jsx,ts,tsx}': () => 'yarn prettier --write',
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
