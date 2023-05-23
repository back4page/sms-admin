import React from "react";

function ContentWrapper({ children }) {
  return (
    <div className="bg-white rounded-xl shadow-lg px-4 py-8 lg:px-8">
      <div className="">{children}</div>
    </div>
  );
}

export default ContentWrapper;
