import { createGlobalStyle } from "styled-components"

export const Baseline = createGlobalStyle`
  html {
    background: #f1f3f4;
    color: #1d1d1f;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-size: 17px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: Karla,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-style: normal;
  }

  main {
    position: relative;
  }

  body, button, h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 32px;
    line-height: .90625;
    font-weight: 600;
    letter-spacing: -0.003em;
  }

  a {
    text-decoration: none;
    color: #1d1d1f;
  }

  p {
    font-size: 19px;
    line-height: 1.2105263158;
    letter-spacing: 0em;
    color: #2a2a2a;
  }

  @media (prefers-color-scheme: dark) {
    html {
      background: #0e0c0b;
      color: #fff;
    }

    a {
      color: #fff;
    }

    p {
      color: #cecece;
    }
  }
`
