const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const projectTemplate = path.resolve(`./src/templates/project.js`);
  graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
		  limit: 1000,
		  filter: {fileAbsolutePath: {regex: "/(\/content\/blog)/"}}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
  return graphql(
	  `
		{
		  allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: 1000,
			filter: {fileAbsolutePath: {regex: "/(\/content\/projects)/"}}
		  ) {
			edges {
			  node {
				fields {
				  slug
				}
				frontmatter {
				  title
				}
			  }
			}
		  }
		}
	  `
	).then(result => {
	  if (result.errors) {
		throw result.errors
	  }
  
	  // Create project pages.
	  const projects = result.data.allMarkdownRemark.edges
  
	  projects.forEach((post, index) => {
		
		createPage({
		  path: post.node.fields.slug,
		  component: projectTemplate,
		  context: {
			slug: post.node.fields.slug,
		  },
		})
	  })
  
	  return null
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
