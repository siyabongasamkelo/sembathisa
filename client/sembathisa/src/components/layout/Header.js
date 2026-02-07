import {
  HeaderInner,
  Headerr,
  LogoArea,
  NavArea,
  ActionArea,
  UserProfile,
} from "./Header.styled";
import { LogoText } from "../ui/typography/Text";
// import { List } from "react-bootstrap-icons";
import { HashLink as Link } from "react-router-hash-link";
// import { Button } from "../ui/Button";

import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <Headerr>
      <HeaderInner>
        <LogoArea>
          <Link to="/">
            <LogoText>SEMBATHISA</LogoText>
          </Link>
        </LogoArea>

        <NavArea>
          <Link to="/">Home</Link>
          <Link to="/#about">About Us</Link>
          <Link to="/#ourservices">Our Services</Link>
          <Link to="/#joinnow">Join Now</Link>
          <Link to="/#contactus">Contact Us</Link>
        </NavArea>

        <ActionArea>
          {/* <List
            
          /> */}
          <MobileMenu />
          <UserProfile />
          {/* <Button>Help</Button> */}
        </ActionArea>
      </HeaderInner>
    </Headerr>
  );
};

export default Header;
