import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import { Project } from "app/types"

export const ProjectCardBase = css`
  border-radius: 24px;
  overflow: hidden;
  height: 100%;
  transition-duration: 300ms;

  background-color: hsla(0, 0%, 100%, 0.02);

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.03);

    img {
      transform: scale(1.04);
    }
  }

  /* @media (prefers-color-scheme: light) {
    border: 1px solid hsla(0, 0%, 0%, 0.02);
    background-color: hsla(0, 0%, 100%, 0.2);

    &:hover {
      border: 1px solid hsla(0, 0%, 0%, 0.03);
      background-color: hsla(0, 0%, 100%, 0.3);
    }
  } */
`

export const ProjectCardTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 24px;
`

export const ProjectCardDescription = styled.p`
  font-size: 15px;
`

export const ProjectCardImage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  img,
  picture {
    font-size: 0;
    max-width: 100%;
    max-height: 100%;
    transition: transform 1600ms cubic-bezier(0.15, 0.75, 0.5, 1);
  }
`

export const useRandomImage = (project: Project) => {
  const randomImage = React.useMemo(() => {
    const images = project.metadata.images || [project.metadata.image]
    const imageIndex = Math.floor(Math.random() * images.length)
    const randomImage = project.metadata.images
      ? project.metadata.images[imageIndex]
      : project.metadata.image
    return randomImage
  }, [project])

  return randomImage
}
