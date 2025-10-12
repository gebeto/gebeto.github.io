export type CardSize = "full" | "half" | "half_large" | "raycast" | "half_long"
export type ProjectMetadata = {
  title: string
  link: string
  date: string
  description: string
  size: CardSize
  image: string
  image_light: string
  images: string[]
  github?: {
    owner: string
    repo: string
    path?: string
  }
}
export type Project = {
  slug: string
  metadata: ProjectMetadata
  content: string
}
