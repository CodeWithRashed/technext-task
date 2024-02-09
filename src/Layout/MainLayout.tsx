import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-2 md:p-3 lg:p-16">
      <Outlet />
    </div>
  );
};

export default MainLayout;
