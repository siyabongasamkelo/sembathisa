import styled from "styled-components";

export const TitleAndParagraph = styled.div``;

export const Title = styled.div`
  margin-top: ${(props) => props.theme.spacing.lg};
  h3 {
    text-align: left;
  }
`;

export const Paragraph = styled.div`
  margin-top: ${(props) => props.theme.spacing.lg};
  p {
    text-align: left;
  }
`;
