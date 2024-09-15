import Image from 'next/image'
import { useState, useEffect } from 'react'

const ImageWithText = () => {
  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch('/api/imageWithText')
      const blob = await response.blob()
      const imageUrl = URL.createObjectURL(blob)
      setImageSrc(imageUrl)
    }

    fetchImage()
  }, [])

  return (
    <div>
      <h2>Generated Image with Text</h2>
      {imageSrc ? (
        <Image width={400} height={300} src={imageSrc} alt='Image with text' />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  )
}

export default ImageWithText
