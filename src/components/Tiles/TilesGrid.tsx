import styled from "styled-components";


export const TilesGrid = styled.ol`
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`;
