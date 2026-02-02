import {
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
} from "../layout/PageIntroduction";
import { ContainerMobile } from "../ui/Container";
import { MobileLayout } from "../ui/SectionLayout";
import { MediumText, SmallText } from "../ui/typography/Text";
import { ContactDetails, IconAndText } from "./ContactMobile.styled";
import { TelephoneFill, GeoAltFill, EnvelopeFill } from "react-bootstrap-icons";

const ContactMobile = () => {
  return (
    <ContainerMobile>
      <MobileLayout>
        <Introduction>
          <IntroductionHeader>
            <MediumText>Contact Us</MediumText>
          </IntroductionHeader>
          <IntroductionParagraph>
            <SmallText>
              If you need to reach out to us for any reasons feel free to use
              any of the details below
            </SmallText>
          </IntroductionParagraph>
        </Introduction>
        <ContactDetails>
          <IconAndText>
            <TelephoneFill /> <SmallText>061 189 2231</SmallText>
          </IconAndText>
          <IconAndText>
            <GeoAltFill />{" "}
            <SmallText>
              KwaZulu-Natal, Durban ,gillespie, 67 whitehaven
            </SmallText>
          </IconAndText>
          <IconAndText>
            <EnvelopeFill />{" "}
            <SmallText>siyabongasamkelociam@gmail.com</SmallText>
          </IconAndText>
        </ContactDetails>
      </MobileLayout>
    </ContainerMobile>
  );
};

export default ContactMobile;
