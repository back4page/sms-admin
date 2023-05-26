//with tanstack-query
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "@/config";

function useGetData({ path }) {
  const { data: session } = useSession();

  const url = `${API_URL}${path}`;

  const token = session?.user?.token;

  const fetcher = async () => {
    // const res = await fetch(url, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     // Authorization: `Bearer ${token}`,
    //   },
    // });
    // const fetchedData = await res.json();

    // console.log("fetched", fetchedData);
    // return fetchedData;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    return axios.get(url, config).then(({ data }) => data);
  };

  return useQuery({
    queryKey: [path],
    queryFn: fetcher,
    enabled: !!session,
    retry: false,
  });
}

export default useGetData;
