import { css } from "@emotion/react"

export const TileBase = css`
  border-radius: 24px;
  overflow: hidden;
  transition-duration: 300ms;
  grid-row: span 3;

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

  @media screen and (max-width: 720px) {
    grid-column: span 16;
  }

  opacity: 0;
  transform: translateY(8px);
  /* transition: transform 1s 300ms, opacity 1s 300ms; */

  &.shown {
    opacity: 1;
    transform: translateY(0px);
  }
`
