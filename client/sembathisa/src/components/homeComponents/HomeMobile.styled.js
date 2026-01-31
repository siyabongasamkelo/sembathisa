import styled from "styled-components";

export const HomeMobileLayout = styled.div`
  width: 90%;
`;

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
`;

export const ColumnPhotos = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 180px;
    margin-top: ${(props) => props.theme.spacing.md};
  }
`;

export const SinglePhoto = styled.div`
  img {
    width: 180px;
    margin-left: ${(props) => props.theme.spacing.md};
    margin-top: ${(props) => props.theme.spacing.xxl};
  }
`;

// ------------------------------Hero Paragraphs-----------------------

export const HeroParagraph = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.md};
`;

// ---------------------------Hero Button------------------------------

export const HeroButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-top: ${(props) => props.theme.spacing.md};
  }
`;
