import { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import useDeleteData from "@/hooks/useDeleteData";

function DeletePost({ packageInfo }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { mutate, isLoading } = useDeleteData({
    path: `/sms/package/delete/${userId}`,
    revalidate: "/sms/package/get",
  });

  const handleDelete = () => {
    const toastPackageDelete = toast.loading("Loading...");

    const values = {
      package_id: packageInfo.id,
    };

    mutate(values, {
      onSuccess: () => {
        toast.success(`Package ${packageInfo.name} Deleted`, {
          id: toastPackageDelete,
        });
      },
      onError: (error) => {
        toast.error(error.response.data.message, {
          id: toastPackageDelete,
        });
      },
      onSettled: () => {
        setShowDeleteModal(false);
      },
    });
  };

  return (
    <div className="">
      <button
        className="bg-red-600 text-xs text-white font-semibold px-2 py-1 rounded"
        onClick={() => setShowDeleteModal(true)}
      >
        Delete
      </button>

      {showDeleteModal && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 h-screen w-full overflow-y-hidden">
          <div className="h-screen flex justify-center items-center">
            <div className="mx-2 bg-white p-3 lg:p-8 rounded-lg">
              <div className="pb-4 border-b">
                <p className="text-center text-xl lg:text-2xl text-gray-800">
                  {`Are you sure you want to delete "${packageInfo.name}"?`}
                </p>
              </div>

              <p className="mt-3 text-red-600 text-center">
                {`Warning: All data from ${packageInfo.name} will be
                deleted. This action is irreversible.`}
              </p>

              {!isLoading ? (
                <div className="mt-5 lg:mt-8 flex justify-center gap-7 items-center">
                  <button
                    className="bg-blue-600  text-white font-semibold px-4 py-2 rounded"
                    onClick={() => setShowDeleteModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-600  text-white font-semibold px-4 py-2 rounded disabled:bg-opacity-50"
                    onClick={handleDelete}
                    disabled={isLoading}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <div className="mt-5 lg:mt-8 flex justify-center items-center">
                  <button className="bg-red-600/50  text-white font-semibold px-4 py-2 rounded cursor-not-allowed">
                    Deleting . . .
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeletePost;
