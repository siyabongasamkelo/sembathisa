import styled from "styled-components";

export const AboutLayOut = styled.div`
  height: 100vh;
  width: 80%;
  max-width: 1200px;
`;

export const AboutUsContentLayout = styled.div`
  width: 100%;
  margin-top: -1px;
  @media (min-width: 1200px) {
    margin-top: 28px;
  }
`;

export const AboutUsContentHeader = styled.div`
  h3 {
    text-align: left;
    margin-top: 4px;
  }
`;

export const AboutUsContent = styled.div`
  display: flex;
`;

export const AboutUsMedia = styled.div`
  width: 30%;
  img {
    width: 100%;
    height: 180px;
  }
  @media (min-width: 1200px) {
    margin-top: 4px;
  }
`;

export const AboutUsText = styled.div`
  width: 65%;
  margin-left: 26px;
  h3 {
    text-align: left;
  }

  .financial {
    margin-top: -4px;
  }

  button {
    margin-top: -4px;
  }

  @media (min-width: 1200px) {
    margin-top: 4px;
  }
`;

export const AboutUsParagraph = styled.div`
  width: 70%;
  p {
    text-align: left;
  }
`;
