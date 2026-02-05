import Header from "../layout/Header";
import { ContainerMobile } from "../ui/Container";
import { HeroText, SmallText } from "../ui/typography/Text";
import {
  ColumnPhotos,
  HeroButton,
  HeroMedia,
  HeroParagraph,
  HeroTextLayout,
  SinglePhoto,
} from "./HomeMobile.styled";
import family from "../../assets/img/family.jpeg";
import garden from "../../assets/img/garden.jpeg";
import learning from "../../assets/img/learning.jpeg";
import { Button } from "../ui/Button";
import { MobileLayout } from "../ui/SectionLayout";

const HomeMobile = () => {
  return (
    <ContainerMobile>
      <MobileLayout className="homelayout" style={{ margin: "0" }}>
        <Header />
        <HeroTextLayout>
          <HeroText>SEMBATHISA</HeroText>
          <HeroText>UBUKHOSI</HeroText>
          <HeroText>ORGANISATION</HeroText>
        </HeroTextLayout>
        <HeroMedia>
          <ColumnPhotos>
            <img src={family} alt="group of people" />
            <img src={garden} alt="group of people" />
          </ColumnPhotos>
          <SinglePhoto>
            <img src={learning} alt="group of people" />
          </SinglePhoto>
        </HeroMedia>
        <HeroParagraph>
          <SmallText>
            Founded with a vison to empower and uplift the youth of South
            Africa, the Sembathisa Ubukhosi Foundation is a poineering non -
            profit organization
          </SmallText>
        </HeroParagraph>
        <HeroButton>
          <Button>Join Us</Button>
        </HeroButton>
      </MobileLayout>
    </ContainerMobile>
  );
};

export default HomeMobile;
