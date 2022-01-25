import React, { Component } from "react";
import profile from "../assets/profile.jpeg";
import { rhythm } from "../utils/typography";

class Bio extends Component {
  state = { hover: false };

  handleMouseEnter() {
    this.setState({ hover: true });
  }

  handleMouseLeave() {
    this.setState({ hover: false });
  }

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
          Hugh Morrison
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            Asheville, NC
          </p>
        </p>
      </div>
    );
  }
}

export default Bio;
