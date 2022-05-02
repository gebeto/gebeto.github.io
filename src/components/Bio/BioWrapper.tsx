import styled from "styled-components"

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

  @media screen and (max-width: 400px) {
    margin-bottom: 4px;
  }

  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
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
  color: #444;
  animation: appear3 4.1s cubic-bezier(0.36, 0, 0.66, -0.56) reverse;

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }

  @media (prefers-color-scheme: dark) {
    color: #8a8a8a;
  }
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
  height: calc(100vh - 36px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ::selection {
    color: #fff;
    background: #000;
  }

  .bio {
    display: flex;
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
    padding: 0 16px;
    user-select: none;
    animation: appear2 7s cubic-bezier(0.36, 0, 0.66, -0.56) reverse;
  }

  @media screen and (max-width: 400px) {
    .bio {
      flex-direction: column;
      text-align: center;
    }

    .bio .separator {
      display: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    ::selection {
      color: #000;
      background: #fff;
    }
  }
`
