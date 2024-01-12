import MessageSent from "./MessageSent";
import { Stacked } from "./Stacked";

const urlImage =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const MessageContent = (props) => {
  const { author, message, _key } = props;

  return (
    <li key={_key} className="flex justify-between gap-x-6 py-5">
      <Stacked urlImage={urlImage}>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
          {author}
        </p>
        <p className="text-sm font-semibold leading-6 text-gray-900">
          {message}
        </p>
      </Stacked>
      <MessageSent date={"2023-01-23T13:23Z"} time={"3h ago"} />
    </li>
  );
};

export default MessageContent;
