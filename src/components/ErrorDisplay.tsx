import { FC, Dispatch, SetStateAction } from "react";

interface ErrorDisplayProps {
  setErr: Dispatch<SetStateAction<boolean>>;
}

const ErrorDisplay: FC<ErrorDisplayProps> = ({ setErr }) => {
  const handleOkSubmit = () => setErr(false);

  return (
    <>
      <div>Please try again .</div>
      <button title="OK" onClick={handleOkSubmit}>
        OK
      </button>
    </>
  );
};

export default ErrorDisplay;
