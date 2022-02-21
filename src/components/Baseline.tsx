import { createGlobalStyle } from "styled-components";


export const Baseline = createGlobalStyle`
  html {
    background: #ebebec;
    color: #1d1d1f;
  }

  body {
    font-size: 17px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-style: normal
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
    font-weight: 600;
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
`;