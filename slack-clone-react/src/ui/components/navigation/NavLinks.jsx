import { Link } from "react-router-dom";
import clsx from "clsx";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import ButtonIcon from "./sidenav/ButtonIcon";

const NavLinks = (props) => {
  const { pathname, links, handleDelete, implementDelete = false } = props;

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={link.id} className="relative flex w-full">
            <Link
              key={link.id}
              to={link.href}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm text-slate-300 font-medium hover:text-slate-100 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "text-slate-50": pathname === link.href,
                }
              )}
            >
              {LinkIcon && <LinkIcon className="w-6" />}
              <p className="hidden md:block">{link.name}</p>
            </Link>
            {implementDelete && (
              <DeleteButton handleClick={() => handleDelete(link.id)} />
            )}
            {props.children}
          </li>
        );
      })}
    </>
  );
};

function DeleteButton({ handleClick }) {
  return (
    <ButtonIcon onClick={handleClick}>
      <ArchiveBoxXMarkIcon width={20} hanging={20} />
    </ButtonIcon>
  );
}

export default NavLinks;
