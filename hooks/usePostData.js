//with tanstack query
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "@/config";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";

function usePostData({ path, revalidate }) {
  const { data: session } = useSession();

  const token = session?.user?.token;

  const url = `${API_URL}${path}`;

  const queryClient = useQueryClient();

  //with fetch
  // const postFn = async (values) => {
  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       // Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(values),
  //   });

  //   const data = await res.json();

  //   if (res.ok) {
  //     return data;
  //   } else {
  //     // console.log("data error", data);
  //     throw new Error(data.error);
  //   }
  // };

  //with axios
  const postFn = async (values) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    return axios.post(url, values, config).then(({ data }) => data);
  };

  return useMutation({
    mutationFn: postFn,
    onSuccess: (data) => {
      queryClient.invalidateQueries([revalidate]);
      console.log(data);
      // toast.success("Submitted Succcessfully", {
      //   id: toastFormSubmit,
      // });
    },
    onError: (error) => {
      console.log("error is", error.response.data);
      // const errorMessage = error.response.data.message;
      // toast.error(errorMessage, {
      //   id: toastFormSubmit,
      // });
    },
  });
}

export default usePostData;
