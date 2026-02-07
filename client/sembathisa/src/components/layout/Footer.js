import styled from "styled-components";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { HashLink as Link } from "react-router-hash-link";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";
import { SmallText } from "../ui/typography/Text";

export const FooterLayout = styled.div`
  width: 80%;
  max-width: 1200px;
  background-color: black;
  margin-top: ${(props) => props.theme.spacing.xxl};
`;

export const FooterContent = styled.div`
  width: 100%;
`;

export const LinksAndJoinButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    margin: ${(props) => props.theme.spacing.lg};
  }
`;

export const Links = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    margin-top: ${(props) => props.theme.spacing.lg};
    margin-left: 16px;

    a {
      color: ${(props) => props.theme.colors.buttonText};
      text-decoration: none;
      font-size: ${(props) => props.theme.fontSizes.sm.smallMedium};
      margin-top: ${(props) => props.theme.spacing.md};

      &:hover {
        transition: 0.5s ease-in-out;
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  .links {
    margin-left: 62px;
    @media (min-width: 1200px) {
      margin-left: ${(props) => props.theme.spacing.xl};
    }
  }

  @media (min-width: 1200px) {
    margin-left: ${(props) => props.theme.spacing.lg};
  }
`;

export const SocialMediaIcons = styled.div`
  svg {
    fill: ${(props) => props.theme.colors.buttonText};
    margin-left: 15px;
    margin-top: ${(props) => props.theme.spacing.lg};
    &:hover {
      transition: 0.5s ease-in-out;
      fill: ${(props) => props.theme.colors.primary};
      cursor: pointer;
    }
  }
  @media (min-width: 1200px) {
    margin-left: ${(props) => props.theme.spacing.lg};
  }
`;

export const Copyrights = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  p {
    color: ${(props) => props.theme.colors.buttonText};
    margin-top: ${(props) => props.theme.spacing.lg};
    margin-bottom: ${(props) => props.theme.spacing.lg};
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterLayout>
        <FooterContent>
          <LinksAndJoinButton>
            <Links>
              <div>
                <Link to="/">Home</Link>
                <Link to="/#about">About Us</Link>
                <Link to="/#ourservices">Our Services</Link>
                <Link to="/#joinnow">Join Now</Link>
              </div>
              <div className="links">
                <Link to="/#contactus">Contact Us</Link>
                <Link>Login</Link>
                <Link>Register</Link>
                <Link to="/#faq">FAQ</Link>
              </div>
            </Links>

            <Button>Join Now</Button>
          </LinksAndJoinButton>
          <SocialMediaIcons>
            <Whatsapp />
            <Facebook />
            <Twitter />
            <Instagram />
          </SocialMediaIcons>
          <Copyrights>
            <SmallText>Sembathisa Ubukhosi 2026 copyrights</SmallText>
          </Copyrights>
        </FooterContent>
      </FooterLayout>
    </Container>
  );
};

export default Footer;
