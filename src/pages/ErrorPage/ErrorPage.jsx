import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center my-10 md:my-20 space-y-4">
      <h1 className="text-4xl font-semibold">Oops!!!..</h1>
      <img className="md:w-[500px] mx-auto" src="https://i.ibb.co/m979Y2T/7967799-3819627.jpg" alt="" />
      <p className="font-semibold">
        <i>404 {error.statusText || error.message}!!</i>
      </p>
      <div>
        <Link to="/"><button className="btn">Go Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;