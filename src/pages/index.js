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

  const categories = [
    { title: "All Posts", key: "all" },
    { title: "Quant", key: "quant" },
    { title: "Travel", key: "travel" },
    { title: "Software", key: "software" },
    { title: "Misc", key: "misc" },
  ]
  const categorizedPosts = {
    quant: ["Acing the Quant Interview", "Quantitative Finance Resources"],
    travel: [
      "Samarth's San Diego Itinerary",
      "Samarth's Guide to Chicago",
      "Samarth's Guide to San Fransisco",
      "Samarth's Guide to Berkeley & Oakland",
    ],
    software: [
      "Become a Full-Stack Engineer",
      "Understanding Crypto and DeFi",
      "Crypto and DeFi Resources",
    ],
    misc: ["Random Thoughts", "Hello World"],
  }
  const [category, setCategory] = React.useState("all")

  console.log(posts.map(post => post.frontmatter.title))

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          overflowX: "word-wrap",
        }}
      >
        {categories.map(({ title, key }) => (
          <button
            onClick={() => setCategory(key)}
            style={{
              background: "white",
              border: "none",
              cursor: "pointer",
              marginRight: "2rem",
              color: category === key ? "black" : "grey",
              fontWeight: category === key ? "bold" : "normal",
            }}
          >
            {title}
          </button>
        ))}
      </div>

      {/* <h3>Pinned Post</h3>
      <ol style={{ listStyle: `none`, marginBottom: "4rem" }}>
        {posts
          .filter(post => pinnedPosts.includes(post.frontmatter.title))
          .map(post => (
            <Preview post={post} />
          ))}
      </ol> */}

      {/* <h3>All Posts</h3> */}
      <ol style={{ listStyle: `none` }}>
        {posts
          .filter(post => {
            if (category == "all") {
              return post
            } else {
              return categorizedPosts[category].includes(post.frontmatter.title)
            }
          })
          .map(post => (
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
