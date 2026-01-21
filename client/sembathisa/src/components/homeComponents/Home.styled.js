import styled from "styled-components";

export const HomeLayout = styled.div`
  width: 80%;
  height: 95vh;
  max-width: 1200px;
`;

export const Hero = styled.div`
  min-height: 85%;
  width: 100%;
`;

export const HeroContent = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1200px) {
    min-height: 254px;
  }
`;

export const HeroTextContent = styled.div`
  width: 45%;
  height: 200px;
  h3 {
    margin-top: -7px;
  }
  @media (min-width: 1200px) {
    width: 55%;
  }
`;

export const HeroParagraph = styled.div`
  width: 90%;
  margin-left: 5%;

  button {
    margin-top: -4px;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 70%;
    margin-left: 15%;
  }
`;

export const HeroDecorationLeft = styled.div`
  width: 20%;
  height: 100%;
`;

export const HeroDecorationRight = styled.div`
  width: 20%;
  height: 100%;
`;

export const HeroMedia = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 4px;

  img {
    width: 220px;
    height: 140px;
    margin-top: -3px;
  }
  @media (min-width: 1200px) {
    img {
      width: 320px;
      height: 180px;
    }
  }
`;

export const IconsAndBenefits = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icons = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 14px;
`;

export const Benefits = styled.div`
  margin-top: 14px;
  div {
    height: 20px;
    margin-top: 10px;
    display: flex;
    p {
      margin-left: 10px;
    }
    svg {
      fill: #228b22;
    }
  }
`;
