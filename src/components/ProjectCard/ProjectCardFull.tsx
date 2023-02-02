import styled from "@emotion/styled"
import { ProjectCardBase } from "./ProjectCardBase"

export const ProjectCardFullWrapper = styled.a`
  ${ProjectCardBase}

  display: flex;
  flex-direction: row;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }

  .tile-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 30px 30px 30px;
  }

  .tile-image {
    justify-content: flex-end;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;

    .tile-details {
      padding: 30px;
    }
  }
`
