import { connect } from "react-redux";
import NavLinks from "../../NavLinks";
import NavLinksHead from "../../NavLinksHead";
import { PlayIcon, HashtagIcon } from "@heroicons/react/24/outline";
import {
  delete_channel,
  get_channels,
  get_review_channel,
} from "../../../../../redux/actions/channels";
import { useEffect, useState } from "react";
import ChannelsInput from "./ChannelsInput";
import { load_user } from "../../../../../redux/actions/auth";

const linkHead = { name: "Channels", icon: PlayIcon };
let links = [];

const createLinks = (channels) => {
  channels.forEach((channel, index) => {
    links.push({
      id: `${channel.id}-${channel.name}_${index}`,
      name: channel.name,
      href: "#",
      icon: HashtagIcon,
    });
  });
};

const Channels = (props) => {
  const [render, setRender] = useState(false);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await props.get_channels(props.user.id);
      await props.get_review_channel(props.user.id);
    };

    fetchData();
    setChannels(props.channels);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);

  if (channels) {
    links = [];
    createLinks(channels);
  }

  const handleDelete = async (id) => {
    await props.delete_channel(id);
    await props.load_user();

    setRender((state) => !state);
  };

  return (
    <>
      <ul>
        <NavLinksHead link={linkHead} />
        <ChannelsInput setRender={() => setRender((state) => !state)} />
        <NavLinks
          links={links}
          handleDelete={handleDelete}
          implementDelete={true}
        />
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  channels: state.Channels.channels,
  user: state.Auth.user,
});

export default connect(mapStateToProps, {
  get_channels,
  get_review_channel,
  delete_channel,
  load_user,
})(Channels);
