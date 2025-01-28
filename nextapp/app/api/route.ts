import { getBlogPosts } from "app/blog/serverUtils"

export async function GET() {
  let allBlogs = getBlogPosts()

  return new Response(JSON.stringify(allBlogs), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
