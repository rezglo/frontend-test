const MessageSent = (props) => {
  const { date, time } = props;
  return (
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="mt-1 text-xs leading-5 text-gray-500">
        Last seen <time dateTime={date}>{time}</time>
      </p>
    </div>
  );
};

export default MessageSent;
