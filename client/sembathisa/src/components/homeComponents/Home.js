import React from "react";
import Header from "../layout/Header";
import { HeroText, MediumText, SmallText } from "../ui/typography/Text";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import {
  Benefits,
  Hero,
  HeroContent,
  HeroDecorationLeft,
  HeroDecorationRight,
  HeroMedia,
  HeroParagraph,
  HeroTextContent,
  HomeLayout,
  Icons,
  IconsAndBenefits,
} from "./Home.styled";
import family from "../../assets/img/family.jpeg";
import sewing from "../../assets/img/sewing.jpeg";
import learning from "../../assets/img/learning.jpeg";
import {
  CheckCircleFill,
  Facebook,
  Instagram,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";

const Home = () => {
  return (
    <Container>
      <HomeLayout>
        <Header />
        <Hero>
          <HeroContent>
            <HeroDecorationLeft></HeroDecorationLeft>
            <HeroTextContent>
              <MediumText>SEMBATHISA</MediumText>
              <HeroText>UBUKHOSI FOUNDATION</HeroText>
              <HeroParagraph>
                <SmallText>
                  Founded with a vison to empower and uplift the youth of South
                  Africa, the Sembathisa Ubukhosi Foundation is a poineering non
                  - profit organization
                </SmallText>
                <Button>Join Us</Button>
              </HeroParagraph>
            </HeroTextContent>
            <HeroDecorationRight></HeroDecorationRight>
          </HeroContent>
          <HeroMedia>
            <img src={family} alt="peoples" />
            <img src={sewing} alt="peoples" />
            <img src={learning} alt="peoples" />
          </HeroMedia>
          <IconsAndBenefits>
            <Icons>
              <Facebook />
              <Twitter />
              <Whatsapp />
              <Instagram />
            </Icons>

            <Benefits>
              <div>
                <CheckCircleFill /> <SmallText>Skill Development</SmallText>
              </div>
              <div>
                <CheckCircleFill /> <SmallText>Financial Assistance</SmallText>
              </div>
              <div>
                <CheckCircleFill />
                <SmallText>Community Reintegration</SmallText>
              </div>
            </Benefits>
          </IconsAndBenefits>
        </Hero>
      </HomeLayout>
    </Container>
  );
};

export default Home;
