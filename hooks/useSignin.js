// import { signIn } from "next-auth/react";
// import { useRouter } from "next/router";
// import { toast } from "react-hot-toast";

// function useSignin() {
//   const router = useRouter();

//   const signin = async (values) => {
//     const toastSignin = toast.loading("Loading...");

//     const response = await signIn("credentials", {
//       ...values,
//       // callbackUrl: `${window.location.origin}`,
//       redirect: false,
//     });

//     if (response?.ok) {
//       console.log(response);
//       toast.success("Signin Successfull", {
//         id: toastSignin,
//       });
//       router.push("/");
//       // router.reload();
//     }

//     if (response?.error) {
//       console.log("errorred", response);
//       toast.error(`${response?.error}`, {
//         id: toastSignin,
//       });
//     }
//   };

//   return { signin };
// }

// export default useSignin;

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

function useSignin() {
  const router = useRouter();

  const signin = async (values) => {
    const toastSignin = toast.loading("Loading...");

    try {
      const response = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (response?.ok) {
        console.log(response);
        toast.success("Signin Successful", {
          id: toastSignin,
        });
        router.push("/");
      } else if (response?.error) {
        console.log("error response", response);
        toast.error(`${response?.error}`, {
          id: toastSignin,
        });
      }
    } catch (error) {
      console.log("error auth", error);
      toast.error("An error occurred during signin", {
        id: toastSignin,
      });
    }
  };

  return { signin };
}

export default useSignin;
