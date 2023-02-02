import React from "react"
import { Project } from "../../types"
import { ProjectCardFull } from "./ProjectCardFull"
import { ProjectCardHalf } from "./ProjectCardHalf"
import { ProjectCardRaycast } from "./ProjectCardRaycast"

export type TileProps = {
  project: Project
}

export const cardComponentBySize: Record<
  Project["frontmatter"]["size"],
  React.ElementType<{ project: Project }>
> = {
  full: ProjectCardFull,
  half: ProjectCardHalf,
  raycast: ProjectCardRaycast,
}

export const ProjectCard: React.FC<TileProps> = ({ project }) => {
  const size = project.frontmatter.size || "full"
  const CompeteComponent = cardComponentBySize[size]

  return <CompeteComponent project={project} />
}
