import CuraLogo from "../icons/Logo";
import React from "react";
import Container from "../UI/Container";
import { GrLanguage } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../UI/Button";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <Container>
        <div className="header">
          <div className="header_block-left">
            <div className="header__logo">
              <CuraLogo />
            </div>
          </div>
          <div className="header_block-right">
            <Button
              width={"70px"}
              height={"35px"}
              bgColor={"inherit"}
              color={"#505050"}
              border={true}
            >
              Login
            </Button>
            <Button
              width={"70px"}
              height={"35px"}
              bgColor={"#3492db"}
              color={"#fff"}
            >
              Sign Up
            </Button>
            <span>
              <GrLanguage width={"1.4em"} /> &nbsp; English
            </span>
            <RxHamburgerMenu width={"1.4em"} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
