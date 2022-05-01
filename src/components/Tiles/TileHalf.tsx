import styled from "styled-components"

export const TileHalfWrapper = styled.li`
  background-color: #fff;
  grid-column: span 12;
  border-radius: 18px;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1d1e20;
  }

  grid-column: span 4;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    grid-column: span 12;
  }

  .tile-image {
    display: flex;
    flex-direction: column;
    flex: 1;

    img,
    picture {
      font-size: 0;
      width: auto;
      max-width: 100%;
      height: auto;
    }
  }

  .tile-details {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    padding: 24px 30px;
  }
`
