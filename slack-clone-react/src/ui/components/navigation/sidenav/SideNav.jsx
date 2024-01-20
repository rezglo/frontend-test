import NavLinksLayout from "../../../hocs/NavLinksLayout";
import Channels from "./channels/Channels";
import DirectMessages from "./direct-messages/DirectMessages";

const SideNav = (props) => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-fuchsia-900">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinksLayout>
          <Channels />
          <DirectMessages />
        </NavLinksLayout>
      </div>
    </div>
  );
};

export default SideNav;
