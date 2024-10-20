import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBuyer } from "../../services/apiProducts";

export function useSellProduct() {
  const queryClient = useQueryClient();

  const { mutate: createNewBuyer, isLoading: isSelling } = useMutation({
    mutationFn: createBuyer,
    onSuccess: () => {
      toast.success("Sold item details uploaded successfully");
      queryClient.invalidateQueries(["products"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isSelling, createNewBuyer };
}

// api ma createBuyer createNewBuyer chai pathauni
