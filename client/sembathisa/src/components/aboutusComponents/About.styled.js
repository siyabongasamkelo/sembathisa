import styled from "styled-components";

export const AboutLayOut = styled.div`
  width: 80%;
  max-width: 1200px;
  margin-top: ${(props) => props.theme.spacing.xxl};
`;

export const AboutUsContentLayout = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
  }
`;

export const AboutUsContentHeader = styled.div`
  margin-top: ${(props) => props.theme.spacing.sm};
  h3 {
    text-align: left;
  }
`;

export const AboutUsContent = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spacing.lg};
`;

export const AboutUsMedia = styled.div`
  width: 30%;
  img {
    width: 100%;
    height: 180px;
  }
  @media (min-width: 1200px) {
  }
`;

export const AboutUsText = styled.div`
  width: 65%;
  margin-left: 26px;
  h3 {
    text-align: left;
  }

  P {
    margin-top: ${(props) => props.theme.spacing.md};
  }

  .financial {
  }

  button {
  }

  @media (min-width: 1200px) {
  }
`;

export const AboutUsParagraph = styled.div`
  width: 70%;
  p {
    text-align: left;
  }
`;
