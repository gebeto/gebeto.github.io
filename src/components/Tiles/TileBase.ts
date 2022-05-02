import { css } from "styled-components"

export const TileBase = css`
  border-radius: 18px;
  overflow: hidden;
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

  @media (prefers-color-scheme: light) {
    border: 1px solid hsla(0, 0%, 0%, 0.02);
    background-color: hsla(0, 0%, 100%, 0.2);

    &:hover {
      border: 1px solid hsla(0, 0%, 0%, 0.03);
      background-color: hsla(0, 0%, 100%, 0.3);
    }
  }

  @media screen and (max-width: 720px) {
    grid-column: span 12;
  }
`
