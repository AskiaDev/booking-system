import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { IoIosLogOut } from "react-icons/io";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

const Logout = () => {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <IoIosLogOut /> : <SpinnerMini />}
    </ButtonIcon>
  );
};

export default Logout;
