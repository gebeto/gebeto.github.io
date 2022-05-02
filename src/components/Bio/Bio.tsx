import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { BioWrapper } from "./BioWrapper"

type BioStaticQuery = {
  site: {
    siteMetadata: {
      author: {
        name: string
        title: string
        summary: string
      }
      social: {
        twitter: string
      }
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
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <BioWrapper>
      <div className="bio">
        <h1>{author?.name}</h1>
        <span className="separator">·</span>
        <h2>{author?.title}</h2>
        {/* {author?.summary && (
          <p className="summary">{author?.summary || null}</p>
        )} */}
      </div>
    </BioWrapper>
  )
}
