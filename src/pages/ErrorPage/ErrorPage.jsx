import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center my-10 md:my-40 lg:my-96 space-y-4">
      <h1 className="text-4xl font-semibold">Oops!!!..</h1>
      <img src="https://i.ibb.co/m979Y2T/7967799-3819627.jpg" alt="" />
      <p className="font-semibold">
        <i>404 {error.statusText || error.message}!!</i>
      </p>
    </div>
  );
};

export default ErrorPage;