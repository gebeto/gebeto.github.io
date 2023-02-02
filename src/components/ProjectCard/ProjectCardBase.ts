import { css } from "@emotion/react"

export const ProjectCardBase = css`
  border-radius: 24px;
  overflow: hidden;
  height: 100%;
  transition-duration: 300ms;

  .tile-image {
    display: flex;
    flex-direction: column;
    flex: 1;

    img,
    picture {
      font-size: 0;
      max-width: 100%;
      max-height: 100%;
    }
  }

  background-color: hsla(0, 0%, 100%, 0.02);

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.03);
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
