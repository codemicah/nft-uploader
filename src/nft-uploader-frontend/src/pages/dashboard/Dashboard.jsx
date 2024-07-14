import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import { useUser } from "../../hooks/useUser";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="flex w-full  h-[100dvh]">
      <Sidebar />
      <div>
        <nav>{user?.email}</nav>
        <div className="w-full overflow-scroll " id="detail">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
