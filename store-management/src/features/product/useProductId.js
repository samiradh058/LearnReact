import { useQuery } from "@tanstack/react-query";
import { getProductsFromId } from "../../services/apiProducts";

export function useProductId(productId) {
  productId = parseInt(productId);
  const {
    isLoading: isPending,
    data: product,
    error,
  } = useQuery({
    queryKey: ["productId", productId],
    queryFn: () => getProductsFromId(productId),
  });

  return { isPending, product, error };
}
