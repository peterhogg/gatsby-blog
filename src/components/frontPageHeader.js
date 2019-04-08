import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Particle from "./particle";

function FrontPageHeader(props) {
    return (
		<div>
			<StaticQuery
				query={headerQuery}
				render={data => {
					const { email, github } = data.site.siteMetadata.social
					const { title, description } = props;
					return (
						<div 
						style= {{
							color: "white",
							position: "absolute",
							margin: "auto",
							width: "100%",
							textAlign: "center",
							bottom: "40vh",
							pointerEvents: "none",
							fontFamily: "Roboto",
						}}>
							<h1
								style={{
									fontSize: "5rem",
									fontFamily: "Roboto",
									fontWeight: "normal",
								}}
							>
								{title}
							</h1>
							<h2
								style={{
									fontSize: "2.5rem",
									fontFamily: "Roboto",
									fontWeight: "bold",
								}}
							>
								{description}
							</h2>
							<div>
								<a style= {{color: "white"}} aria-label="Send email" href={`mailto:${email}`}>Email <i className="icon fa fa-envelope"></i></a>
								<a style= {{color: "white"}} aria-label="My Github" target="_blank" rel="noopener noreferrer" href={`https://github.com/${github}`}>Github <i className="icon fa fa-github-alt" aria-hidden="true"></i></a>
							</div>
						</div>
					)
				}}
			/>
			<Particle />
		</div>
    )
}

const headerQuery = graphql`
  query HeaderQuery {
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

export default FrontPageHeader
