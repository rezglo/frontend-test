import { connect } from "react-redux";
import { Stacked } from "../../../messages/Stacked";
import NavLinks from "../../NavLinks";
import NavLinksHead from "../../NavLinksHead";
import { PlayIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { get_direct_messages } from "../../../../../redux/actions/directMessages";

const linkHead = { name: "Direct Messages", icon: PlayIcon };
const profile = (urlImage) => <Stacked urlImage={urlImage} width="w-6 h-6" />;

let links = [];

const createLinks = (directMessages) => {
  directMessages.forEach((directMessage, index) => {
    links.push({
      id: index,
      name: "Dory",
      href: "#",
      icon: profile(directMessage.url),
    });
  });
};

const DirectMessages = ({ directMessages, get_direct_messages }) => {
  const [directMessagesNow, setDirectMessagesNow] = useState([]);
  const [render, setRender] = useState(true);

  const memoryGetData = useCallback(async () => {
    await get_direct_messages();
  }, [get_direct_messages]);

  useEffect(() => {
    memoryGetData();
    setTimeout(() => {
      setRender(!render);
    }, 5000);
  }, [memoryGetData, render]);

  useEffect(() => {
    setDirectMessagesNow(directMessages);
  }, [directMessages]);

  if (directMessagesNow) {
    links = [];
    createLinks(directMessagesNow);
  }

  return (
    <>
      <ul>
        <NavLinksHead link={linkHead} />
        <NavLinks links={links}>
          <span className="absolute w-3 h-3 left-4 rounded-full bg-green-900 top-4 text-gray-400 hover:text-gray-500 sm:left-6 sm:top-8 md:left-6 md:top-6 lg:left-8 lg:top-8"></span>
        </NavLinks>
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  directMessages: state.DirectMessager.directMessages,
});

export default connect(mapStateToProps, {
  get_direct_messages,
})(DirectMessages);
