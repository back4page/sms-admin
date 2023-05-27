import axios from "axios";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "@/config";

function useDeleteData({ path, revalidate }) {
  const { data: session } = useSession();

  const token = session?.user?.token;
  // const id = session?.user?.id;

  const url = `${API_URL}${path}`;

  const queryClient = useQueryClient();

  const deleteFn = async (values) => {
    // const config = {
    //   headers: {
    // "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
    //   },
    // };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    return axios
      .delete(url, { headers: headers, data: values })
      .then(({ data }) => data);
  };

  return useMutation({
    mutationFn: deleteFn,
    onSuccess: (data) => {
      queryClient.invalidateQueries([revalidate]);
      console.log("delete data:", data);
    },
    onError: (error) => {
      console.log("error:", error.response.data);
    },
  });
}

export default useDeleteData;
