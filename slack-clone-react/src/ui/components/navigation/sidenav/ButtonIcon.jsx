import clsx from "clsx";

const ButtonIcon = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      type="button"
      className={clsx(
        "absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8",
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
