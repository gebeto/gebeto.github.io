import React from "react"
import styled from "@emotion/styled"

import { css } from "@emotion/react"

const randomTransitionDuration = () => {
  const rand = 600 + Math.round(Math.random() * 600)

  return {
    transition: `transform 1s ${rand}ms, opacity 1s ${rand}ms`,
  }
}

const baseStyles = css`
  padding: 0;
  opacity: 0;
  transform: translateY(8px);

  &.shown {
    opacity: 1;
    transform: translateY(0px);
  }

  @media screen and (max-width: 720px) {
    grid-column: span 16;
  }
`

const tileBySize = {
  full: styled.ol`
    ${baseStyles}
    ${randomTransitionDuration}

    grid-column: span 8;
    grid-row: span 3;
  `,
  half: styled.ol`
    ${baseStyles}
    ${randomTransitionDuration}

    grid-column: span 4;
    grid-row: span 3;
  `,
  raycast: styled.ol`
    ${baseStyles}
    ${randomTransitionDuration}

    grid-column: span 8;
    grid-row: span 1;
  `,
}

export type TileProps = {
  size: keyof typeof tileBySize
}

export const Tile: React.FC<TileProps> = ({ size = "full", children }) => {
  const [shown, setShown] = React.useState(false)
  React.useEffect(() => setShown(true), [])

  const TileWrapper = tileBySize[size]

  return (
    <TileWrapper className={shown ? "shown" : undefined}>
      {children}
    </TileWrapper>
  )
}
