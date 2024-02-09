import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
