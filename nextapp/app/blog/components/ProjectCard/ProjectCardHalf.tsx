import React from "react"
import styled from "styled-components"
import { Project } from "../../types"
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
    project.frontmatter.title === ""
      ? ""
      : project.frontmatter.title || project.fields.slug
  const image = project.frontmatter.image
  const imageLight = project.frontmatter.image_light
  const resultImage = image?.publicURL || imageLight?.publicURL

  return (
    <ProjectCardHalfWrapper target="_blank" href={project.frontmatter.link}>
      <ProjectCardHalfDetails itemScope itemType="http://schema.org/Article">
        <header>
          <ProjectCardTitle>
            {project.frontmatter.link ? (
              <span itemProp="headline">{title}</span>
            ) : (
              <Link href={project.fields.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
            )}
          </ProjectCardTitle>
        </header>
        <section>
          <ProjectCardDescription
            dangerouslySetInnerHTML={{
              __html: project.frontmatter.description || project.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </ProjectCardHalfDetails>
      {image && (
        <ProjectCardImage>
          <picture>
            <img src={resultImage} alt="project" />
          </picture>
        </ProjectCardImage>
      )}
    </ProjectCardHalfWrapper>
  )
}
