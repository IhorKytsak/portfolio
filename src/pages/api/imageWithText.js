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
    const padding = 50
    const paddingBetweenText = 20

    // Single text object to be printed on the image
    const texts = {
      name: 'f9519dd8-a1ae-423d-82b8-731203e65ef4',
      id: 'Raza-the-dev',
      rating: '55', // Optional field, can be removed
    }
    const texts2 = {
      name: 'f9519dd8-a1ae-423d-82b8-731203e65ef4',
      id: 'Raza-the-dev',
    }

    // Start calculating y-position from the bottom of the image
    let currentY = image.height - padding

    // Construct the list of text fields to print: name, id, and rating (if it exists)
    const fieldsToPrint = [texts2.name, texts2.id]
    if (texts2.rating !== undefined) {
      fieldsToPrint.unshift(texts2.rating)
    }

    const maxLength = 18

    // Print each field in the object
    for (let text of fieldsToPrint) {
      if (text.length > maxLength) {
        text = text.slice(0, maxLength) // Truncate
      }

      const textHeight = measureTextHeight(font, text, 400)

      // Adjust y position for each text based on its height and padding between texts
      currentY -= textHeight

      // Print the text onto the image
      image.print({
        font,
        x: padding, // Padding from the left
        y: currentY,
        text,
        maxHeight: 36,
        maxWidth: 400,
      })

      // Update currentY for the next text, adding padding between the texts
      currentY -= paddingBetweenText
    }

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
