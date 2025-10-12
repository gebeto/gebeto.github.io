import * as React from "react"

import {
  BioAuthorName,
  BioAuthorTitle,
  BioSummary,
  BioWrapper,
} from "./BioWrapper"
import { Social, SocialProps } from "../Social"
import { Fade, FadeAndSlide } from "../Transitions"

export const Bio = () => {
  const data = {
    author: {
      name: "Yaroslav Nychkalo",
      title: "Web Software Engineer",
      summary: "who lives and works in Ukraine.",
    },
    social: {
      github: "gebeto",
      linkedin: "gebeto",
      twitter: "_pupiti",
      telegram: "gebeto",
      // codepen: "gebeto",
    },
  }

  return (
    <BioWrapper>
      <div className="bio">
        <FadeAndSlide duration={2000} delay={500}>
          <div className="ukraine" />
        </FadeAndSlide>
        <BioAuthorName>{data.author.name}</BioAuthorName>
        <span className="separator">·</span>
        <BioAuthorTitle>{data.author.title}</BioAuthorTitle>
        <span className="separator">·</span>
        {/* {author?.summary && <BioSummary>{author?.summary}</BioSummary>} */}
        <Social social={data.social} />
      </div>
    </BioWrapper>
  )
}
