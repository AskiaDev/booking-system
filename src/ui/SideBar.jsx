import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useLocation } from "react-router-dom";
import Uploader from "../data/Uploader";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  color: #000;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const SideBar = () => {
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const isUploader = searchParams.get("uploader") === "true"

  return (
    <StyledSideBar>
      <Logo />
      <MainNav />
      {isUploader && <Uploader />}
    </StyledSideBar>
  );
};

export default SideBar;
