import Navbar from "../components/navigation/Navbar ";
import DashboardLayout from "./DashboardLayout";
import MessagesLayout from "./MessagesLayout";

const RootLayout = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Navbar />
      <DashboardLayout>
        <MessagesLayout />
      </DashboardLayout>
      {children}
    </main>
  );
};

export default RootLayout;
