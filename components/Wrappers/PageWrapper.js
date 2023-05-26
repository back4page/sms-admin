import { LoaderContent } from "../Loaders/LoaderContent";

function PageWrapper({ icon, title, isLoading, children }) {
  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <span className="h-7 w-7 text-custom-blue2">{icon}</span>
        <h1 className="text-2xl font-bold text-custom-gray2">{title}</h1>
      </div>

      {isLoading && <LoaderContent />}

      <div className="mt-7">{children}</div>
    </div>
  );
}

export default PageWrapper;
