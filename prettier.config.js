/** @type {import("prettier").Options} */

const config = {
  bracketSameLine: true,
  jsxSingleQuote: false,
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  tailwindConfig: 'tailwind.config.ts',
  trailingComma: 'es5',
}

module.exports = config
