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

  .homelayout {
    @media only screen and (min-width: 768px) {
      width: 65%;
    }
  }
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;
