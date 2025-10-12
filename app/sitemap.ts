import { getProjects } from "app/content/serverUtils"

export const baseUrl = "https://gebeto.github.io"

export default async function sitemap() {
  let blogs = getProjects().map(post => ({
    url: `${baseUrl}/content/${post.slug}`,
    lastModified: post.metadata.date,
  }))

  let routes = ["", "/blog"].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
