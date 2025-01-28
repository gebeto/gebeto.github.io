import React from "react"
import { CardSize, Project } from "../../blog/types"
import { ProjectCardFull } from "./ProjectCardFull"
import { ProjectCardHalf } from "./ProjectCardHalf"
import { ProjectCardRaycast } from "./ProjectCardRaycast"

export type TileProps = {
  project: Project
}

export type CardElementType = React.ElementType<{ project: Project }>
export const cardComponentBySize: Record<CardSize, CardElementType> = {
  full: ProjectCardFull,
  half: ProjectCardHalf,
  half_large: ProjectCardHalf,
  half_long: ProjectCardHalf,
  raycast: ProjectCardRaycast,
}

export const ProjectCard: React.FC<TileProps> = ({ project }) => {
  const size = project.frontmatter.size || "full"
  const CompeteComponent = cardComponentBySize[size]

  return <CompeteComponent project={project} />
}
