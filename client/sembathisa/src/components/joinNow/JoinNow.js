import { Container } from "../ui/Container";
import {
  JoinNowButton,
  JoinNowLayout,
  JoinCommunity,
  JoinCommunityImage,
  JoinCommunityText,
  JoinCommunityParagraph,
  JoinNowButtonParagraph,
  JoinNowButtonImage,
} from "./JoinNow.styled";
import family2 from "../../assets/img/family2.jpeg";
import night from "../../assets/img/night.jpeg";
import { SmallMediumText, SmallText } from "../ui/typography/Text";
import { Button } from "../ui/Button";

const JoinNow = () => {
  return (
    <Container id="joinnow">
      <JoinNowLayout>
        <JoinCommunity>
          <JoinCommunityImage>
            <img src={family2} alt="group of people" />
          </JoinCommunityImage>
          <JoinCommunityText>
            <SmallMediumText>Join The Community</SmallMediumText>
            <JoinCommunityParagraph>
              <SmallText>
                By joining us, you become part of a movement focused on
                empowerment, dignity, and sustainable impact. Your involvement
                helps create opportunities, restore hope, and strengthen
                communities across South Africa. Together, we build pathways
                that enable individuals to grow, contribute, and thrive.
              </SmallText>
            </JoinCommunityParagraph>
          </JoinCommunityText>
        </JoinCommunity>
        <JoinNowButton>
          <JoinNowButtonParagraph>
            <SmallText>
              If you are a young person seeking skills, support, or
              opportunities, our programs are designed to help you move forward
              with confidence.
            </SmallText>
            <Button>Join Now </Button>
          </JoinNowButtonParagraph>
          <JoinNowButtonImage>
            <img src={night} alt="group of people" />
          </JoinNowButtonImage>
        </JoinNowButton>
      </JoinNowLayout>
    </Container>
  );
};

export default JoinNow;
