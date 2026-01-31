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
  @media only screen and (min-width: 900px) {
    display: block;
  }
`;

export const ActionArea = styled.div`
  button {
    height: 40px;
    width: 80px;
    border-radius: 30px;
    font-size: 12px;
    margin-top: ${(props) => props.theme.spacing.lg};
  }

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
    display: block;
    svg {
      display: none;
    }
  }
`;

export const LogoText = styled.h3``;

export const UserProfile = styled.div`
  height: 64px;
  aspect-ratio: 1 /1;
  border-radius: 50%;
  background-color: black;
  @media only screen and (min-width: 240px) {
    display: none;
  }

  @media (min-width: 900px) {
    display: block;
  }
`;
