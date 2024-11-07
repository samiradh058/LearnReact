import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
// import { PAGE_SIZE } from "../../../constants";

export function useProducts() {
  // const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  // Filter
  let filter;
  const filterValue = searchParams.get("status");
  if (!filterValue || filterValue === "all") {
    filter = null;
  }
  if (filterValue === "products-remaining") {
    filter = { field: "quantity", operator: "gt", value: 0 };
  }
  if (filterValue === "products-sold") {
    filter = { field: "quantity", operator: "eq", value: 0 };
  }

  // Pagination
  // const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isPending,
    data: { data: products } = {},
    error,
  } = useQuery({
    queryKey: ["products", filter],
    queryFn: () => getProducts({ filter }),
  });

  // PreFetching
  //   const pageCount = Math.ceil(count / PAGE_SIZE);
  //   if (page < pageCount) {
  //     queryClient.prefetchQuery({
  //       queryKey: ["products", page + 1],
  //       queryFn: () => getProducts({ page: page + 1 }),
  //     });
  //   }
  //   if (page > pageCount) {
  //     queryClient.prefetchQuery({
  //       queryKey: ["products", page - 1],
  //       queryFn: () => getProducts({ page: page - 1 }),
  //     });
  //   }

  return { isPending, products, error };
}
