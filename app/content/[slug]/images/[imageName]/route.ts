import { getProjects } from "app/content/serverUtils"
import fs from "fs"
import path from "path"

export async function generateStaticParams() {
  const projects = getProjects()
  const images = projects
    .filter(p => p.metadata.image)
    .map(p => ({
      slug: p.slug,
      imageName: p.metadata.image,
    }))
  const lightImages = projects
    .filter(p => p.metadata.image_light)
    .map(p => ({
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
  _request: Request,
  { params }: { params: { slug: string; imageName: string } }
) {
  const _path = path.join("content", "projects", params.slug, params.imageName)
  const s = fs.createReadStream(_path)
  return new Response(s as any)
}
