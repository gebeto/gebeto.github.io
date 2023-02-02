export type Project = {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    link: string
    description: string
    size: "full" | "half" | "raycast"
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
