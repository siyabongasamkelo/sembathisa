import {
  AboutHeader,
  AboutMedia,
} from "../aboutusComponents/AboutMobile.styled";
import { Paragraph, TitleAndParagraph } from "../layout/TitleAndParagraph";
import { ContainerMobile } from "../ui/Container";
import { MobileLayout } from "../ui/SectionLayout";
import { SmallMediumText, SmallText } from "../ui/typography/Text";
import family2 from "../../assets/img/family2.jpeg";
import { Button } from "../ui/Button";
import {
  JoinCommunityBlackSection,
  JoinCommunityMedia,
} from "./JoinNowMobile.styled";
import night from "../../assets/img/night.jpeg";

const JoinNowMobile = () => {
  return (
    <>
      <ContainerMobile>
        <MobileLayout>
          <AboutHeader>
            <SmallMediumText>Join The Community</SmallMediumText>
          </AboutHeader>
          <AboutMedia>
            <img src={family2} alt="group of people" />
          </AboutMedia>

          <TitleAndParagraph>
            <Paragraph>
              <SmallText>
                By joining us, you become part of a movement focused on
                empowerment, dignity, and sustainable impact. Your involvement
                helps create opportunities, restore hope, and strengthen
                communities across South Africa. Together, we build pathways
                that enable individuals to grow, contribute, and thrive.
              </SmallText>
            </Paragraph>
          </TitleAndParagraph>
        </MobileLayout>
      </ContainerMobile>
      <ContainerMobile style={{ backgroundColor: "black" }}>
        <MobileLayout style={{ margin: "0" }}>
          <JoinCommunityBlackSection>
            <TitleAndParagraph>
              <Paragraph>
                <SmallText>
                  By joining us, you become part of a movement focused on
                  empowerment, dignity, and sustainable impact. Your involvement
                  helps create opportunities, restore hope, and strengthen
                  communities across South Africa. Together, we build pathways
                  that enable individuals to grow, contribute, and thrive.
                </SmallText>
              </Paragraph>
            </TitleAndParagraph>
            <Button>Join Now</Button>
            <JoinCommunityMedia>
              <img src={night} alt="group of people" />
            </JoinCommunityMedia>
          </JoinCommunityBlackSection>
        </MobileLayout>
      </ContainerMobile>
    </>
  );
};

export default JoinNowMobile;
