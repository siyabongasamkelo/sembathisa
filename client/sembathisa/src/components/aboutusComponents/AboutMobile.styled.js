import styled from "styled-components";

export const AboutContent = styled.div``;

export const AboutHeader = styled.div`
  margin-top: ${(props) => props.theme.spacing.sm};

  h3 {
    text-align: left;
  }

  @media only screen and (min-width: 768px) {
  }
`;

export const AboutMedia = styled.div`
  margin-top: ${(props) => props.theme.spacing.lg};

  img {
    width: 100%;
  }
`;
