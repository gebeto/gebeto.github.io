import fs from "fs"
import path from "path"
import { Project, ProjectMetadata } from "app/types"
import frontMatter from "front-matter"

function parseFrontmatter(
  fileContent: string
): Pick<Project, "metadata" | "content"> {
  const parsed = frontMatter(fileContent)

  return {
    metadata: parsed.attributes as ProjectMetadata,
    content: parsed.body,
  }
}

function getMDXFiles(dir: string) {
  const projectFolders = fs
    .readdirSync(dir)
    .map(folder => path.join(dir, folder))
    .filter(folderPath => fs.statSync(folderPath).isDirectory())
  const files = projectFolders
    .map(folder => path.join(folder, "index.md"))
    .filter(md => fs.statSync(md).isFile())
  console.log(dir, files)
  return files
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string): Project[] {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map(file => {
    let { metadata, content } = readMDXFile(path.join(file))
    let slug = path.basename(path.dirname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getProjects() {
  return getMDXData(path.join(process.cwd(), "public", "projects"))
}
