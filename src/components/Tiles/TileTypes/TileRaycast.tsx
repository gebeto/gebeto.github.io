import styled from "@emotion/styled"
import { TileBase } from "./TileBase"

const hoverTransition = "400ms ease-in-out"

export const RaycastTileWrapper = styled.a`
  ${TileBase}
  position: relative;
  overflow: visible;

  display: flex;
  flex-direction: row-reverse;
  grid-column: span 8;
  grid-row: span 1;

  .tile-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    padding: 24px 30px;
    overflow: hidden;
    padding-left: 0;
  }

  .tile-image {
    max-width: 100px;
    align-items: center;
    justify-content: center;

    img,
    picture {
      max-height: 48px;
    }
  }

  box-sizing: border-box;
  border: 1px solid transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    border-radius: 12px;
  }

  &:before,
  &:after {
    content: " ";
    z-index: -2;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90.56deg,
      #27061a,
      #ff6363 29.69%,
      #9b4dff 52.6%,
      #100321 98.44%
    );
    border-radius: 12px;
    transition: transform ${hoverTransition}, opacity ${hoverTransition};
    opacity: 0;
  }

  &:before {
    z-index: -2;
    transform: scale(0.8);
    filter: blur(20px);
  }

  &:after {
    z-index: -1;
    left: 0px;
    top: 0px;
    transition: left ${hoverTransition}, top ${hoverTransition},
      width ${hoverTransition}, height ${hoverTransition},
      opacity ${hoverTransition}, border-radius ${hoverTransition};
  }

  &:hover:after {
    left: -5px;
    top: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    opacity: 1;
    border-radius: 14px;
  }

  &:hover:before {
    transform: scale(1, 1.1);
    opacity: 1;
  }
`

export const RaycastWideTileWrapper = styled.a`
  ${RaycastTileWrapper.__emotion_styles}
  grid-column: span 16;
`
