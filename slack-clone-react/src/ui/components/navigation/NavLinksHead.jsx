const NavLinksHead = (props) => {
  const { link } = props;
  const LinkIcon = link.icon;

  if (!link) return null;

  return (
    <>
      <li className="relative">
        <button
          key={link.name}
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm text-slate-300 font-medium hover:text-slate-100 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <LinkIcon className="w-6" />
          <p className="hidden md:block">{link.name}</p>
        </button>
      </li>
    </>
  );
};

export default NavLinksHead;
