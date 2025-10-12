"use client"

import styled from "styled-components"

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
  grid-auto-flow: dense;

  @media screen and (max-width: 720px) {
    grid-column-gap: 0;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`
