import styled from "styled-components"
import { TileBase } from "./TileBase"

export const TileHalfWrapper = styled.li`
  ${TileBase}

  display: flex;
  flex-direction: column;
  grid-column: span 4;

  .tile-details {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    padding: 24px 30px;
  }
`
