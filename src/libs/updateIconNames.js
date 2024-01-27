/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const prettier = require('prettier')

const iconsDir = path.join(__dirname, '..', '..', 'public', 'icons')

fs.readdir(iconsDir, async (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err)
    process.exit(1)
  }

  const iconNames = files.map((file) => path.basename(file, path.extname(file)))
  const iconNamesType = `export type IconName = '${iconNames.join("' | '")}'`

  const outputPath = path.join(__dirname, '..', '..', 'src', 'types')
  fs.mkdir(outputPath, { recursive: true }, async (err) => {
    if (err) {
      console.error('Could not create the directory.', err)
      process.exit(1)
    }

    const formatted = await prettier.format(iconNamesType, {
      parser: 'typescript',
      semi: false,
      singleQuote: true,
    }) // set semi option to false

    fs.writeFile(path.join(outputPath, 'iconName.ts'), formatted, (err) => {
      if (err) {
        console.error('Could not write the file.', err)
        process.exit(1)
      }
    })
  })
})
