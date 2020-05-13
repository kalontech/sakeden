import GatsbyImage, { FluidObject } from "gatsby-image"
import React, { useEffect, useState } from "react"

import { ShopifyProductImages } from "../../graphql-types"

interface ZoomingImageProps {
  image: ShopifyProductImages
}

const ZoomingImage: React.FC<ZoomingImageProps> = ({ image }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%")
  const [backgroundSize, setBackgroundSize] = useState("100% 100%")
  const [isZoomedIn, setIsZoomedIn] = useState(false)

  // Determine backrgound size in order to get correct zoom level on hover.
  useEffect(() => {
    const htmlImage = new Image()
    htmlImage.addEventListener("load", function(this: any) {
      setBackgroundSize(
        `${this.naturalWidth / 2}px ${this.naturalHeight / 2}px`,
      )
    })
    htmlImage.src = image.originalSrc!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <figure
      onMouseMove={(e: any): void => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = ((e.pageX - window.scrollX - left) / width) * 100
        const y = ((e.pageY - window.scrollY - top) / height) * 100
        setBackgroundPosition(`${x}% ${y}%`)
      }}
      onMouseEnter={(): void => {
        setIsZoomedIn(true)
      }}
      onMouseLeave={(): void => {
        setIsZoomedIn(false)
      }}
      style={{
        backgroundImage: `url(${image.originalSrc})`,
        backgroundPosition,
        backgroundRepeat: "no-repeat",
        backgroundSize,
        height: "100%",
        margin: "0px",
        width: "100%",
      }}
    >
      <GatsbyImage
        fluid={image.localFile!.childImageSharp!.fluid as FluidObject}
        imgStyle={{
          backgroundColor: "white",
          objectFit: "contain",
        }}
        style={{
          height: "100%",
          visibility: isZoomedIn ? "hidden" : "visible",
          width: "100%",
        }}
      />
    </figure>
  )
}

export default ZoomingImage
