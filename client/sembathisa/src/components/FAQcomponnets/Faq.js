import React from "react";
import { Container } from "../ui/Container";
import { FaqContent, FaqLayout } from "./FAQ.styled";
import {
  Introduction,
  IntroductionHeader,
  IntroductionParagraph,
} from "../layout/PageIntroduction";
import { SmallMediumText, SmallText } from "../ui/typography/Text";
import FAQItem from "../ui/Acordion";

const Faq = () => {
  return (
    <Container>
      <FaqLayout>
        <Introduction>
          <IntroductionHeader>
            <SmallMediumText>Frequently Asked Questions</SmallMediumText>
          </IntroductionHeader>
          <IntroductionParagraph>
            <SmallText>
              These are the questions that you might also have if your question
              is not here please click the help button and ask there.
            </SmallText>
          </IntroductionParagraph>
        </Introduction>
        <FaqContent>
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
        </FaqContent>
      </FaqLayout>
    </Container>
  );
};

export default Faq;
