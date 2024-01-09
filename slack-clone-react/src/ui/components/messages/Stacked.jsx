export const Stacked = (props) => {
  const { children, urlImage, width = "h-12 w-12" } = props;

  return (
    <div className="flex min-w-0 gap-x-4">
      <img
        className={`${width} flex-none rounded-md bg-gray-50`}
        src={urlImage}
        alt=""
      ></img>
      <div className="min-w-0 flex-auto">{children}</div>
    </div>
  );
};
