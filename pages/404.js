import { useRouter } from "next/router";

function NotFoundPage() {
  const router = useRouter();

  console.log("pathname", router.pathname);
  return (
    <div className="flex justify-center my-[200px]">
      <h1 className="text-3xl font-bold text-red-700">Page Not Found</h1>
    </div>
  );
}

export default NotFoundPage;
