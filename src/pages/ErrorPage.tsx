import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box className="errorBox">
        <Heading>Oops!</Heading>
        {isRouteErrorResponse(error) ? (
          <div>
            <p>{`This page doesn't exist: ${error.status} ${error.statusText}`}</p>
          </div>
        ) : (
          <p>An Unexpected error occured...</p>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
