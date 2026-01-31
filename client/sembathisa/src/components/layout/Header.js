import React from "react";
import {
  HeaderInner,
  Headerr,
  LogoArea,
  NavArea,
  ActionArea,
  UserProfile,
  HelpButton,
} from "./Header.styled";
import { LogoText } from "../ui/typography/Text";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
// import { QuestionCircle } from "react-bootstrap-icons";

const Header = () => {
  return (
    <Headerr>
      <HeaderInner>
        <LogoArea>
          <LogoText>SEMBATHISA</LogoText>
        </LogoArea>

        <NavArea>
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Our Services</Link>
          <Link>Join Now</Link>
          <Link>Contact Us</Link>
        </NavArea>

        <ActionArea>
          <List />
          <UserProfile />
          <HelpButton>{/* help <QuestionCircle /> */}</HelpButton>
        </ActionArea>
      </HeaderInner>
    </Headerr>
  );
};

export default Header;
