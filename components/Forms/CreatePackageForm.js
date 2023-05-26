import { Form, Formik } from "formik";
// import usePostData from "../../hooks/usePostData";

import { useRouter } from "next/router";
import { TextField } from "../InputFields";
import usePostData from "@/hooks/usePostData";
import { toast } from "react-hot-toast";

function CreatePackageForm({ id }) {
  // const { data: session } = useSession();
  // const { id, username, admin, adminId } = session ? session.user : "";

  // console.log("form", data);

  // const id = data?.user?.id;

  // const adminId = data?.user?.adminId;

  const router = useRouter();

  // const { postData } = usePostData("/admin/add");

  const initialvalues = {
    name: "",
    amount: "",
    no_of_sms: "",
  };

  const { mutate, isLoading, isError, error, isSuccess } = usePostData({
    path: `/sms/package/add/${id}`,
    revalidate: "/sms/package/get",
    // onSuccess,
    // onError,
  });

  const handleSubmit = (values, formik) => {
    // console.log("values", values);
    const toastFormSubmit = toast.loading("Loading...");

    mutate(values, {
      onSuccess: () => {
        formik.resetForm();
        router.push("/database/all-packages");
        toast.success("Created Successfull", {
          id: toastFormSubmit,
        });
      },
      onError: (error) => {
        const errorMessage = error.response.data.message;

        toast.error(errorMessage, {
          id: toastFormSubmit,
        });
      },
    });
  };

  return (
    <div className="mt-7">
      <Formik
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        // enableReinitialize
      >
        {(formik) => (
          <Form>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5 md:gap-y-7">
              <TextField label="Name *" name="name" type="text" required />
              <TextField label="Amount *" name="amount" type="text" required />
              <TextField
                label="Number of SMS *"
                name="no_of_sms"
                type="text"
                required
              />
            </div>
            <div className="mt-10 flex justify-end">
              <button
                type="submit"
                className={`px-6 py-3 text-white text-xs tracking-widest font-bold rounded-lg bg-custom-blue5 hover:bg-custom-blue active:scale-95 transition duration-300 uppercase disabled:bg-opacity-50 disabled:cursor-not-allowed`}
                disabled={isLoading}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreatePackageForm;
