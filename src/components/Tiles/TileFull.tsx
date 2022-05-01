import styled from "styled-components"

export const TileFullWrapper = styled.li`
  background-color: #fff;
  grid-column: span 12;
  border-radius: 18px;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1d1e20;
  }

  grid-column: span 8;
  display: flex;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }

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
      max-width: 100%;
      max-height: 100%;
    }
  }

  .tile-details {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    padding: 30px 30px 30px 0px;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;

    .tile-image {
      padding-bottom: 40px;
    }

    .tile-details {
      padding: 0px 30px 30px 30px;
    }
  }
`
