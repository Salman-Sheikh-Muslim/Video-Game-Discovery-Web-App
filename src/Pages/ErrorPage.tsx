import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/navbar";

const ErrorPage = () => {
  const error = useRouteError();
  const check = isRouteErrorResponse(error);
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {check ? "Page does not exist" : "Unexpected Error has occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
