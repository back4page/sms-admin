import { toast } from "react-toastify";
import { API_URL } from "../config";

function usePostData(route) {
  const url = `${API_URL}${route}`;

  const postData = async (values, formik) => {
    // console.log(values);
    // return;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Message sent successfully!");
      // console.log("success", data);
      formik.resetForm();
    } else {
      console.log("error", data);
      toast.error("Something went wrong!");
    }
  };

  return { postData };
}

export default usePostData;
