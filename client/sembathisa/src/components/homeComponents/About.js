import React from "react";
import { Container } from "../ui/Container";
import {
  AboutLayOut,
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
} from "./About.styled";
import { MediumText } from "../ui/typography/Text";

const About = () => {
  return (
    <Container>
      <AboutLayOut>
        <Introduction>
          <IntroductionHeader>
            <MediumText>About Sembathisa Ubukhosi Foundation US</MediumText>
          </IntroductionHeader>
          <IntroductionParagraph>
            The Sembathisa Ubukhosi Foundation is a South African non-profit
            organisation focused on uplifting, assisting, and re-establishing
            individuals and communities that were once disadvantaged.
          </IntroductionParagraph>
        </Introduction>
      </AboutLayOut>
    </Container>
  );
};

export default About;
