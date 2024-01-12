import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import MessageSent from "./MessageSent";
import { Stacked } from "./Stacked";

const urlImage =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const MessageContent = (props) => {
  const { author, message, timesTamp, _key } = props;
  const [now, setNow] = useState(moment());
  const [time, setTime] = useState("");

  const timeSet = useMemo(
    () =>
      function calculateTime() {
        return {
          isAfter: now.isAfter(timesTamp),
          time: now.fromNow(timesTamp),
        };
      },
    [now, timesTamp]
  );

  useEffect(() => {
    const see = timeSet();
    if (see.isAfter) {
      setTime(see.time);
    }
  }, [timeSet]);

  useEffect(() => {
    setNow(moment().add(1, "minutes"));
  }, [time]);

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
      <MessageSent date={timesTamp} time={time} />
    </li>
  );
};

export default MessageContent;
