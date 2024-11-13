import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSellPaidStatus } from "../../services/apiProducts";

export function useUpdateSellPaid() {
  const queryClient = useQueryClient();

  const { mutate: updateSell, isLoading: isUpdatingSell } = useMutation({
    mutationFn: updateSellPaidStatus,
    onSuccess: () => {
      toast.success("Paid status changed successfully");
      queryClient.invalidateQueries(["sells"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateSell, isUpdatingSell };
}
