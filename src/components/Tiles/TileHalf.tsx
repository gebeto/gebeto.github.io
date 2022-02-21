import styled from "styled-components";


export const TileHalfWrapper = styled.li`
  background-color: #fff;
  grid-column: span 12;
  border-radius: 18px;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1d1e20;
  }

  grid-column: span 6;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    grid-column: span 12;
  }

  .tile-image {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-bottom: 40px;

    img {
      width: 100%;
    }
  }

  .tile-details {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    padding: 0px 46px 40px 46px;
  }
`;
