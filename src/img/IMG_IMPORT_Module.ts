const importAll = (r: any): string[] => {
  const images: string[] = []
  r.keys().forEach((key: string) => images.push(r(key)))
  return images
}

const imagesBlack: string[] = importAll(
  require.context('./home-black', false, /\.(png|jpe?g|svg)$/)
)

const imagesBlackSmall: string[] = importAll(
  require.context('./home-black/small', false, /\.(png|jpe?g|svg)$/)
)

export {
  imagesBlack,
  imagesBlackSmall
}
