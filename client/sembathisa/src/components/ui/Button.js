import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  width: 220px;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 18px;
  font-weight: 500;
  font-family: "Kantumruy Pro", sans-serif;

  &:hover {
    box-shadow: 0 0 12px ${(props) => props.theme.colors.primary};
    transition: 0.5s ease-in-out;
  }

  @media only screen and (min-width: 240px) {
    height: 60px;
    width: 100%;
  }

  @media (min-width: 900px) {
    height: 60px;
    width: 220px;
  }
`;
