import styled from "@emotion/styled"
import { ProjectCardBase } from "./ProjectCardBase"

export const ProjectCardHalfWrapper = styled.a`
  ${ProjectCardBase}

  display: flex;
  flex-direction: column;

  .tile-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    padding: 24px 30px;
  }
`
