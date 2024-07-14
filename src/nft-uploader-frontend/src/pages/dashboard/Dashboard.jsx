import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div class="flex w-full  h-[100dvh]">
      <Sidebar />
      <div className="w-full overflow-scroll " id="detail">
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
