import { Outlet } from "react-router-dom";
import OrderItem from "./OrderItem";
import SideMenu from "./SideMenu";

function Dashboard() {
  return (
    <div className="flex">
      <SideMenu />
      <Outlet></Outlet>
    </div>
  );
}
export default Dashboard;
