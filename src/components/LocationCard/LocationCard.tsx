import React from "react"
import styled from "@emotion/styled"
import { ProjectCardBase } from "../ProjectCard/ProjectCardBase"
import mapUrl from "./map2.png"

export const LocationCardWrapper = styled.a`
  ${ProjectCardBase}

  grid-column: span 4;
  grid-row: span 3;
`

const LocationCardImage = styled.div`
  background-image: url(${mapUrl});
  background-position: center center;
  background-size: cover;
  mix-blend-mode: screen;
  background-color: hsla(0, 0%, 100%, 0.02);

  width: 100%;
  height: 100%;
`

export const LocationCard = () => (
  <LocationCardWrapper href="https://en.wikipedia.org/wiki/Lviv">
    <LocationCardImage />
  </LocationCardWrapper>
)
