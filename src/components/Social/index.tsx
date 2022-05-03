import React from "react"
import styled from "@emotion/styled"

import GithubIcon from "./github.svg"
import LinkedinIcon from "./linkedin.svg"
import TwitterIcon from "./twitter.svg"
import TelegramIcon from "./telegram.svg"
import CodepenIcon from "./codepen.svg"

export type SocialProps = {
  social?: {
    github?: string
    linkedin?: string
    twitter?: string
    telegram?: string
    codepen?: string
  }
}

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
    color: #fff;
    opacity: 0.7;
    transition-duration: 200ms;
    cursor: pointer;

    /* @media (prefers-color-scheme: light) {
      color: #000;
    } */
  }

  & svg:hover {
    opacity: 1;
  }
`

const SocialLink = styled.a`
  font-size: 0;
`

export const Social: React.FC<SocialProps> = ({ social }) => {
  return (
    <SocialWrapper>
      {social?.github && (
        <SocialLink
          href={`https://github.com/${social?.github}`}
          target="_blank"
        >
          <GithubIcon />
        </SocialLink>
      )}
      {social?.codepen && (
        <SocialLink
          href={`https://codepen.io/${social?.codepen}`}
          target="_blank"
        >
          <CodepenIcon />
        </SocialLink>
      )}
      {social?.twitter && (
        <SocialLink
          href={`https://twitter.com/${social?.twitter}`}
          target="_blank"
        >
          <TwitterIcon />
        </SocialLink>
      )}
      {social?.linkedin && (
        <SocialLink
          href={`https://www.linkedin.com/in/${social?.linkedin}`}
          target="_blank"
        >
          <LinkedinIcon />
        </SocialLink>
      )}
      {social?.telegram && (
        <SocialLink href={`https://t.me/${social?.telegram}`} target="_blank">
          <TelegramIcon />
        </SocialLink>
      )}
    </SocialWrapper>
  )
}
