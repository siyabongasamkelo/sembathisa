import {
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
} from "../layout/PageIntroduction";
import { Title, TitleAndParagraph } from "../layout/TitleAndParagraph";
import FAQItem from "../ui/Acordion";
import { Button } from "../ui/Button";
import { ContainerMobile } from "../ui/Container";
import { MobileLayout } from "../ui/SectionLayout";
import { MediumText, SmallMediumText, SmallText } from "../ui/typography/Text";
import { FAQMobileContent } from "./FaqMobile.styled";

const FaqMobile = () => {
  return (
    <ContainerMobile>
      <MobileLayout>
        <Introduction>
          <IntroductionHeader>
            <MediumText>Frequently Asked Questions</MediumText>
          </IntroductionHeader>
          <IntroductionParagraph>
            <SmallText>
              If you need to reach out to us for any reasons feel free to use
              any of the details below
            </SmallText>
          </IntroductionParagraph>
        </Introduction>
        <FAQMobileContent>
          <FAQItem
            question={
              "What is the Sembathisa Ubukhosi Foundation Affiliate Program?"
            }
            answer={"It is what it is"}
          />
          <FAQItem
            question={"Who can apply to become an affiliate?"}
            answer={"It is what it is"}
          />
          <FAQItem
            question={"Is there any commission involved?"}
            answer={"It is what it is"}
          />
          <FAQItem
            question={"What benefits do affiliates receive?"}
            answer={"It is what it is"}
          />
          <FAQItem
            question={"Does affiliation guarantee funding?"}
            answer={"It is what it is"}
          />
          <FAQItem
            question={"What are the responsibilities of an affiliate?"}
            answer={"It is what it is"}
          />
          <FAQItem
            question={"How does monitoring and evaluation work?"}
            answer={"It is what it is"}
          />

          <TitleAndParagraph>
            <Title>
              <SmallMediumText className="purple">
                Got A Different Question Contact Us Now
              </SmallMediumText>
            </Title>
          </TitleAndParagraph>
          <Button>Contact Us</Button>
        </FAQMobileContent>
      </MobileLayout>
    </ContainerMobile>
  );
};

export default FaqMobile;
