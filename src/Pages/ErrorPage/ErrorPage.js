import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <p className="text-center text-6xl">{error.message}</p>
    </div>
  );
};

export default ErrorPage;
