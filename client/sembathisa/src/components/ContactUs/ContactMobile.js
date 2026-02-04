import {
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
} from "../layout/PageIntroduction";
import { ContainerMobile } from "../ui/Container";
import { MobileLayout } from "../ui/SectionLayout";
import { MediumText, SmallText } from "../ui/typography/Text";
import {
  ContactDetails,
  FormMobile,
  IconAndText,
} from "./ContactMobile.styled";
import { TelephoneFill, GeoAltFill, EnvelopeFill } from "react-bootstrap-icons";
import { FormLabel } from "../ui/typography/Text";
import { Button } from "../ui/Button";
import { FormTextArea } from "../common/FormTextArea";
import { FormInput } from "../common/FormInput";

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
            <GeoAltFill />
            <SmallText>
              KwaZulu-Natal, Durban ,gillespie, 67 whitehaven
            </SmallText>
          </IconAndText>
          <IconAndText>
            <EnvelopeFill />
            <SmallText>siyabongasamkelociam@gmail.com</SmallText>
          </IconAndText>
        </ContactDetails>

        <FormMobile>
          <div>
            <FormLabel>Your Email</FormLabel>
          </div>
          <div>
            <FormInput type="email" placeholder="example@yourmail.com" />
          </div>
          <div>
            <FormLabel>Your Message</FormLabel>
          </div>
          <div>
            <FormTextArea placeholder="Type your message here" />
          </div>
          <Button>Submit</Button>
        </FormMobile>
      </MobileLayout>
    </ContainerMobile>
  );
};

export default ContactMobile;
