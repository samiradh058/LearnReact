import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../../constants";

export function useProducts() {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isPending,
    data: { data: products, count } = {},
    error,
  } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts({ page }),
  });

  // PreFetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["products", page + 1],
      queryFn: () => getProducts({ page: page + 1 }),
    });
  }
  if (page > pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["products", page - 1],
      queryFn: () => getProducts({ page: page - 1 }),
    });
  }
  return { isPending, products, error, count };
}
