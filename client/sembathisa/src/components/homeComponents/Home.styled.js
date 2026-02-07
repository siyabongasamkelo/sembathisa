import styled from "styled-components";

export const HomeLayout = styled.div`
  width: 80%;
  max-width: 1200px;
`;

export const Hero = styled.div`
  width: 100%;

  margin-top: ${(props) => props.theme.spacing.lg};
`;

export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1200px) {
  }
`;

export const HeroTextContent = styled.div`
  width: 55%;
  h3 {
  }

  @media (min-width: 1200px) {
    width: 55%;
  }
`;

export const HeroParagraph = styled.div`
  width: 90%;
  margin-left: 5%;

  div {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
    }
  }

  @media (min-width: 992px) {
    width: 70%;
    margin-left: 15%;
  }

  @media (min-width: 1200px) {
    width: 70%;
    margin-left: 15%;
    margin-top: ${(props) => props.theme.spacing.lg};

    button {
      width: 320px;
      margin-top: ${(props) => props.theme.spacing.lg};
    }
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

  margin-top: ${(props) => props.theme.spacing.lg};

  img {
    width: 220px;
    height: 140px;
  }
  @media (min-width: 1200px) {
    margin-top: ${(props) => props.theme.spacing.xl};
    img {
      width: 320px;
      height: 180px;
    }
  }
`;

export const IconsAndBenefits = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.spacing.md};

  @media (min-width: 1200px) {
    margin-top: ${(props) => props.theme.spacing.xl};
  }
`;

export const Icons = styled.div`
  width: 200px;
  margin-left: -30px;
  svg {
    margin-left: 30px;

    &:hover {
      transition: 0.5s ease-in-out;
      fill: ${(props) => props.theme.colors.primary};
      cursor: pointer;
    }
  }
`;

export const Benefits = styled.div`
  div {
    display: flex;
    p {
      margin-left: 10px;
    }
    svg {
      fill: #228b22;
    }
  }
`;
