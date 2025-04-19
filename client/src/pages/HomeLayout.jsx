import { Outlet } from "react-router-dom";
//Route Component
const HomeLayout = () => {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default HomeLayout;
