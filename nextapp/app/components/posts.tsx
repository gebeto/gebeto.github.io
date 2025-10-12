import Link from "next/link"
import { getProjects } from "app/blog/serverUtils"
import { Tile, TilesGrid } from "app/legacy-components/Tiles"
import { formatDate } from "app/blog/utils"
import { Blurry } from "./Blurry"
import { ProjectCard } from "app/legacy-components/ProjectCard/ProjectCard"

export async function BlogPosts() {
  let projects = getProjects()

  return (
    <TilesGrid>
      {projects.map(project => (
        <Tile key={project.slug} size={project.metadata.size}>
          <ProjectCard project={project} />
        </Tile>
      ))}
    </TilesGrid>
  )
}
