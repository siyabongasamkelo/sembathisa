import React from "react";
import {
  HeaderInner,
  Headerr,
  LogoArea,
  NavArea,
  ActionArea,
  UserProfile,
} from "./Header.styled";
import { LogoText } from "../ui/typography/Text";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
// import { QuestionCircle } from "react-bootstrap-icons";
import { Button } from "../ui/Button";

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
          <Button>
            Help
            {/* <QuestionCircle /> */}
          </Button>
        </ActionArea>
      </HeaderInner>
    </Headerr>
  );
};

export default Header;
