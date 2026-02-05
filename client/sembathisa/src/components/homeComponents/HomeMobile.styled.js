import styled from "styled-components";

export const HeroTextLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing.lg};

  h1 {
    margin-top: ${(props) => props.theme.spacing.md};
  }
`;

//------------------------------ Hero photos-------------------------

export const HeroMedia = styled.div`
  display: flex;
  justify-content: center;
`;

export const ColumnPhotos = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 140px;
    margin-top: ${(props) => props.theme.spacing.lg};
  }

  // -------------------------------Tablet Mode--------------------------\\

  @media only screen and (min-width: 768px) {
    img {
      width: 180px;
    }
  }
`;

export const SinglePhoto = styled.div`
  img {
    width: 140px;
    margin-left: ${(props) => props.theme.spacing.lg};
    /* margin-top: ${(props) => props.theme.spacing.xxl}; */
    margin-top: 104px;
  }

  @media only screen and (min-width: 768px) {
    img {
      width: 180px;
    }
  }
`;

// ------------------------------Hero Paragraphs-----------------------

export const HeroParagraph = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.md};

  @media only screen and (min-width: 768px) {
    width: 80%;
    margin-left: 10%;
  }
`;

// ---------------------------Hero Button------------------------------

export const HeroButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-top: ${(props) => props.theme.spacing.md};
  }

  @media only screen and (min-width: 768px) {
    width: 80%;
    margin-left: 10%;
  }
`;
