import { useRouterError } from "react-router-dom";

const Error = () => {
  const error = useRouterError();
  console.log(error);
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <h2>Please try again later.</h2>
      <h3>{error.status}:{error.statusText} </h3>
    </div>
  )
}

export default Error;
