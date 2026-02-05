import {
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
} from "../layout/PageIntroduction";
import TextBlocks from "../layout/TextBlocks";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SmallMediumText, SmallText } from "../ui/typography/Text";
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
            <SmallMediumText>Our Services</SmallMediumText>
          </IntroductionHeader>
          <IntroductionParagraph>
            <SmallText>
              At the Sembathisa Ubukhosi Foundation, our services are designed
              to address real challenges faced by youth and disadvantaged
              communities.
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
                "Access to financial resources remains one of the biggest barriers to growth for small cooperatives and emerging businesses. We support these initiatives by connecting them with sponsors, partners, and funding opportunities."
              }
              header={"Financial Assistance & Cooperative Support"}
            />

            <TextBlocks
              paragraph={
                "We support individuals who were previously incarcerated by providing pathways for successful reintegration into society. Our programs are built around dignity, second chances, and social inclusion."
              }
              header={"Community Reintegration Programs"}
            />
          </Benefits>
          <TermsAndConditions>
            <LinedHeading>
              <SmallMediumText>Terms And Conditions</SmallMediumText>
            </LinedHeading>
            <TermsAndConditionContent>
              <FeesAndPayment>
                <SmallMediumText>Fees & Payments</SmallMediumText>

                <ul>
                  <li>
                    <SmallText>
                      {" "}
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
                      {" "}
                      A 10% commission is applicable on any funding received
                      through opportunities facilitated by the Sembathisa
                      Ubukhosi Foundation.
                    </SmallText>
                  </li>
                </ul>
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
