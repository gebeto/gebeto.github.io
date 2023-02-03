import React from "react"
import styled from "@emotion/styled"
import { ProjectCardBase } from "../ProjectCard/ProjectCardBase"
import mapUrl from "./map.png"

export const LocationCard = styled.div`
  ${ProjectCardBase}

  grid-column: span 4;
  grid-row: span 3;
  background-image: url(${mapUrl});
  background-position: center center;
  background-size: cover;
  mix-blend-mode: screen;
  background-color: hsla(0, 0%, 100%, 0.02);
  opacity: 0.8;
`
