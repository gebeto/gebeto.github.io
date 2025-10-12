import { getProjects } from "app/blog/serverUtils"
import { ImageResponse } from "next/og"

export async function generateStaticParams() {
  // your logic here; this is copied directly from my dynamic route `[slug]/page.tsx`
  const projects = getProjects()
  return [
    ...projects.map(project => ({ title: project.slug })),
    ...projects.map(project => ({ title: encodeURIComponent(project.slug) })),
    ...projects.map(project => ({ title: project.metadata.title })),
    ...projects.map(project => ({
      title: encodeURIComponent(project.metadata.title),
    })),
  ]
}

export function GET(
  request: Request,
  { params }: { params: { title: string } }
) {
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {params.title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
