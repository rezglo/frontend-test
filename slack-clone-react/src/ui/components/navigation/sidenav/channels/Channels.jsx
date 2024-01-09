import NavLinks from "../../NavLinks";
import NavLinksHead from "../../NavLinksHead";
import { PlayIcon } from "@heroicons/react/24/outline";

const linkHead = { name: "Channels", icon: PlayIcon };
const icon = () => <>#</>;

const links = [
  { name: "TeleTM", href: "/dashboard", icon: icon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: icon,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: icon,
  },
];

const Channels = (props) => {
  return (
    <>
      <ul>
        <NavLinksHead link={linkHead} />
        <NavLinks links={links} />
      </ul>
    </>
  );
};

export default Channels;
