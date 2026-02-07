import React from "react";
import { Container } from "../ui/Container";
import {
  AboutLayOut,
  AboutUsContent,
  AboutUsContentHeader,
  AboutUsMedia,
  AboutUsText,
  AboutUsContentLayout,
  AboutUsParagraph,
} from "./About.styled";
import { SmallMediumText, SmallText } from "../ui/typography/Text";
import family from "../../assets/img/family.jpeg";
import { Button } from "../ui/Button";
import {
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
} from "../layout/PageIntroduction";

const About = () => {
  return (
    <Container id="about">
      <AboutLayOut>
        <Introduction>
          <IntroductionHeader>
            <SmallMediumText>
              About Sembathisa Ubukhosi Foundation US
            </SmallMediumText>
          </IntroductionHeader>
          <IntroductionParagraph>
            <SmallText>
              The Sembathisa Ubukhosi Foundation is a South African non-profit
              organisation
            </SmallText>
          </IntroductionParagraph>
        </Introduction>
        <AboutUsContentLayout>
          <AboutUsContentHeader>
            <SmallMediumText>What We Do</SmallMediumText>
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
