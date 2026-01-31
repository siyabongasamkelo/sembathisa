import styled from "styled-components";

export const Headerr = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.lg};
`;

export const HeaderInner = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1200px) {
  }
`;

export const LogoArea = styled.div``;

export const NavArea = styled.nav`
  margin-left: -10px;
  a {
    text-decoration: none;
    padding-left: 10px;
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 12px;
    font-family: "inter";
  }
  @media only screen and (min-width: 240px) {
    display: none;
  }
`;

export const ActionArea = styled.div`
  @media only screen and (min-width: 240px) {
    svg {
      display: block;
      transform: scale(300%);
      margin-right: 20px;
    }
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  @media only screen and (min-width: 900px) {
    display: none;
  }

  button {
    height: 40px;
    width: 80px;
    border-radius: 30px;
    font-size: 12px;
    margin-top: ${(props) => props.theme.spacing.lg};
  }
`;

export const LogoText = styled.h3``;

export const UserProfile = styled.div`
  height: 44px;
  aspect-ratio: 1 /1;
  border-radius: 50%;
  background-color: black;
  @media only screen and (min-width: 240px) {
    display: none;
  }

  @media (min-width: 1200px) {
  }
`;

export const HelpButton = styled.button`
  height: 30px;
  width: 44px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 12px;
  font-weight: 600;
  border-radius: 30px;
  border: none;
  margin-left: 0px;
  margin-top: ${(props) => props.theme.spacing.md};

  @media only screen and (min-width: 240px) {
    height: 45px;
    width: 90px;
    margin-top: ${(props) => props.theme.spacing.lg};

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: white;
      display: flex;

      margin-top: 10%;
      margin-left: 20%;
    }

    svg {
      fill: white;
      transform: scale(130%);
      margin-left: 10px;
      margin-top: 5%;
    }
  }

  @media (min-width: 1200px) {
    width: 74px;
    height: 40px;
  }
`;
