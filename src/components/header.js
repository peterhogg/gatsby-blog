import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Particles from 'react-particles-js';
import { rhythm } from "../utils/typography"

function FrontPageHeader(props) {
    return (
        <StaticQuery
            query={headerQuery}
            render={data => {
                const { email, github } = data.site.siteMetadata.social
                const { title, description } = props;
                return (
                    <div>
                        <h1>{title}</h1>
                        <h2>{description}</h2>
                        <div className="icons-header">
                            <a aria-label="Send email" href={`mailto:${email}`}>Email <i className="icon fa fa-envelope"></i></a>
                            <a aria-label="My Github" target="_blank" href={`https://github.com/${github}`}>Github <i className="icon fa fa-github-alt" aria-hidden="true"></i></a>
                        </div>
                    </div>
                )
            }}
        />
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
