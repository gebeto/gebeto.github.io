import styled from "@emotion/styled"

export const TilesGrid = styled.ol`
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  padding: 24px 24px;
  display: grid;
  grid-template-columns: repeat(16, minmax(0, 1fr));
  margin: 0;
`
