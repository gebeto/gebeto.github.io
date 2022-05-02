import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Project } from "../../types"

import { TileFullWrapper } from "./TileFull"
import { TileHalfWrapper } from "./TileHalf"

export type TileProps = {
  project: Project
}

const tileBySize = {
  full: TileFullWrapper,
  half: TileHalfWrapper,
}

const TileTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 20px;
`

const TileDescription = styled.p`
  font-size: 15px;
`

export const Tile: React.FC<TileProps> = ({ project }) => {
  const title = project.frontmatter.title || project.fields.slug
  const size = project.frontmatter.size || "full"
  const image = project.frontmatter.image
  const imageLight = project.frontmatter.image_light
  const TileWrapper = tileBySize[size]

  // eslint-disable-next-line
  const randomImage = React.useMemo(() => {
    const images = project.frontmatter.images || [project.frontmatter.image]
    const imageIndex = Math.floor(Math.random() * images.length)
    const randomImage = project.frontmatter.images
      ? project.frontmatter.images[imageIndex]
      : project.frontmatter.image
    return randomImage
  }, [project])

  return (
    <TileWrapper as="a" target="_blank" href={project.frontmatter.link}>
      <div className="tile-image">
        <picture>
          {/* <source
            srcSet={image.publicURL}
            media="(prefers-color-scheme: light)"
          /> */}
          <img src={image.publicURL || imageLight?.publicURL} alt="project" />
        </picture>
      </div>
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
    </TileWrapper>
  )
}
