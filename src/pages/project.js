import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class ProjectIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
	  const projects = data.projects.edges

    return (
      <Layout location={this.props.location} title={siteTitle} description={description}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h3>All Projects</h3>
            {projects.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={`/project${node.fields.slug}`}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              )
        })}
        <hr />
		
      </Layout>
    )
  }
}

export default ProjectIndex

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
      description
    }
  }
  projects: allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC},
    filter: {fileAbsolutePath: {regex: "/(/content/project)/"}}) {
    edges {
      node {
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
}
`
