import { Form, Formik } from "formik";
// import usePostData from "../../hooks/usePostData";

import { useRouter } from "next/router";
import { TextField } from "../InputFields";

function UserForm({ id }) {
  // const { data: session } = useSession();
  // const { id, username, admin, adminId } = session ? session.user : "";

  // console.log("form", data);

  // const id = data?.user?.id;

  // const adminId = data?.user?.adminId;

  const router = useRouter();

  // const { postData } = usePostData("/admin/add");

  const initialvalues = {
    company_name: "",
    person_name: "",
    mobile: "",
    dist: "",
  };

  const handleSubmit = (values, formik) => {
    console.log("values", values);
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
            {/* <h1 className="text-lg font-semibold ">Add New User</h1> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5 md:gap-y-7">
              <TextField
                label="Company Name *"
                name="company_name"
                type="text"
                required
              />
              <TextField
                label="Person Name *"
                name="person_name"
                type="text"
                required
              />
              <TextField label="Mobile *" name="mobile" type="text" required />
              <TextField label="Dist *" name="dist" type="text" required />
            </div>
            <div className="mt-10 flex justify-end">
              <button
                type="submit"
                className=" px-6 py-3 text-white text-xs tracking-widest font-bold rounded-lg bg-custom-blue5 hover:bg-custom-blue active:scale-95 transition duration-300 uppercase"
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

export default UserForm;
