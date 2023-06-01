import { Formik, Form } from "formik";
import HeadSection from "@/components/Layout/HeadSection";
import { PasswordField, TextField } from "@/components/InputFields";
import useSignin from "@/hooks/useSignin";

const pageDetails = {
  title: "Admin sign in page",
  description: "sms",
  keywords: "sms",
};

function AdminSigninPage() {
  const initialvalues = {
    email: "",
    password: "",
  };

  const { signin } = useSignin();

  const handleSubmit = async (values) => {
    await signin(values);
    // console.log(values);
  };

  return (
    <>
      <HeadSection pageDetails={pageDetails} />
      <div className="flex justify-center items-center h-screen bg-gray-200">
        {/* {loading && <FullPageLoader />} */}

        <div className="bg-gray-50 px-5 lg:px-10 py-14 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-center text-custom-blue">
            Sign in as Admin
          </h1>
          <div className="mt-8">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="gap-y-5 md:gap-y-7">
                    <div className="min-w-[300px] lg:min-w-[350px] space-y-4">
                      <TextField label="Email *" name="email" type="text" />

                      <PasswordField label="Password *" name="password" />
                    </div>

                    <button
                      type="submit"
                      className="relative mt-8 w-full py-3 bg-custom-blue2 rounded-lg text-white font-bold active:scale-95 disabled:active:scale-100 transition duration-200 disabled:opacity-80 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {/* {isSubmitting && (
                        <span className="absolute flex left-[30%] items-center inset-y-0">
                          <Loader2 width="30" />
                        </span>
                      )} */}
                      <span>Sign In</span>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSigninPage;
