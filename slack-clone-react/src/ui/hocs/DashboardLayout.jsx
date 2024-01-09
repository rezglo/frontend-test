import SideNav from "../components/navigation/sidenav/SideNav";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex flex-col justify-between w-full p-3 pb-1 md:p-6 md:pb-2">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
