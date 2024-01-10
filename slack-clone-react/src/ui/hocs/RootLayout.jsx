import { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "../components/navigation/Navbar ";
import { check_authenticated, load_user } from "../../redux/actions/auth";

const RootLayout = (props) => {
  useEffect(() => {
    props.check_authenticated();
    props.load_user();
  }, [props]);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      {props.children}
    </main>
  );
};

export default connect(null, {
  check_authenticated,
  load_user,
})(RootLayout);
