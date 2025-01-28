export type CardSize = "full" | "half" | "half_large" | "raycast" | "half_long"
export type Project = {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    link: string
    description: string
    size: CardSize
    image: {
      publicURL: string
    }
    image_light: {
      publicURL: string
    }
    images: {
      publicURL: string
    }[]
  }
}
