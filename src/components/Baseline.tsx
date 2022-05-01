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

  @keyframes blurry {
    from {
      background-position: 0px 0px;
    }
    
    to {
      background-position: 1000px 1000px;
    }
  }

  .blurry {
    background-image: linear-gradient(to bottom right, #ddd 40%, transparent, #444 40%);
    filter: blur(300px);
    position: absolute;
    width: 100%;
    height: 120%;
    top: 0;
    left: 0;
    opacity: 0.3;
    background-position: 0px 0px;
    animation: blurry 8s reverse cubic-bezier(0.36, 0, 0.66, -0.56);
  }

  .blurry-ua {
    background-image: linear-gradient(to bottom right, #2980b9 50%, transparent, #b59308 40%);
    opacity: 0.4;
  }

  .blurry-purple {
    background-image: linear-gradient(to bottom right, red 50%, transparent, blue 40%);
    opacity: 0.14;
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
      background: rgb(14 12 11/1);
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
