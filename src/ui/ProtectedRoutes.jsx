import { useUser } from "../features/authentication/useUser";
import styled from "styled-components";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. if the user is not authenticated, redirect to login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 3. while loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. if the user is authenticated, show the children
  if (isAuthenticated) return children;
};

export default ProtectedRoutes;
