import styled from "styled-components";

export const Introduction = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroductionHeader = styled.div`
  width: 30%;
  h3 {
  }
  @media (min-width: 1200px) {
  }
`;

export const IntroductionParagraph = styled.div`
  width: 45%;

  margin-top: ${(props) => props.theme.spacing.sm};
`;
