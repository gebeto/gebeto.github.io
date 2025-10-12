import { getProjects } from "app/content/serverUtils"
import fs from "fs"

export async function generateStaticParams() {
  const projects = getProjects()
  const images = projects.map(p => ({
    slug: p.slug,
    imageName: p.metadata.image,
  }))
  const lightImages = projects.map(p => ({
    slug: p.slug,
    imageName: p.metadata.image_light,
  }))
  const imagesMap = projects
    .map(
      p =>
        p.metadata.images?.map(i => ({
          slug: p.slug,
          imageName: i,
        })) ?? []
    )
    .flat()

  return [...images, ...lightImages, ...imagesMap]
}

export function GET(
  request: Request,
  { params }: { params: { slug: string; imageName: string } }
) {
  const s = fs.createReadStream(
    `../content/projects/${params.slug}/${params.imageName}`
  )
  return new Response(s as any)
}
