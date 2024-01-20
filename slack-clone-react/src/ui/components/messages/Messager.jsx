import { connect } from "react-redux";
import MessageContent from "./MessageContent";
import { useEffect, useState } from "react";
import { get_messages } from "../../../redux/actions/messagers";
import MessageInput from "./MessageInput";

const Messager = ({ get_messages, user, channel, messages }) => {
  const [render, setRender] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (user && channel) {
        await get_messages(user.id, channel.id);
      }
    };

    fetchData();
    setChatMessages(messages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel, render]);

  return (
    <>
      <ul className="max-w-sm md:max-w-2xl overflow-x-auto">
        {chatMessages &&
          chatMessages.map((message, index) => (
            <div key={index}>
              <MessageContent
                _key={`_${index}#${message.id}`}
                author={message.user.name}
                message={message.message}
              />
            </div>
          ))}
      </ul>
      <MessageInput setRender={() => setRender((state) => !state)} />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.Auth.user,
  channel: state.Channels.channel,
  messages: state.Messager.messages,
});

export default connect(mapStateToProps, {
  get_messages,
})(Messager);
