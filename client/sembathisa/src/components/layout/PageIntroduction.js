import styled from "styled-components";

export const Introduction = styled.div`
  height: 200px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroductionHeader = styled.div`
  width: 30%;
  h3 {
    margin-top: 24px;
  }
  @media (min-width: 1200px) {
    margin-top: 44px;
  }
`;

export const IntroductionParagraph = styled.div`
  width: 45%;
`;
