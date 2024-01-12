import { useState } from "react";
import { connect } from "react-redux";
import { create_channel } from "../../../../../redux/actions/channels";
import { load_user } from "../../../../../redux/actions/auth";
import { get_messages } from "../../../../../redux/actions/messagers";

const ChannelsInput = ({
  create_channel,
  user,
  setRender,
  load_user,
  get_messages,
}) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const { name } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name !== "") {
      await create_channel(user.id, name);
      await load_user();
      await get_messages();
    }

    setFormData({ name: "" });
    setRender();
  };

  return (
    <form
      className="relative flex justify-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className="block rounded-md border-gray-200 pl-6 m-2 text-sm outline-2 placeholder:text-gray-500"
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => handleChange(e)}
        placeholder="Enter your channel name"
        required
      />
    </form>
  );
};

const mapStateToProps = (state) => ({
  user: state.Auth.user,
});

export default connect(mapStateToProps, {
  create_channel,
  load_user,
  get_messages,
})(ChannelsInput);
