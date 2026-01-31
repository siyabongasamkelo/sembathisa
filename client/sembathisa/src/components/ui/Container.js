import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  @media only screen and (min-width: 240px) {
    display: none;
  }

  @media only screen and (min-width: 1000px) {
    display: flex;
  }
`;

export const ContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  @media only screen and (min-width: 240px) {
    display: block;
    display: flex;
  }

  @media only screen and (min-width: 800px) {
    display: none;
  }
`;
