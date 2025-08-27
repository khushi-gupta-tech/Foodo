import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-400">
      <h1 className="text-2xl font-bold text-red-600">Oops! error</h1>
      <h3 className="text-lg text-red-500">
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};
export default Error;
