import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import { Image, Box, Button } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Layout = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
        <Button onClick={scrollToTop}>
          <Box
            position="fixed"
            bottom="20px"
            right={["16px", "84px", "84px", "84px", "120px"]}
            zIndex={2}
          >
            <Image as={IoIosArrowDropupCircle} w="60px" h="60px" />
          </Box>
        </Button>
      </Box>
    </>
  );
};

export default Layout;
