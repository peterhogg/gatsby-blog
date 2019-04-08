import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

function SubPageHeader(props) {
    return (
		<div>
			<StaticQuery
				query={headerQuery}
				render={data => {
					const { email, github } = data.site.siteMetadata.social
					const { title} = props;
					return (
						<div 
						style= {{
							color: "white",
							background: "#153972",
							margin: "auto",
							width: "100%",
							textAlign: "center",
							fontFamily: "Roboto",
						}}>
							<h1
								style={{
									fontSize: "5rem",
									fontFamily: "Roboto",
									fontWeight: "normal",
									marginTop: "0px",
								}}
							>
								{title}
							</h1>
							<div className="icons-header">
								<a style= {{color: "white"}} aria-label="Send email" href={`mailto:${email}`}>Email <i className="icon fa fa-envelope"></i></a>
								<a style= {{color: "white"}} aria-label="My Github" target="_blank" rel="noopener noreferrer" href={`https://github.com/${github}`}>Github <i className="icon fa fa-github-alt" aria-hidden="true"></i></a>
							</div>
							<ul>
								<Link style= {{color: "white"}} to="/">Home</Link>
								<Link style= {{color: "white"}} to="/project">Projects</Link>
								<Link style= {{color: "white"}} to="/blog">Blogs</Link>
							</ul>
						</div>
					)
				}}
			/>
		</div>
    )
}

const headerQuery = graphql`
  query SubHeaderQuery {
    avatar: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter,
          email,
          github
        }
      }
    }
  }
`

export default SubPageHeader
