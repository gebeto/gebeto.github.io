import React from "react"
import { Global, css } from "@emotion/react"

const styles = css`
  html {
    background: #0e0c0b;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-size: 17px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: Karla, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
      Noto Color Emoji;
    font-style: normal;
  }

  main {
    position: relative;
  }

  body,
  button,
  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 32px;
    line-height: 0.90625;
    font-weight: 600;
    letter-spacing: -0.003em;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  p {
    font-size: 19px;
    line-height: 1.2105263158;
    letter-spacing: 0em;
    color: #cecece;
  }
`

export const Baseline = () => <Global styles={styles} />
