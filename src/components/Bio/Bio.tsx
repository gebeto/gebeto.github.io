import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition, Transition } from "react-transition-group"

import {
  BioAuthorName,
  BioAuthorTitle,
  BioSummary,
  BioWrapper,
} from "./BioWrapper"
import { Social, SocialProps } from "../Social"
import { Fade, FadeAndSlide } from "../Transitions"

type BioStaticQuery = {
  site: {
    siteMetadata: {
      author: {
        name: string
        title: string
        summary: string
      }
      social?: SocialProps["social"]
    }
  }
}

export const Bio = () => {
  const data = useStaticQuery<BioStaticQuery>(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            title
            summary
          }
          social {
            github
            twitter
            linkedin
            telegram
            codepen
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <BioWrapper>
      <div className="bio">
        <FadeAndSlide duration={2000} delay={500}>
          <div className="ukraine" />
        </FadeAndSlide>
        <BioAuthorName>{author?.name}</BioAuthorName>
        <span className="separator">·</span>
        <BioAuthorTitle>{author?.title}</BioAuthorTitle>
        <span className="separator">·</span>
        {/* {author?.summary && <BioSummary>{author?.summary}</BioSummary>} */}
        <Social social={data.site.siteMetadata.social} />
      </div>
    </BioWrapper>
  )
}
