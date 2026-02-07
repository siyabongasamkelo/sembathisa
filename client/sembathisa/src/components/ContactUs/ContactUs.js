import { FormInput } from "../common/FormInput";
import { FormTextArea } from "../common/FormTextArea";
import {
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
} from "../layout/PageIntroduction";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { FormLabel, SmallMediumText, SmallText } from "../ui/typography/Text";
import {
  ContactDetailsContent,
  ContactDetails,
  ContactUsContent,
  ContactUsLayout,
  ContactForm,
} from "./ContactUs.styled";
import { TelephoneFill, GeoAltFill, EnvelopeFill } from "react-bootstrap-icons";

const ContactUs = () => {
  return (
    <Container id="contactus">
      <ContactUsLayout>
        <Introduction>
          <IntroductionHeader>
            <SmallMediumText>Contact Us</SmallMediumText>
          </IntroductionHeader>
          <IntroductionParagraph>
            <SmallText>
              If you need to reach out to us for any reasons feel free to use
              any of the details below
            </SmallText>
          </IntroductionParagraph>
        </Introduction>
        <ContactUsContent>
          <ContactDetails>
            <ContactDetailsContent>
              <TelephoneFill />
              <SmallText>061 189 2231</SmallText>
            </ContactDetailsContent>
            <ContactDetailsContent>
              <GeoAltFill />
              <SmallText>
                KwaZulu-Natal, Durban ,gillespie, 67 whitehaven
              </SmallText>
            </ContactDetailsContent>
            <ContactDetailsContent>
              <EnvelopeFill />
              <SmallText>siyabongasamkelociam@gmail.com</SmallText>
            </ContactDetailsContent>
          </ContactDetails>
        </ContactUsContent>

        <ContactForm>
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
        </ContactForm>
      </ContactUsLayout>
    </Container>
  );
};

export default ContactUs;
