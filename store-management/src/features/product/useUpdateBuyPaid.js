import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBuyPaidStatus } from "../../services/apiProducts";

export function useUpdateBuyPaid() {
  const queryClient = useQueryClient();

  const { mutate: updatePaid, isLoading: updatingPaid } = useMutation({
    mutationFn: updateBuyPaidStatus,
    onSuccess: () => {
      toast.success("Paid status changed successfully");
      queryClient.invalidateQueries(["productId"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updatePaid, updatingPaid };
}
