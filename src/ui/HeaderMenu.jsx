import React from "react";
import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

const HeaderMenu = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <BiUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeader>
  );
};

export default HeaderMenu;
