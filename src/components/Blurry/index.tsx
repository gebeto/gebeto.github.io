import styled from "@emotion/styled"
import { css } from "@emotion/react"
import blurryUa from "./Blurry-ua-2.png"
import blurryPurple from "./Blurry-purple.png"
import gradientLight from "./gradient-light.png"

const blurryColors = {
  ukraine: css`
    background-image: url(${blurryUa});
    height: 120%;
  `,
  purple: css`
    background-image: url(${blurryPurple});
    height: 180%;
  `,
}

const blurEffect = css`
  @keyframes blurry {
    from {
      background-position: -100vw -130vh;
      filter: hue-rotate(0deg);
    }

    to {
      background-position: 0vw 0vh;
      filter: hue-rotate(360deg);
    }
  }
  animation: blurry 8s reverse cubic-bezier(0.36, 0, 0.66, -0.56);
`

export const Blurry = styled.div<{ color: keyof typeof blurryColors }>`
  position: absolute;
  width: 100%;
  height: 150%;
  top: 0;
  left: 0;
  background-position: -100vw -130vh;
  background-size: 400% 400%;
  background-repeat: no-repeat;
  animation: blurry 8s reverse cubic-bezier(0.36, 0, 0.66, -0.56);
  filter: hue-rotate(0deg);

  opacity: 0;
  transition: opacity 2s 300ms;

  &.shown {
    opacity: 1;
  }

  &:after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 150%;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom, transparent, #0e0c0b);
    background-repeat: repeat no-repeat;
    background-position: bottom;
    background-size: contain;
  }

  @media screen and (max-width: 400px) {
    background-size: 600% 400%;
  }

  /* @media (prefers-color-scheme: light) {
    &:after {
      height: 50%;
      background-image: url(${gradientLight});
    }
  } */

  @media (prefers-reduced-motion) {
    animation-name: none;
  }

  ${props => blurryColors[props.color]}
  ${blurEffect}
`
