import React from "react"
import Image from "next/image"
import styled from "styled-components"
import { Project } from "app/types"
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
    project.metadata.title === "" ? "" : project.metadata.title || project.slug
  const image = project.metadata.image
  const imageLight = project.metadata.image_light
  const resultImage = image || imageLight

  return (
    <ProjectCardFullWrapper target="_blank" href={project.metadata.link}>
      <ProjectCardFullDetails itemScope itemType="http://schema.org/Article">
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
      </ProjectCardFullDetails>
      {image && (
        <ProjectCardFullImage>
          <picture>
            <img
              src={`/projects/${project.slug}/${resultImage}`}
              alt={project.metadata.title || project.slug}
            />
            {/* <Image
              src={`/projects/${project.slug}/${resultImage}`}
              width={300}
              height={300}
              unoptimized
              alt="project"
            /> */}
          </picture>
        </ProjectCardFullImage>
      )}
    </ProjectCardFullWrapper>
  )
}
