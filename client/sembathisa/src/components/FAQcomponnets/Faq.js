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
    <Container id="faq">
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
            answer={
              "The Sembathisa Ubukhosi Foundation Affiliate Program is a partnership initiative that allows companies and individuals to formally affiliate with the Foundation and support its mission of empowering youth and communities in South Africa.Through this program, affiliates become recognised partners of the Foundation and gain access to benefits such as training, ongoing support, assistance with funding opportunities, project monitoring, marketing exposure, and access to distribution networks. In return, affiliates agree to promote and support the objectives of the Sembathisa Ubukhosi Foundation and contribute to community development initiatives. The program requires a small registration fee, an annual affiliation fee, and a commission on funding secured through the Foundation, helping ensure the sustainability of its social impact work."
            }
          />
          <FAQItem
            question={"Who can apply to become an affiliate?"}
            answer={
              "Companies and individuals who align with the mission and objectives of the Sembathisa Ubukhosi Foundation can apply to become affiliates.This includes: Registered companies Small businesses and cooperatives Entrepreneurs Individuals interested in supporting community development All applicants are required to complete the affiliate application form and agree to the Foundation’s terms and conditions."
            }
          />
          <FAQItem
            question={"Is there any commission involved?"}
            answer={
              "Yes. There is a commission involved. Affiliated companies or individuals are required to pay a 10% commission on any funding received through the Sembathisa Ubukhosi Foundation. This commission supports the Foundation’s operations and helps sustain its programs and community initiatives."
            }
          />
          <FAQItem
            question={"What benefits do affiliates receive?"}
            answer={
              "Affiliates enjoy a range of benefits, starting with the ability to earn commissions—either a percentage of sales or a fixed amount—for every customer they refer, with some programs even offering higher rates as referrals increase. This creates the potential for passive income, since once links or content are shared, they can continue generating revenue over time without much additional effort. Joining an affiliate program typically requires little to no startup cost, as affiliates don’t need to create products, handle inventory, or manage shipping. They also enjoy flexibility, being able to work from anywhere and choose how and when to promote products, often with access to marketing resources like banners, email templates, and tracking tools provided by the company. Many programs offer performance incentives such as bonuses or higher commission tiers for top performers, while also opening networking opportunities with brands and communities. Beyond earnings, affiliates develop valuable skills in marketing, content creation, SEO, and social media management, making the experience both profitable and professionally enriching."
            }
          />
          <FAQItem
            question={"Does affiliation guarantee funding?"}
            answer={
              "No, affiliation does not guarantee funding. Being an affiliate simply means you promote a company’s products or services in exchange for commissions on sales or leads. It doesn’t come with any upfront payment, investment, or guaranteed income—your earnings depend entirely on how many people buy or take action through your referral links Some programs might offer performance bonuses or incentives, but these are contingent on achieving specific targets, not guaranteed. Affiliates essentially bear the same risk as any self-employed marketer: you can only earn what you generate."
            }
          />
          <FAQItem
            question={"What are the responsibilities of an affiliate?"}
            answer={
              "The responsibilities of an affiliate mainly revolve around promoting a company’s products or services ethically and effectively. An affiliate is responsible for sharing accurate information about the products, ensuring that any claims are truthful and not misleading. They must use approved marketing channels and materials provided by the company, such as banners, links, or product images, and avoid spamming or violating advertising rules. Tracking and reporting referrals correctly is also important, as commissions are typically paid based on verified sales or leads. Affiliates are responsible for complying with legal requirements, such as disclosing affiliate relationships to their audience. Finally, successful affiliates often take responsibility for creating engaging content, building trust with their audience, and optimizing their marketing efforts to increase clicks and conversions while maintaining the company’s brand reputation."
            }
          />
          <FAQItem
            question={"How does monitoring and evaluation work?"}
            answer={
              "Monitoring and evaluation (M&E) is the process organizations use to track progress, measure effectiveness, and guide improvements. Monitoring involves the ongoing, real-time tracking of activities and outputs to answer questions like whether tasks are being completed on time and resources are used efficiently, usually by collecting data regularly and comparing it to pre-set targets. Evaluation, on the other hand, is a periodic, in-depth assessment of outcomes and impact, asking whether goals were achieved, the project was effective, and what lessons can be learned. It often combines quantitative data, like metrics and numbers, with qualitative data, such as feedback and observations, to provide a full picture of success. Together, monitoring ensures that activities stay on track, while evaluation measures overall value and impact, helping organizations identify problems early, make data-driven decisions, and improve future performance."
            }
          />
        </FaqContent>
      </FaqLayout>
    </Container>
  );
};

export default Faq;
