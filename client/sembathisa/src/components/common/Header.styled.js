import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav a {
    color: ${(props) => props.theme.color.bigTextColor};
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    padding-left: 26px;
  }

  .profile-container {
    height: 100%;
    .profile {
      height: 60%;
      margin-top: 10%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: black;
    }
    button {
      height: 40px;
      width: 90px;
      border-radius: 30px;
      border: none;
      background-color: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.buttonTextColor};
      margin-top: 15px;
      margin-left: -15px;
    }
  }
`;
