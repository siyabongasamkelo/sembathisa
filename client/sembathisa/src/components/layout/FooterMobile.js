import styled from "styled-components";
import { ContainerMobile } from "../ui/Container";
import { MobileLayout } from "../ui/SectionLayout";
import { Title, TitleAndParagraph } from "./TitleAndParagraph";
import { SmallMediumText, SmallText } from "../ui/typography/Text";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";

export const MobileFooterContent = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spacing.lg};
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: ${(props) => props.theme.colors.buttonText};
    text-decoration: none;
    font-size: 12px;
    margin-top: ${(props) => props.theme.spacing.md};
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spacing.md};
  margin-left: -30px;
  svg {
    margin-left: 30px;
    fill: ${(props) => props.theme.colors.buttonText};
  }
`;

export const CopyRights = styled.div`
  p {
    margin-top: ${(props) => props.theme.spacing.lg};
    color: ${(props) => props.theme.colors.buttonText};
  }
`;

const FooterMobile = () => {
  return (
    <ContainerMobile style={{ backgroundColor: "black" }}>
      <MobileLayout>
        <TitleAndParagraph>
          <Title>
            <SmallMediumText>Join Us Now</SmallMediumText>
          </Title>
        </TitleAndParagraph>
        <Button>Join Us</Button>
        <MobileFooterContent>
          <Links>
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Join Us</Link>
            <Link>FAQ</Link>
          </Links>
          <Links style={{ marginLeft: "80px" }}>
            <Link>Login</Link>
            <Link>Register</Link>
            <Link>Contact Us</Link>
          </Links>
        </MobileFooterContent>
        <SocialMediaIcons>
          <Facebook />
          <Whatsapp />
          <Instagram />
          <Twitter />
        </SocialMediaIcons>
        <CopyRights>
          <SmallText>Sembathisa Ubukhosi 2026 copyrights</SmallText>
        </CopyRights>
      </MobileLayout>
    </ContainerMobile>
  );
};

export default FooterMobile;
