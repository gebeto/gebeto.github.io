import fs from "fs"
import path from "path"
import * as matter from "gray-matter"


export type CardSize = "full" | "half" | "half_large" | "raycast" | "half_long"

const contentDirectory = path.join(process.cwd(), 'posts')
const projectsDirectory = path.join(contentDirectory, 'projects')

type PostMetadata = {
  title: string
  date: string

  description: string
  link: string
  image: string
  image_light: string
  images: string[]
  size: CardSize
}

export function getSortedPostsData() {
  // Get file names under /posts
  const projectFolders = fs.readdirSync(projectsDirectory).filter(folder => {
    const stats = fs.statSync(path.join(projectsDirectory, folder));
    return stats.isDirectory();
  });
  const fileNames: string[] = projectFolders.map(folder => path.join(folder, 'index.md'))
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "")

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    // const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter.read(fullPath)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as PostMetadata),
    }
  })
  // Sort posts by date
  return allPostsData
}
