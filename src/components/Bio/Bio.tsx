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
import { Fade } from "../transitions"

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
        <Fade duration={1000} delay={1000}>
          <div className="ukraine" />
        </Fade>
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
