import React from "react"
import styled from "styled-components"
import { Project } from "app/types"
import {
  ProjectCardBase,
  ProjectCardDescription,
  ProjectCardImage,
  ProjectCardTitle,
} from "./ProjectCardBase"
import Link from "next/link"

export const ProjectCardHalfWrapper = styled.a`
  ${ProjectCardBase}

  display: flex;
  flex-direction: column;
`

export const ProjectCardHalfDetails = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  padding: 24px 30px;
`

export const ProjectCardHalf: React.VFC<{ project: Project }> = ({
  project,
}) => {
  const title =
    project.metadata.title === "" ? "" : project.metadata.title || project.slug
  const image = project.metadata.image
  const imageLight = project.metadata.image_light
  const resultImage = image || imageLight

  return (
    <ProjectCardHalfWrapper target="_blank" href={project.metadata.link}>
      <ProjectCardHalfDetails itemScope itemType="http://schema.org/Article">
        <header>
          <ProjectCardTitle>
            {project.metadata.link ? (
              <span itemProp="headline">{title}</span>
            ) : (
              <Link href={project.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
            )}
          </ProjectCardTitle>
        </header>
        <section>
          <ProjectCardDescription
            dangerouslySetInnerHTML={{
              __html: project.metadata.description,
            }}
            itemProp="description"
          />
        </section>
      </ProjectCardHalfDetails>
      {image && (
        <ProjectCardImage>
          <picture>
            <img
              src={`/projects/${project.slug}/${resultImage}`}
              alt={project.metadata.title || project.slug}
            />
          </picture>
        </ProjectCardImage>
      )}
    </ProjectCardHalfWrapper>
  )
}
