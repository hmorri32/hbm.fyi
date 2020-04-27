import React from "react"

import { rhythm } from "../utils/typography"

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: "right" }}>
          <a
            href="https://www.linkedin.com/in/hugh-b-morrison/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </div>
        <a
          href="https://github.com/hmorri32"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{" "}
        &bull;{" "}
        <a
          href="https://mobile.twitter.com/carne_burrito"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{" "}
      </footer>
    )
  }
}

export default Footer
