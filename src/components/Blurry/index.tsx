import styled, { css } from "styled-components"
import blurryUa from "./Blurry-ua-2.png"

const blurryColors = {
  ukraine: css`
    background-image: url(${blurryUa});
  `,
  purple: css`
    background-image: linear-gradient(
      to bottom right,
      rgba(255, 0, 0, 0.14) 50%,
      rgba(0, 0, 255, 0.14) 50%
    );
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
  height: 120%;
  top: 0;
  left: 0;
  background-position: -100vw -130vh;
  background-size: 400% 400%;
  background-repeat: no-repeat;
  animation: blurry 8s reverse cubic-bezier(0.36, 0, 0.66, -0.56);
  filter: hue-rotate(0deg);

  &:after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 150%;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      transparent 60%,
      rgb(241 243 244/1)
    );
  }

  @media (prefers-color-scheme: dark) {
    &:after {
      background-image: linear-gradient(
        to bottom,
        transparent,
        rgb(14 12 11/1)
      );
    }
  }

  @media (prefers-reduced-motion) {
    animation-name: none;
  }

  ${props => blurryColors[props.color]}
  ${blurEffect}
`
