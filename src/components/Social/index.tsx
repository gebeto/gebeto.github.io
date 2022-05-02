import React from "react"
import styled from "styled-components"

import GithubIcon from "./github.svg"
import LinkedinIcon from "./linkedin.svg"
import TwitterIcon from "./twitter.svg"
import TelegramIcon from "./telegram.svg"

export type SocialProps = {}

const SocialWrapper = styled.div`
  @keyframes social {
    from {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
    80% {
      opacity: 0;
      transform: scale(0.96) translateY(10px);
    }
    to {
      opacity: 0;
      transform: scale(0.96) translateY(10px);
    }
  }

  display: flex;
  gap: 12px;
  margin-top: 20px;

  opacity: 1;
  transform: scale(1) translateY(0px);

  animation: social 3s reverse cubic-bezier(0.36, 0, 0.66, -0.56);

  svg {
    color: white;
    opacity: 0.7;
    transition-duration: 200ms;
    cursor: pointer;
  }

  & svg:hover {
    opacity: 1;
  }
`

export const Social: React.FC<SocialProps> = props => {
  return (
    <SocialWrapper>
      <GithubIcon />
      <TwitterIcon />
      <LinkedinIcon />
      <TelegramIcon />
    </SocialWrapper>
  )
}
