import React from "react"

import { rhythm } from "../utils/typography"
import FrontPageHeader from "./frontPageHeader";
import SubPageHeader from "./subPageHeader";

class Layout extends React.Component {
  render() {
    const { location, title, description, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <FrontPageHeader title={title} description={description}></FrontPageHeader>
      )
    } else {
      header = (
        <SubPageHeader title={title}></SubPageHeader>
      )
    }
    return (
      <div>
        <header>{header}</header>
        <main style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }} >{children}</main>
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default Layout
