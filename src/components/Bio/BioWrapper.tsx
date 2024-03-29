import styled from "@emotion/styled"

export const BioAuthorName = styled.h1`
  @keyframes appear1 {
    from {
      opacity: 1;
      transform: translateY(0px);
    }

    90% {
      opacity: 0;
      transform: translateY(-6px);
    }

    to {
      opacity: 0;
      transform: translateY(-6px);
    }
  }

  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  animation: appear1 4s cubic-bezier(0.36, 0, 0.66, -0.56) reverse;
  color: #fff;

  @media screen and (max-width: 400px) {
    /* margin-bottom: 4px; */
  }

  /* @media (prefers-color-scheme: light) {
    color: #000;
  } */
`

export const BioAuthorTitle = styled.h1`
  @keyframes appear3 {
    from {
      opacity: 1;
      transform: translateY(0px);
    }

    93% {
      opacity: 0;
      transform: translateY(6px);
    }

    to {
      opacity: 0;
      transform: translateY(6px);
    }
  }

  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #8a8a8a;
  animation: appear3 4.1s cubic-bezier(0.36, 0, 0.66, -0.56) reverse;

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }

  /* @media (prefers-color-scheme: light) {
    color: #444;
  } */
`

export const BioSummary = styled.div`
  @keyframes summary {
    from {
      opacity: 0.8;
    }
    96% {
      transform: translateX(8px);
      opacity: 0;
    }
    to {
      transform: translateX(8px);
      opacity: 0;
    }
  }

  max-width: 82%;
  width: 500px;
  margin: 50px 0;
  margin-top: 70px;
  opacity: 0.8;
  animation: summary 6s cubic-bezier(0.36, 0, 0.66, -0.56) reverse;

  @media screen and (max-width: 400px) {
    display: none;
  }
`

export const BioWrapper = styled.div`
  padding: 32px 24px;
  padding-top: 40px;

  ::selection {
    color: #000;
    background: #fff;
  }

  .bio {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .ukraine {
    width: 32px;
    height: 18px;
    box-sizing: border-box;
    background: linear-gradient(to bottom, #0066cc 50%, #ffcc00 50%);
  }

  @keyframes appear2 {
    from {
      opacity: 1;
    }

    85% {
      opacity: 0;
    }

    to {
      opacity: 0;
    }
  }

  .bio .separator {
    user-select: none;
    animation: appear2 7s cubic-bezier(0.36, 0, 0.66, -0.56) reverse;
  }

  @media screen and (max-width: 400px) {
    .bio {
      flex-direction: column;
      text-align: center;
    }

    .separator {
      display: none;
    }
  }

  /* @media (prefers-color-scheme: light) {
    ::selection {
      color: #fff;
      background: #000;
    }
  } */
`
