import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  width: 70%;
  margin-left: 15%;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 18px;
  font-weight: 500;
  font-family: "Kantumruy Pro", sans-serif;

  @media (min-width: 1200px) {
    height: 60px;
  }
`;
