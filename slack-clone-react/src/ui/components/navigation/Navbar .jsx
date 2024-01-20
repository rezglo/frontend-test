import { connect } from "react-redux";
import SlackLogo from "../SlackLogo";
import Profile from "../dashboard/Profile";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const Navbar = (props) => {
  return (
    <nav className="bg-fuchsia-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <SlackLogo />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative flex w-8 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="h-6 w-6 rounded-full text-white">
                <QuestionMarkCircleIcon />
              </span>
            </button>

            {!props.isAuthenticated || <Profile profile={{}} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Navbar);
