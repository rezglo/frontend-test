import { Stacked } from "../../../messages/Stacked";
import NavLinks from "../../NavLinks";
import NavLinksHead from "../../NavLinksHead";
import { PlayIcon } from "@heroicons/react/24/outline";

const urlImage =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const linkHead = { name: "Direct Messages", icon: PlayIcon };
const profile = () => <Stacked urlImage={urlImage} width="w-6 h-6" />;

const links = [
  { name: "Leslie", href: "/dashboard", icon: profile },
  {
    name: "Dairelis",
    href: "/dashboard/invoices",
    icon: profile,
  },
  { name: "Dariel", href: "/dashboard/customers", icon: profile },
];

const DirectMessages = (props) => {
  return (
    <>
      <ul>
        <NavLinksHead link={linkHead} />
        <NavLinks links={links} />
      </ul>
    </>
  );
};

export default DirectMessages;
