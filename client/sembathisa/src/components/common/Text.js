import styled from "styled-components";

export const SmallText = styled.p`
  font-size: ${(props) => props.theme.size.smallTextDesktop};
  color: ${(props) => props.theme.color.smallTextColor};
  font-family: "Kantumruy Pro", sans-serif;
  font-optical-sizing: auto;
  /* font-weight: <weight>; */
  font-style: normal;
  line-height: 30px;
`;

export const HeroText = styled.h1`
  font-size: ${(props) => props.theme.size.bigTextColor};
  color: ${(props) => props.theme.color.bigTextColor};
  font-family: "Cormorant Garamond", serif;
  font-optical-sizing: auto;
  /* font-weight: <weight>; */
  font-style: normal;
`;

export const MediumText = styled.h3`
  font-size: ${(props) => props.theme.size.mediumTextDesktop};
  color: ${(props) => props.theme.color.bigTextColor};
  font-family: "Cormorant Garamond", serif;
  font-optical-sizing: auto;
  /* font-weight: <weight>; */
  font-style: normal;
`;

export const LogoText = styled.h3`
  font-size: ${(props) => props.theme.size.logoText};
  color: ${(props) => props.theme.color.bigTextColor};
  font-family: "Inspiration", cursive;
  font-weight: 400;
  font-style: normal;
`;

export const ButtonText = styled.h3`
  font-size: ${(props) => props.theme.size.buttonText};
  color: ${(props) => props.theme.color.bigTextColor};
  font-family: "Kantumruy Pro", sans-serif;
  font-optical-sizing: auto;
  /* font-weight: <weight>; */
  font-style: normal;
`;
