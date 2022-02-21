import * as React from "react"
import { graphql } from "gatsby"

import { PageLayout } from "../components/PageLayout"
import Seo from "../components/seo"


const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <PageLayout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageLayout>
  )
}


export default NotFoundPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
