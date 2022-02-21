import styled from "styled-components";


export const BioWrapper = styled.div`
  height: calc(100vh - 36px);
  display: flex;
  align-items: center;
  justify-content: center;

  ::selection {
    color: #fff;
    background: #000;
  }

  .bio {
    display: flex;
  }

  .bio h1 {
    font-size: 24px;
    margin: 0;
    line-height: 1;
  }

  .bio .separator {
    padding: 0 16px;
    user-select: none;
  }

  .bio h2 {
    font-size: 24px;
    color: #b0b0b0;
  }

  @media screen and (max-width: 400px) {
    .bio {
      flex-direction: column;
      text-align: center;
    }

    .bio h1 {
      margin-bottom: 16px;
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
`;