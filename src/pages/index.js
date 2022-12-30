import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Preview from "../components/preview"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  let posts = data.allMarkdownRemark.nodes

  const pinnedPosts = ["Acing the Quant Interview"]

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <h3>Pinned Post</h3>
      <ol style={{ listStyle: `none`, marginBottom: "4rem" }}>
        {posts
          .filter(post => pinnedPosts.includes(post.frontmatter.title))
          .map(post => (
            <Preview post={post} />
          ))}
      </ol>

      <h3>All Posts</h3>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => (
          <Preview post={post} />
        ))}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
