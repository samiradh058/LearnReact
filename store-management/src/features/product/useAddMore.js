import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addProduct } from "../../services/apiProducts";

export function useAddMore() {
  const queryClient = useQueryClient();

  const { mutate: addMore, isLoading: isAdding } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      toast.success("More quantity added successfully");
      queryClient.invalidateQueries(["products"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addMore };
}
