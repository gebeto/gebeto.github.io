import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { Project } from "../../types"

import { TileFullWrapper } from "./TileTypes/TileFull"
import { TileHalfWrapper } from "./TileTypes/TileHalf"
import {
  RaycastTileWrapper,
  RaycastWideTileWrapper,
} from "./TileTypes/TileRaycast"

export type TileProps = {
  project: Project
}

const tileBySize = {
  full: TileFullWrapper,
  half: TileHalfWrapper,
  raycast: RaycastTileWrapper,
  "raycast-wide": RaycastWideTileWrapper,
}

const TileTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 24px;
`

const TileDescription = styled.p`
  font-size: 15px;
`

export const Tile: React.FC<TileProps> = ({ project }) => {
  const title =
    project.frontmatter.title === ""
      ? ""
      : project.frontmatter.title || project.fields.slug
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

  const resultImage = image?.publicURL || imageLight?.publicURL

  const [shown, setShown] = React.useState(false)
  React.useEffect(() => setShown(true), [])
  const style: React.CSSProperties = React.useMemo(() => {
    const rand = 600 + Math.round(Math.random() * 600)
    return {
      transition: `transform 1s ${rand}ms, opacity 1s ${rand}ms`,
    }
  }, [])

  return (
    <TileWrapper
      className={shown ? "shown" : undefined}
      style={style}
      target="_blank"
      href={project.frontmatter.link}
    >
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
