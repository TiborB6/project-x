import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface TransitionImageProps {
  src: string
  alt: string
}

const TransitionImage: React.FC<TransitionImageProps> = ({ src, alt }) => {
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    setShowImage(true)
  }, [src])

  return (
    <Image
      className={`image-transition ${showImage ? 'show' : ''}`}
      src={src}
      alt={alt}
    />
  )
}

export default TransitionImage
