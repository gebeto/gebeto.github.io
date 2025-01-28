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

const hoverTransition = "400ms ease-in-out"

export const ProjectCardRaycastWrapper = styled.a`
  ${ProjectCardBase}

  position: relative;
  overflow: visible;

  display: flex;
  flex-direction: row-reverse;

  box-sizing: border-box;
  border: 1px solid transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    border-radius: 12px;
  }

  &:before,
  &:after {
    content: " ";
    z-index: -2;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90.56deg,
      #27061a,
      #ff6363 29.69%,
      #9b4dff 52.6%,
      #100321 98.44%
    );
    border-radius: 12px;
    transition: transform ${hoverTransition}, opacity ${hoverTransition},
      background-color ${hoverTransition};
    opacity: 0;
  }

  &:before {
    z-index: -2;
    transform: scale(0.8);
    filter: blur(20px);
  }

  &:after {
    z-index: -1;
    left: 0px;
    top: 0px;
    transition-property: left, top, width, height, opacity, border-radius,
      background-color;
    transition-duration: ${hoverTransition};
  }

  &:hover:after {
    left: -5px;
    top: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    opacity: 1;
    border-radius: 14px;
  }

  &:hover:before {
    transform: scale(1, 1.1);
    opacity: 1;
  }
`

export const ProjectCardRaycastDetails = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  padding: 24px 30px;
  overflow: hidden;
  padding-left: 0;
`

export const ProjectCardRaycastImage = styled(ProjectCardImage)`
  max-width: 100px;
  align-items: center;
  justify-content: center;

  img,
  picture {
    max-height: 48px;
  }
`

export const ProjectCardRaycast: React.VFC<{ project: Project }> = ({
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
    <ProjectCardRaycastWrapper target="_blank" href={project.frontmatter.link}>
      <ProjectCardRaycastDetails itemScope itemType="http://schema.org/Article">
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
      </ProjectCardRaycastDetails>
      {image && (
        <ProjectCardRaycastImage>
          <picture>
            <img src={resultImage} alt="project" />
          </picture>
        </ProjectCardRaycastImage>
      )}
    </ProjectCardRaycastWrapper>
  )
}
