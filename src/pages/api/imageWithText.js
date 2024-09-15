import { Jimp, loadFont, measureText, measureTextHeight } from 'jimp'

import { SANS_32_WHITE } from 'jimp/fonts'
import path from 'path'

export default async function handler(req, res) {
  try {
    // Load the image using Jimp with the newer API
    const imagePath = path.join(
      process.cwd(),
      'public',
      'assets',
      'nft-tree.png'
    )
    const image = await Jimp.read(imagePath) // Use the promise-based read method

    // Load a font (use Jimp's built-in font)
    const font = await loadFont(SANS_32_WHITE) // Promise-based font loading

    // Define padding for the text
    const padding = 35
    const padding2 = 20

    const text = 'Hello world!'
    const text2 = 'Hello world22222!'

    const textWidth = measureText(font, text)
    const textHeight = measureTextHeight(font, text, 300)
    const textHeight2 = measureTextHeight(font, text2, 300)

    const x = padding // Padding from the left
    const y = image.height - padding - textHeight // Padding from the bottom
    const y2 = image.height - padding - textHeight - textHeight2 - padding2 // Padding from the bottom

    // Print the text onto the image
    image.print({ font, x, y, text, maxHeight: 36, maxWidth: 300 })
    image.print({ font, x, y: y2, text: text2, maxHeight: 36, maxWidth: 300 })

    // Get the image as a buffer and send it in the response
    const buffer = await image.getBuffer('image/jpeg', { quality: 100 }) // Use the promise-based buffer method

    // Set the headers and send the image
    res.setHeader('Content-Type', 'image/png')
    res.status(200).send(buffer)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Failed to process image' })
  }
}
