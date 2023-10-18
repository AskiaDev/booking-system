import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as logInApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => logInApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user.user);
      toast.success("Login successful");
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.error(error);
      toast.error("Incorrect email or password");
    },
  });

  return { isLoading, login };
};
