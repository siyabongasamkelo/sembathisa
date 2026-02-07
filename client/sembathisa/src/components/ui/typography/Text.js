import styled from "styled-components";

export const SmallText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm.small};
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: "Kantumruy Pro", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  line-height: 22px;
  text-align: center;

  @media only screen and (min-width: 240px) {
    font-size: ${(props) => props.theme.fontSizes.sm.smallMedium};
    line-height: 30px;
  }

  @media (min-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.sm.small};
    line-height: 22px;
  }

  @media (min-width: 1280px) {
    font-size: ${(props) => props.theme.fontSizes.sm.smallMedium};
  }
`;

export const HeroText = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.sm.large};
  color: ${(props) => props.theme.colors.textPriamry};
  font-family: "Cormorant Garamond", serif;
  font-optical-sizing: auto;
  font-style: normal;
  text-align: center;

  @media only screen and (min-width: 240px) {
    font-size: 36px;
  }

  @media (min-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.sm.large};
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSizes.sm.large};
    font-size: 38px;
  }
`;

export const MediumText = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.sm.medium};
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: "Cormorant Garamond", serif;
  font-optical-sizing: auto;
  font-style: normal;
  text-align: center;

  @media only screen and (min-width: 240px) {
    font-size: ${(props) => props.theme.fontSizes.md.medium};
    font-size: 28px;
  }

  @media (min-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.sm.medium};
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSizes.sm.large};
    font-size: 38px;
  }
`;

export const SmallMediumText = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.sm.SmallMedium};
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: "Cormorant Garamond", serif;
  font-optical-sizing: auto;
  font-style: normal;
  text-align: center;

  @media only screen and (min-width: 240px) {
    font-size: ${(props) => props.theme.fontSizes.sm.medium};
  }

  @media (min-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.sm.SmallMedium};
  }
`;

export const LogoText = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.sm.logo};
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: "Inspiration", cursive;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  @media only screen and (min-width: 240px) {
    font-size: ${(props) => props.theme.fontSizes.sm.medium};
  }

  @media (min-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.sm.logo};
  }
`;

export const ButtonText = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.sm.button};
  color: ${(props) => props.theme.colors.buttonText};
  font-family: "Kantumruy Pro", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  @media (min-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.sm.button};
  }
`;

export const FormLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.sm.small};
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: "Kantumruy Pro", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  line-height: 22px;
  text-align: center;

  @media only screen and (min-width: 240px) {
    font-size: ${(props) => props.theme.fontSizes.sm.smallMedium};
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSizes.md.small};
  }
`;
