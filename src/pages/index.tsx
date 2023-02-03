import * as React from "react"
import { graphql, PageProps } from "gatsby"

import { Bio } from "../components/Bio"
import { PageLayout } from "../components/PageLayout"
import Seo from "../components/seo"

import { Tile, TilesGrid } from "../components/Tiles"
import { Project } from "../types"
import { ProjectCard } from "../components/ProjectCard/ProjectCard"

export type BlogIndexProps = {
  allMarkdownRemark: {
    nodes: Project[]
  }
}

const BlogIndex: React.FC<PageProps<BlogIndexProps>> = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <PageLayout location={location}>
      <Seo title="gebeto" />
      <Bio />
      <TilesGrid>
        {/* <LocationCard /> */}
        {posts.map(post => (
          <Tile key={post.fields.slug} size={post.frontmatter.size}>
            <ProjectCard project={post} />
          </Tile>
        ))}
      </TilesGrid>
    </PageLayout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          link
          size
          image {
            publicURL
          }
          image_light {
            publicURL
          }
          images {
            publicURL
          }
        }
      }
    }
  }
`
