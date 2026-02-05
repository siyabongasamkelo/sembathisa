import styled from "styled-components";

export const Introduction = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroductionHeader = styled.div`
  width: 30%;

  @media only screen and (min-width: 240px) {
    width: 90%;
    display: flex;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 900px) {
    width: 30%;
    display: block;
  }
`;

export const IntroductionParagraph = styled.div`
  width: 45%;
  margin-top: ${(props) => props.theme.spacing.sm};

  @media only screen and (min-width: 240px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: ${(props) => props.theme.spacing.md};
  }

  @media only screen and (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 900px) {
    display: block;
    width: 45%;
    margin-top: ${(props) => props.theme.spacing.sm};
    width: 35%;
  }
`;
