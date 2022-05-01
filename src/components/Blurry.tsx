import styled, { css } from "styled-components"
import { detect } from "detect-browser"

const browser = detect()

const blurryColors = {
  ukraine: css`
    background-image: linear-gradient(
      to bottom right,
      rgba(41, 128, 185, 0.4) 42%,
      rgba(181, 147, 8, 0.4) 58%
    );
  `,
  purple: css`
    background-image: linear-gradient(
      to bottom right,
      rgba(255, 0, 0, 0.14) 50%,
      rgba(0, 0, 255, 0.14) 50%
    );
  `,
}

const blurryEffectByBrowser: any = {
  safari: css`
    filter: blur(120px);
    animation-name: none;
    height: 100%;
  `,
  ios: css`
    filter: blur(120px);
    animation-name: none;
    height: 100%;
  `,
  default: css`
    @keyframes blurry {
      from {
        background-position: 0vh 0vh;
      }

      to {
        background-position: 100vw 100vh;
      }
    }
    animation: blurry 8s reverse cubic-bezier(0.36, 0, 0.66, -0.56);
  `,
}

const blurEffect = browser?.name
  ? blurryEffectByBrowser[browser.name] || blurryEffectByBrowser.default
  : blurryEffectByBrowser.default

export const Blurry = styled.div<{ color: keyof typeof blurryColors }>`
  background-image: linear-gradient(
    to bottom right,
    #ddd 40%,
    transparent,
    #444 40%
  );
  filter: blur(300px);
  position: absolute;
  width: 100%;
  height: 110%;
  top: 0;
  left: 0;
  background-position: 0px 0px;
  animation: blurry 8s reverse cubic-bezier(0.36, 0, 0.66, -0.56);

  @media (prefers-reduced-motion) {
    animation-name: none;
  }

  ${props => blurryColors[props.color]}
  ${blurEffect}
`
