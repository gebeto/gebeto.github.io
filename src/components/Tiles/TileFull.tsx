import styled from "styled-components"
import { TileBase } from "./TileBase"

export const TileFullWrapper = styled.li`
  ${TileBase}

  display: flex;
  flex-direction: row;
  grid-column: span 8;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }

  .tile-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 30px 30px 0px;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;

    .tile-details {
      padding: 30px;
    }
  }
`
