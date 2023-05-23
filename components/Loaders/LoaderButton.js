import { RotatingLines } from "react-loader-spinner";

export const LoaderButton = ({ width }) => {
  return (
    <div className="">
      <RotatingLines
        strokeColor="white"
        strokeWidth="3"
        animationDuration="0.4"
        width={width}
        visible={true}
      />
    </div>
  );
};
