import styled from "@emotion/styled"
import { TileBase } from "./TileBase"

export const TileHalfWrapper = styled.a`
  ${TileBase}

  display: flex;
  flex-direction: column;
  grid-column: span 4;

  .tile-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    padding: 24px 30px;
  }
`
