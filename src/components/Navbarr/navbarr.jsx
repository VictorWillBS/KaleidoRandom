import styled from "styled-components";
import arrow from "../../assets/arrow.svg";
import logo from "../../assets/logo.png";
import minilogo from "../../assets/miniLogo.png";
import inlineLogo from "../../assets/kaleidoscope-inlines.png";
import outlineLogo from "../../assets/kaleidoscope-outlines.png";
import { useState } from "react";

export function Navbarr({ historyActivity, setHistoryActivity }) {
  const [active, setActive] = useState("off");
  function toggleButton() {
    if (active === "off") {
      setActive("on");
    } else {
      setActive("off");
    }
  }
  function togglehistory() {
    if (historyActivity === "off") {
      setHistoryActivity("on");
    } else {
      setHistoryActivity("off");
    }
  }
  return (
    <>
      <NavContainer>
        <div> </div>
        <OutlineLogo src={outlineLogo} />
        <InlineLogo src={inlineLogo} />
        <Logo src={logo} />
        <MobileLogo src={minilogo} />
        <ArrowButton
          onClick={() => {
            toggleButton();
          }}
        >
          <img className={active} src={arrow} />
          <Menu className={active}>
            <p onClick={togglehistory}>Histórico</p>
          </Menu>
        </ArrowButton>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  background-color: #212121;
  position: relative;
  padding: 10px 40px;
  top: 0;
  left: 0;
`;

const OutlineLogo = styled.img`
  position: absolute;
  top: 22%;
  left: 0;
`;

const InlineLogo = styled.img`
  position: absolute;
  margin-left: -45px;
  left: 50%;
  top: 0;
`;

const Logo = styled.img`
  display: initial;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const MobileLogo = styled.img`
  display: none;
  @media screen and (max-width: 450px) {
    display: initial;
  }
`;

const ArrowButton = styled.button`
  position: relative;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  img {
    margin-bottom: 30px;
  }
  img.on {
    transform: rotate(180deg);
  }
`;

const Menu = styled.section`
  width: 150px;
  height: 80px;
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #212121;
  border-radius: 0 0 10px 10px;
  position: absolute;
  bottom: -90px;
  right: -40px;
  p {
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
  &&.on {
    display: flex;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;
