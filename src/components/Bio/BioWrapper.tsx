import styled from "styled-components"

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

  @keyframes appear3 {
    from {
      opacity: 1;
      transform: translateY(0px);
    }

    90% {
      opacity: 0;
      transform: translateY(6px);
    }

    to {
      opacity: 0;
      transform: translateY(6px);
    }
  }

  .bio h1 {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
    animation: appear1 4s cubic-bezier(0.36, 0, 0.66, -0.56) reverse;
  }

  .bio .separator {
    padding: 0 16px;
    user-select: none;
    animation: appear2 7s cubic-bezier(0.36, 0, 0.66, -0.56) reverse;
  }

  .bio h2 {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: #b0b0b0;
    animation: appear3 4.1s cubic-bezier(0.36, 0, 0.66, -0.56) reverse;
  }

  @media screen and (max-width: 400px) {
    .bio {
      flex-direction: column;
      text-align: center;
    }

    .bio h1 {
      margin-bottom: 4px;
    }

    .bio h2 {
      font-size: 14px;
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

    .bio h1 {
      color: #fff;
    }

    .bio h2 {
      color: #8a8a8a;
    }
  }
`
