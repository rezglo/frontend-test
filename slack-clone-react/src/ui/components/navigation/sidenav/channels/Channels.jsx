import NavLinks from "../../NavLinks";
import NavLinksHead from "../../NavLinksHead";
import { PlayIcon, HashtagIcon } from "@heroicons/react/24/outline";

const linkHead = { name: "Channels", icon: PlayIcon };

const links = [
  { name: "TeleTM", href: "/dashboard", icon: HashtagIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: HashtagIcon,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: HashtagIcon,
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
