declare const __PATH_PREFIX__: string

declare module "*.png" {
  const url: string
  export default url
}

declare module "*.svg" {
  const url: string
  export default url
}
