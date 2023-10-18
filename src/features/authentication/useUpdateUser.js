import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserData,
    onSuccess: ({ user }) => {
      toast.success("User updated successfully");
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isUpdating, updateUser };
};
