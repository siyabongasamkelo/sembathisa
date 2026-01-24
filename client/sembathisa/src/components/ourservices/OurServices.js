import {
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
} from "../layout/PageIntroduction";
import TextBlocks from "../layout/TextBlocks";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { MediumText, SmallMediumText, SmallText } from "../ui/typography/Text";
import {
  Benefits,
  FeesAndPayment,
  LinedHeading,
  OurServicesContent,
  OurServicesLayout,
  ReadTermsAndConditions,
  TermsAndConditionContent,
  TermsAndConditions,
} from "./OurServices.styled";

const OurServices = () => {
  return (
    <Container>
      <OurServicesLayout>
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
          <Benefits>
            <TextBlocks
              paragraph={
                "We provide structured skills development programs that equip young people with practical, market-relevant abilities. Our training focuses on preparing individuals for employment, entrepreneurship, and personal growth in an evolving economy."
              }
              header={"Skills Development & Training"}
            />

            <TextBlocks
              paragraph={
                "We provide structured skills development programs that equip young people with practical, market-relevant abilities. Our training focuses on preparing individuals for employment, entrepreneurship, and personal growth in an evolving economy."
              }
              header={"Skills Development & Training"}
            />

            <TextBlocks
              paragraph={
                "We provide structured skills development programs that equip young people with practical, market-relevant abilities. Our training focuses on preparing individuals for employment, entrepreneurship, and personal growth in an evolving economy."
              }
              header={"Skills Development & Training"}
            />
          </Benefits>
          <TermsAndConditions>
            <LinedHeading>
              <SmallMediumText>Terms And Conditions</SmallMediumText>
            </LinedHeading>
            <TermsAndConditionContent>
              <FeesAndPayment>
                <SmallMediumText>Fees & Payments</SmallMediumText>
                <SmallText>
                  <ul>
                    <li>
                      A once-off registration fee of R50 is required and is
                      non-refundable.
                    </li>
                    <li>
                      An annual affiliation fee of R500 is payable each year to
                      maintain active affiliation status.
                    </li>
                    <li>
                      A 10% commission is applicable on any funding received
                      through opportunities facilitated by the Sembathisa
                      Ubukhosi Foundation.
                    </li>
                  </ul>
                </SmallText>
              </FeesAndPayment>

              <ReadTermsAndConditions>
                <SmallMediumText>
                  Please Read All Terms And Conditions !!!!!!
                </SmallMediumText>
                <Button>Terms And Conditions</Button>
              </ReadTermsAndConditions>
            </TermsAndConditionContent>
          </TermsAndConditions>
        </OurServicesContent>
      </OurServicesLayout>
    </Container>
  );
};

export default OurServices;
