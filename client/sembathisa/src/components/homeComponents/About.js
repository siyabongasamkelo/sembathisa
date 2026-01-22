import React from "react";
import { Container } from "../ui/Container";
import {
  AboutLayOut,
  AboutUsContent,
  AboutUsContentHeader,
  AboutUsMedia,
  AboutUsText,
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
  AboutUsContentLayout,
  AboutUsParagraph,
} from "./About.styled";
import { MediumText, SmallMediumText, SmallText } from "../ui/typography/Text";
import family from "../../assets/img/family.jpeg";
import { Button } from "../ui/Button";

const About = () => {
  return (
    <Container>
      <AboutLayOut>
        <Introduction>
          <IntroductionHeader>
            <MediumText>About Sembathisa Ubukhosi Foundation US</MediumText>
          </IntroductionHeader>
          <IntroductionParagraph>
            <SmallText>
              The Sembathisa Ubukhosi Foundation is a South African non-profit
              organisation focused on uplifting, assisting, and re-establishing
              individuals and communities that were once disadvantaged.
            </SmallText>
          </IntroductionParagraph>
        </Introduction>
        <AboutUsContentLayout>
          <AboutUsContentHeader>
            <MediumText>What We Do</MediumText>
          </AboutUsContentHeader>

          <AboutUsContent>
            <AboutUsMedia>
              <img src={family} alt="organisation members" />
            </AboutUsMedia>
            <AboutUsText>
              <SmallMediumText>Skills Development</SmallMediumText>
              <AboutUsParagraph>
                <SmallText>
                  We provide practical, market-relevant skills training designed
                  to improve employability and encourage entrepreneurship. Our
                  programs focus on preparing youth for real opportunities in
                  today’s economy.
                </SmallText>
              </AboutUsParagraph>
              <SmallMediumText className="financial">
                Financial Assistance & Business Support
              </SmallMediumText>
              <AboutUsParagraph>
                <SmallText>
                  We support small cooperatives and emerging businesses by
                  connecting them with sponsors, partners, and financial
                  resources. By strengthening local enterprises, we contribute
                  to job creation and economic sustainability within
                  communities.
                </SmallText>
              </AboutUsParagraph>
              <Button>Read More</Button>
            </AboutUsText>
          </AboutUsContent>
        </AboutUsContentLayout>
      </AboutLayOut>
    </Container>
  );
};

export default About;
