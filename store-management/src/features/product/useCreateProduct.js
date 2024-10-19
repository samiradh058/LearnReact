import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate: createNewProduct, isLoading: isCreating } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success("New product added successfully!");
      queryClient.invalidateQueries(["products"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createNewProduct };
}
