import { ChevronDownIcon } from "@heroicons/react/24/outline";
import NavLinksHead from "../components/navigation/NavLinksHead";

const linkHead = { name: "Acme Inc", icon: ChevronDownIcon };

const NavLinksLayout = ({ children }) => {
  return (
    <nav
      className="divide-y divide-slate-100 h-full w-60 -translate-x-full overflow-hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
      data-te-sidenav-init
      data-te-sidenav-hidden="false"
    >
      <ul
        className="relative m-0 list-none px-[0.2rem]"
        data-te-sidenav-menu-ref
      >
        <NavLinksHead link={linkHead} />
      </ul>
      {children}
    </nav>
  );
};

export default NavLinksLayout;
