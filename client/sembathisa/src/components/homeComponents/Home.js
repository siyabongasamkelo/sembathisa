import React from "react";
// import { Container } from "../common/Container.styled";
import { Wrapper } from "./Home.styled";
import Header from "../common/Header";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
      </Wrapper>
    </Container>
  );
};

export default Home;
