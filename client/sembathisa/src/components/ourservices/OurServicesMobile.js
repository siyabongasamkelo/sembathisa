import {
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
} from "../layout/PageIntroduction";
import {
  Paragraph,
  Title,
  TitleAndParagraph,
} from "../layout/TitleAndParagraph";
import { ContainerMobile } from "../ui/Container";
import { MobileLayout } from "../ui/SectionLayout";
import { MediumText, SmallMediumText, SmallText } from "../ui/typography/Text";
import { OurServicesContent } from "./OurServicesMobile.styled";
import { Button } from "../ui/Button";

const OurServicesMobile = () => {
  return (
    <ContainerMobile>
      <MobileLayout>
        <Introduction>
          <IntroductionHeader>
            <MediumText>Our Services</MediumText>
          </IntroductionHeader>
          <IntroductionParagraph>
            <SmallText>
              At the Sembathisa Ubukhosi Foundation, our services are designed
              to address real challenges faced by youth and disadvantaged
              communities. Each program focuses on empowerment, sustainability,
              and long-term impact.
            </SmallText>
          </IntroductionParagraph>
        </Introduction>
        <OurServicesContent>
          {/* --------------------Skills Development And Training-------------------- */}
          <TitleAndParagraph>
            <Title>
              <SmallMediumText>Skills Development And Training</SmallMediumText>
            </Title>
            <Paragraph>
              <SmallText>
                We provide structured skills development programs that equip
                young people with practical, market-relevant abilities. Our
                training focuses on preparing individuals for employment,
                entrepreneurship, and personal growth in an evolving economy.
              </SmallText>
            </Paragraph>
          </TitleAndParagraph>

          {/* --------------------Financial Assistance & Cooperative Support-------------------- */}

          <TitleAndParagraph>
            <Title>
              <SmallMediumText>
                Financial Assistance & Cooperative Support
              </SmallMediumText>
            </Title>
            <Paragraph>
              <SmallText>
                Access to financial resources remains one of the biggest
                barriers to growth for small cooperatives and emerging
                businesses. We support these initiatives by connecting them with
                sponsors, partners, and funding opportunities.
              </SmallText>
            </Paragraph>
          </TitleAndParagraph>

          {/* --------------------Community Reintegration Programs-------------------- */}

          <TitleAndParagraph>
            <Title>
              <SmallMediumText>
                Community Reintegration Programs
              </SmallMediumText>
            </Title>
            <Paragraph>
              <SmallText>
                We support individuals who were previously incarcerated by
                providing pathways for successful reintegration into society.
                Our programs are built around dignity, second chances, and
                social inclusion.
              </SmallText>
            </Paragraph>
          </TitleAndParagraph>

          {/* --------------------Terms and condition-------------------- */}

          <Introduction>
            <IntroductionHeader>
              <MediumText>Terms and condition</MediumText>
            </IntroductionHeader>
          </Introduction>

          {/* --------------------Community Reintegration Programs-------------------- */}
          <TitleAndParagraph>
            <Title>
              <SmallMediumText>
                Community Reintegration Programs
              </SmallMediumText>
            </Title>
            <Paragraph>
              <ul>
                <li>
                  <SmallText>
                    A once-off registration fee of R50 is required and is
                    non-refundable.
                  </SmallText>
                </li>
                <li>
                  <SmallText>
                    An annual affiliation fee of R500 is payable each year to
                    maintain active affiliation status.
                  </SmallText>
                </li>
                <li>
                  <SmallText>
                    A 10% commission is applicable on any funding received
                    through opportunities facilitated by the Sembathisa Ubukhosi
                    Foundation.
                  </SmallText>
                </li>
              </ul>
            </Paragraph>
          </TitleAndParagraph>
          {/* --------------------Read All Terms And Conditions-------------------- */}

          <Introduction>
            <IntroductionHeader>
              <MediumText>Please Read All Terms and condition</MediumText>
            </IntroductionHeader>
          </Introduction>

          <Button>Read Terms And Conditions</Button>
        </OurServicesContent>
      </MobileLayout>
    </ContainerMobile>
  );
};

export default OurServicesMobile;
