import { connect } from "react-redux";
import DashboardLayout from "../../ui/hocs/DashboardLayout";
import RootLayout from "../../ui/hocs/RootLayout";
import Messager from "../../ui/components/messages/Messager";

const HomePage = () => {
  return (
    <RootLayout>
      <DashboardLayout>
        <Messager />
      </DashboardLayout>
    </RootLayout>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(HomePage);
