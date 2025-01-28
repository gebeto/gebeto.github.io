import React from "react"
import styled from "styled-components"
import { Project } from "../../blog/types"
import {
  ProjectCardBase,
  ProjectCardDescription,
  ProjectCardImage,
  ProjectCardTitle,
} from "./ProjectCardBase"
import Link from "next/link"

export const ProjectCardFullWrapper = styled.a`
  ${ProjectCardBase}

  display: flex;
  flex-direction: row;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`

export const ProjectCardFullImage = styled(ProjectCardImage)`
  justify-content: flex-end;
`

export const ProjectCardFullDetails = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 30px 30px 30px;

  @media screen and (max-width: 720px) {
    padding: 30px;
  }
`

export const ProjectCardFull: React.VFC<{ project: Project }> = ({
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
    <ProjectCardFullWrapper target="_blank" href={project.frontmatter.link}>
      <ProjectCardFullDetails itemScope itemType="http://schema.org/Article">
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
      </ProjectCardFullDetails>
      {image && (
        <ProjectCardFullImage>
          <picture>
            <img src={resultImage} alt="project" />
          </picture>
        </ProjectCardFullImage>
      )}
    </ProjectCardFullWrapper>
  )
}
