import * as React from "react"
import { graphql, PageProps } from "gatsby"

import { Bio } from "../components/Bio"
import { PageLayout } from "../components/PageLayout"
import Seo from "../components/seo"

import { Tile, TilesGrid } from "../components/Tiles"
import { Project } from "../types"
import { ProjectCard } from "../components/ProjectCard/ProjectCard"
import { LocationCard } from "../components/LocationCard/LocationCard"

export type BlogIndexProps = {
  allMarkdownRemark: {
    nodes: Project[]
  }
}

const BlogIndex: React.FC<PageProps<BlogIndexProps>> = ({ data, location }) => {
  const projects = data.allMarkdownRemark.nodes

  console.log(" >>> SLUG", projects)

  return (
    <PageLayout location={location}>
      <Seo title="gebeto" />
      <Bio />
      <TilesGrid>
        {/* <LocationCard /> */}
        {projects.map(project => (
          <Tile key={project.fields.slug} size={project.frontmatter.size}>
            <ProjectCard project={project} />
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
    allMarkdownRemark(sort: { fields: [fields___slug], order: ASC }) {
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
