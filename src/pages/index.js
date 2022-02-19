import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Tile = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  const size = post.frontmatter.size || 'full';
  
  const image = post.frontmatter.image;
  const randomImage = React.useMemo(() => {
    const images = post.frontmatter.images || [post.frontmatter.image];
    const imageIndex = Math.floor(Math.random() * images.length);
    const randomImage = post.frontmatter.images ? post.frontmatter.images[imageIndex] : post.frontmatter.image;
    return randomImage;
  }, [post]);

  return (
    <li className={`tile tile-${size}`}>
      <div className="tile-image">
        <img src={image?.publicURL} alt="project" />
      </div>
      <article
        className="tile-details"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2>
            {post.frontmatter.link ? (
              <a href={post.frontmatter.link} target="_blank">
                <span itemProp="headline">{title}</span>
              </a>
            ) : (
              <Link to={post.fields.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
            )}
          </h2>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  );
}


const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location}>
      <Seo title="gebeto | projects" />
      <Bio />
      <ol style={{ listStyle: `none` }} className="tiles-grid">
        {posts.map(post => <Tile key={post.fields.slug} post={post} />)}
      </ol>
    </Layout>
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
          images {
            publicURL
          }
        }
      }
    }
  }
`
