import { connect } from "react-redux";
import DashboardLayout from "../../ui/hocs/DashboardLayout";
import RootLayout from "../../ui/hocs/RootLayout";
import MessagesLayout from "../../ui/hocs/MessagesLayout";

const HomePage = () => {
  return (
    <RootLayout>
      <DashboardLayout>
        <MessagesLayout />
      </DashboardLayout>
    </RootLayout>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(HomePage);
