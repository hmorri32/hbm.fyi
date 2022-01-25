import React, { Component } from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

class Layout extends Component {
  state = { hover: false };

  handleMouseEnter() {
    this.setState({ hover: true });
  }

  handleMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={
            this.state.hover
              ? {
                  ...scale(1.2),
                  marginBottom: rhythm(1.5),
                  marginTop: 0,
                  color: "#007acc",
                }
              : {
                  ...scale(1.2),
                  marginBottom: rhythm(1.5),
                  marginTop: 0,
                }
          }
          onMouseEnter={e => this.handleMouseEnter(e)}
          onMouseLeave={e => this.handleMouseLeave(e)}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h2
          onMouseEnter={e => this.handleMouseEnter(e)}
          onMouseLeave={e => this.handleMouseLeave(e)}
          style={
            this.state.hover
              ? {
                  fontFamily: `Montserrat, sans-serif`,
                  marginTop: 0,
                  color: "#007acc",
                }
              : {
                  fontFamily: `Montserrat, sans-serif`,
                  marginTop: 0,
                }
          }
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(34),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
      </div>
    );
  }
}

export default Layout;
