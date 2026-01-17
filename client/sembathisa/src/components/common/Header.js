import React from "react";
import { HeaderContainer } from "./Header.styled";
import { LogoText } from "./Text";
import { Link } from "react-router-dom";
import { QuestionCircle } from "react-bootstrap-icons";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <LogoText>Sembathisa</LogoText>
      </div>
      <nav>
        <Link>Home</Link>
        <Link>About Us</Link>
        <Link>Our Services</Link>
        <Link>Join Now</Link>
        <Link>Contact Us</Link>
      </nav>
      <div className="profile-container">
        <div className="profile"></div>
        <button>
          Help <QuestionCircle />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
