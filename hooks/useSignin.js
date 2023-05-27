// import { signIn } from "next-auth/react";
// import { useRouter } from "next/router";
// import { toast } from "react-hot-toast";

// function useSignin() {
//   const router = useRouter();

//   const signin = async (values) => {
//     const toastSignin = toast.loading("Loading...");

//     const response = await signIn("credentials", {
//       ...values,
//       // callbackUrl: `${window.location.origin}/dashboard`,
//       redirect: false,
//     });

//     if (response?.ok) {
//       console.log(response);
//       toast.success("Signin Successfull", {
//         id: toastSignin,
//       });
//       router.push("/");
//     }

//     if (response?.error) {
//       console.log(response);
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

    const response = await signIn("credentials", {
      ...values,
      // callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (response?.ok) {
      console.log(response);
      toast.success("Signin Successfull", {
        id: toastSignin,
      });
      router.push("/");
      // router.reload();
    }

    if (response?.error) {
      console.log("errorred", response);
      toast.error(`${response?.error}`, {
        id: toastSignin,
      });
    }
  };

  return { signin };
}

export default useSignin;
