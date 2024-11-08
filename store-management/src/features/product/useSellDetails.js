import { useQuery } from "@tanstack/react-query";
import { sellsDetails } from "../../services/apiProducts";

export function useSellDetails() {
  const {
    isLoading,
    data: { sells: sells } = {},
    error,
  } = useQuery({
    queryKey: ["sells"],
    queryFn: sellsDetails,
  });

  return { isLoading, sells, error };
}
