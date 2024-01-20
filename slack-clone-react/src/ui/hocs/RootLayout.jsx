import { useEffect, useState } from "react";
import { connect } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/navigation/Navbar ";
import { check_authenticated, load_user } from "../../redux/actions/auth";

const notify = (message, type) => {
  if (type === "red") toast.error(message);

  if (type === "green") toast.success(message);
};

const RootLayout = (props) => {
  const [currentAlert, setCurrentAlert] = useState(null);

  useEffect(() => {
    props.check_authenticated();
    props.load_user();
    setCurrentAlert(props.alert);
  }, [props]);

  useEffect(() => {
    if (currentAlert) {
      notify(currentAlert.msg, currentAlert.alertType);
    }
  }, [currentAlert]);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Toaster toastOptions={{ duration: 5000 }} />
      {props.children}
    </main>
  );
};

const mapStateToProps = (state) => ({
  alert: state.Alert.alert,
});

export default connect(mapStateToProps, {
  check_authenticated,
  load_user,
})(RootLayout);
