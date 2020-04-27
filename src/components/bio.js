import React, { Component } from "react";
import profile from "../assets/profile.jpeg";
import { rhythm } from "../utils/typography";

class Bio extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginBottom: rhythm(2),
          alignItems: "center",
        }}
      >
        <img
          src={profile}
          alt={`Hugh Morrison`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
            borderRadius: "50%",
          }}
        />
        <p style={{ maxWidth: 310, margin: 0, padding: 0 }}>
          <a href="https://github.com/hmorri32">Hugh Morrison</a>
        </p>
      </div>
    );
  }
}

export default Bio;
