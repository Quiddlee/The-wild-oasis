import { isError, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deleteCabin as deleteCabinApi } from '../../services/apiCabins.ts';

function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success('Cabin successfully deleted');
      void queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (error) => {
      if (isError(error)) toast.error(error.message);
    },
  });

  return { isDeleting, deleteCabin };
}

export default useDeleteCabin;
