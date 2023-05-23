function FormWrapper({ children }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-2 lg:p-8">
      <div className="">{children}</div>
    </div>
  );
}

export default FormWrapper;
