import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { Project } from "../../types"

import { ProjectCardFullWrapper } from "./ProjectCardFull"
import { ProjectCardHalfWrapper } from "./ProjectCardHalf"
import {
  ProjectCardRaycastWrapper,
  RaycastWideTileWrapper,
} from "./ProjectCardRaycast"

export type TileProps = {
  project: Project
}

const cardByType = {
  full: ProjectCardFullWrapper,
  half: ProjectCardHalfWrapper,
  raycast: ProjectCardRaycastWrapper,
  "raycast-wide": RaycastWideTileWrapper,
}

const TileTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 24px;
`

const TileDescription = styled.p`
  font-size: 15px;
`

export const ProjectCard: React.FC<TileProps> = ({ project }) => {
  const title =
    project.frontmatter.title === ""
      ? ""
      : project.frontmatter.title || project.fields.slug
  const size = project.frontmatter.size || "full"
  const image = project.frontmatter.image
  const imageLight = project.frontmatter.image_light
  const TileWrapper = cardByType[size]

  // eslint-disable-next-line
  const randomImage = React.useMemo(() => {
    const images = project.frontmatter.images || [project.frontmatter.image]
    const imageIndex = Math.floor(Math.random() * images.length)
    const randomImage = project.frontmatter.images
      ? project.frontmatter.images[imageIndex]
      : project.frontmatter.image
    return randomImage
  }, [project])

  const resultImage = image?.publicURL || imageLight?.publicURL

  return (
    <TileWrapper target="_blank" href={project.frontmatter.link}>
      <article
        className="tile-details"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <TileTitle>
            {project.frontmatter.link ? (
              <span itemProp="headline">{title}</span>
            ) : (
              <Link to={project.fields.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
            )}
          </TileTitle>
        </header>
        <section>
          <TileDescription
            dangerouslySetInnerHTML={{
              __html: project.frontmatter.description || project.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
      {image && (
        <div className="tile-image">
          <picture>
            <img src={resultImage} alt="project" />
          </picture>
        </div>
      )}
    </TileWrapper>
  )
}
