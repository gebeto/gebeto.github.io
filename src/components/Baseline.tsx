import { createGlobalStyle } from "styled-components"

export const Baseline = createGlobalStyle`
  html {
    background: rgb(250, 250, 250);
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

  .blurry {
    background-image: linear-gradient(to right, rgba(251,113,133,.2),rgba(217,70,239,.2),rgba(99,102,241,.2));
    filter: blur(64px);
    position: absolute;
    width: 80%;
    height: 100px;
    top: -30px;
    left: 10%;
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
      background: #151618;
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
