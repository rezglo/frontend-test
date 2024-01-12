import { connect } from "react-redux";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { create_message } from "../../../redux/actions/messagers";
import { update_review_channel } from "../../../redux/actions/channels";

const MessageInput = ({
  create_message,
  update_review_channel,
  user,
  channel,
  setRender,
}) => {
  const [formData, setFormData] = useState({
    message: "",
  });

  const { message } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message !== "" && user && channel) {
      create_message(user.id, channel.id, message);
      await update_review_channel(user.id);
      setFormData({ message: "" });
    }
    setRender();
  };

  return (
    <div className="flex justify-between p-2 items-stretch shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]">
      <form className="min-w-full" onSubmit={(e) => handleSubmit(e)}>
        <textarea
          id="editor"
          rows="8"
          className="block w-full h-full max-h-24 px-0 text-sm text-gray-800 border-0 focus:ring-0"
          name="message"
          value={message}
          onChange={(e) => handleChange(e)}
          placeholder="Write a message..."
          required
        ></textarea>
        <div className="relative flex items-center justify-between p-3">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"></div>
          <button
            type="submit"
            className="absolute inset-y-0 right-0 inline-flex items-center text-sm font-medium text-center focus:ring-4 focus:ring-blue-200 hover:text-slate-400"
          >
            <span className="h-6 w-6 rounded-full text-gray-400 hover:text-gray-500">
              <PaperAirplaneIcon />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.Auth.user,
  channel: state.Channels.channel,
});

export default connect(mapStateToProps, {
  create_message,
  update_review_channel,
})(MessageInput);
