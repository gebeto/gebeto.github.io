import { ValueOf } from "next/dist/shared/lib/constants"

export enum CardSizeEnum {
  full = "full",
  half = "half",
  half_large = "half_large",
  raycast = "raycast",
  half_long = "half_long",
}
export type CardSize = `${CardSizeEnum}`
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
