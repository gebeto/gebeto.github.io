import React from "react"
import styled from "styled-components"

import GithubIcon from "./github.svg"
import LinkedinIcon from "./linkedin.svg"
import TwitterIcon from "./twitter.svg"
import TelegramIcon from "./telegram.svg"

export type SocialProps = {}

const SocialWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;

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
