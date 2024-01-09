import { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "../components/navigation/Navbar ";
import DashboardLayout from "./DashboardLayout";
import MessagesLayout from "./MessagesLayout";
import { check_authenticated, load_user } from "../../redux/actions/auth";
import { Navigate } from "react-router";

const RootLayout = ({ children, isAuthenticated, user }) => {
  useEffect(() => {
    check_authenticated();
    load_user();
  }, []);

  if (!isAuthenticated) return <Navigate to="/login" />;

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

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
});

export default connect(mapStateToProps, {
  check_authenticated,
  load_user,
})(RootLayout);
