import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
        {/* NAVBAR WITH SEARCH */}
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout
