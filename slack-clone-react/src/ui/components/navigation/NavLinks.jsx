import { Link } from "react-router-dom";
import clsx from "clsx";

const NavLinks = (props) => {
  const { pathname, links } = props;

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={link.name} className="relative">
            <Link
              key={link.name}
              to={link.href}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm text-slate-300 font-medium hover:text-slate-100 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "text-slate-50": pathname === link.href,
                }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
