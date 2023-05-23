import { useSession } from "next-auth/react";
import useSWR from "swr";
import { API_URL } from "../config";
import { useEffect, useState } from "react";

function useGetData(route) {
  const { data: session, status } = useSession();

  const token = session?.user?.token;

  //   const fetcher = async (url) => {
  //     const res =
  //       session &&
  //       (await fetch(url, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }));

  //     const fetchedData = await res.json();

  //     console.log("fetched", fetchedData);
  //     return fetchedData;
  //   };

  //   const url = `${API_URL}${route}`;

  //   const {
  //     data: fetchedData,
  //     isLoading,
  //     // isValidating,
  //     error,
  //   } = useSWR(url, fetcher);

  //   return {
  //     fetchedData: fetchedData ? fetchedData : "",
  //     // isLoading: !error && !fetchedData,
  //     isLoading,
  //     isError: error,
  //     // isValidating,
  //   };

  // with useEffect
  const [fetchedData, setFetchedData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = `${API_URL}${route}`;

  useEffect(() => {
    const fetcher = async () => {
      // setIsLoading(true);
      !fetchedData && setIsLoading(true);

      try {
        const res = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        setFetchedData(data);
        setIsLoading(false);
        console.log("success", data);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
        setIsError(true);
      }

      // const res = await fetch(url, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      // });

      // const data = await res.json();

      // if (res.ok) {
      //   setFetchedData(data);
      //   setIsLoading(false);
      //   console.log("success", data);
      // } else {
      //   console.log("error", data);
      //   setIsLoading(false);
      //   setIsError(true);
      // }
    };

    // session && !fetchedData && fetcher();
    session && fetcher();
  }, [session]);

  return { fetchedData, isLoading, isError };
}

export default useGetData;
