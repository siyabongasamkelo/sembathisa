import {
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
} from "../layout/PageIntroduction";
import { ContainerMobile } from "../ui/Container";
import {
  AboutContent,
  AboutHeader,
  AboutMedia,
  AboutMobileLayout,
} from "./AboutMobile.styled";
import {
  MediumText,
  SmallMediumText,
  SmallText,
} from "../../components/ui/typography/Text";
import family2 from "../../assets/img/family2.jpeg";
import {
  Paragraph,
  Title,
  TitleAndParagraph,
} from "../layout/TitleAndParagraph";

const AboutMobile = () => {
  return (
    <ContainerMobile>
      <AboutMobileLayout>
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
        <AboutContent>
          <AboutHeader>
            <SmallMediumText>What We Do</SmallMediumText>
          </AboutHeader>
          <AboutMedia>
            <img src={family2} alt="group of people" />
          </AboutMedia>
          {/* ------------------Skill Development--------------------- */}
          <TitleAndParagraph>
            <Title>
              <SmallMediumText>Skill Development</SmallMediumText>
            </Title>
            <Paragraph>
              <SmallText>
                We provide practical, market-relevant skills training designed
                to improve employability and encourage entrepreneurship. Our
                programs focus on preparing youth for real opportunities in
                today’s economy.
              </SmallText>
            </Paragraph>
          </TitleAndParagraph>
          {/* ------------------Financial Assistance & Business Support--------------------- */}
          <TitleAndParagraph>
            <Title>
              <SmallMediumText>
                Financial Assistance & Business Support
              </SmallMediumText>
            </Title>
            <Paragraph>
              <SmallText>
                We support small cooperatives and emerging businesses by
                connecting them with sponsors, partners, and financial
                resources. By strengthening local enterprises, we contribute to
                job creation and economic sustainability within communities.
              </SmallText>
            </Paragraph>
          </TitleAndParagraph>
        </AboutContent>
      </AboutMobileLayout>
    </ContainerMobile>
  );
};

export default AboutMobile;
