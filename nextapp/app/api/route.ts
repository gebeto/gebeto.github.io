import { getProjects } from "app/blog/serverUtils"

export async function GET() {
  let allBlogs = getProjects()

  return new Response(JSON.stringify(allBlogs), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
