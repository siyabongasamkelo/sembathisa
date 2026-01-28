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
`;

export const ActionArea = styled.div``;

export const LogoText = styled.h3``;

export const UserProfile = styled.div`
  height: 44px;
  aspect-ratio: 1 /1;
  border-radius: 50%;
  background-color: black;
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

  @media (min-width: 1200px) {
    width: 74px;
    height: 40px;
  }
`;
