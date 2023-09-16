import React, { useContext } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { ChevronDown, Plus, User as ContactIcon } from "lucide-react";

import { User } from "@/types";
import useUser from "@/hooks/useUser";
import { GlobalContext } from "@/context/globalContext";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";
import { Separator } from "./ui/separator";
import AddChannel from "./ui/addChannel";
import SignOutButton from "./ui/signOutButton";

const Sidebar: React.FC = () => {
  const user = useUser();
  const { users, channels } = useContext(GlobalContext);

  const contacts = users.filter((contact) => contact.id !== user.id);

  return (
    <aside className="h-full bg-primary text-primary-foreground/70 p-3 w-52">
      <div className="py-2">
        <h2 className="text-lg text-center text-primary-foreground font-bold">
          Workspace
        </h2>
      </div>

      <SectionSeparator />

      <SidebarSection title="Channels">
        {channels.map((channel) => (
          <Channel key={channel.id} channelId={channel.id}>
            {channel.name}
          </Channel>
        ))}

        <AddChannel />
      </SidebarSection>

      <SectionSeparator />

      <SidebarSection title="Direct messages">
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}

        <AddButton className="font-bold">Add coworkers</AddButton>
      </SidebarSection>

      <SectionSeparator />

      <SignOutButton />
    </aside>
  );
};

const SidebarSection: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <Collapsible defaultOpen>
      <div className="flex items-center gap-2">
        <CollapsibleTrigger className="py-2">
          <ChevronDown
            className="sidebarItem"
            fill="white"
            size={24}
            absoluteStrokeWidth
          />
        </CollapsibleTrigger>
        <span>{title}</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-1">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

const SectionSeparator: React.FC = () => {
  return <Separator className="bg-primary-foreground/10 my-3" />;
};

const Channel: React.FC<{ children: React.ReactNode; channelId: string }> = ({
  children,
  channelId,
}) => {
  const { channels, setChannels } = useContext(GlobalContext);

  const handleClick = () => {
    const newChannels = channels.filter((channel) => channel.id !== channelId);
    setChannels(newChannels);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <NavLink
          className={({ isActive }) =>
            isActive ? "sidebarActiveItem" : "sidebarItem"
          }
          to={`/app/room/${channelId}`}
        >
          #{children}
        </NavLink>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem
          className="text-destructive focus:bg-destructive focus:text-destructive-foreground"
          onClick={handleClick}
        >
          Leave channel
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

const Contact: React.FC<{ contact: User }> = ({ contact }) => {
  const user = useUser();

  const conversationId = user.conversations.filter((conversationId) =>
    contact.conversations.includes(conversationId)
  )[0];

  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "sidebarActiveItem" : "sidebarItem"
      }
      to={`/app/room/${conversationId}`}
    >
      <div className="flex items-center gap-1">
        <ContactIcon
          fill="white"
          size={20}
          className="flex-shrink-0 rounded bg-secondary"
        />
        <span className="truncate">{contact.name}</span>
      </div>
    </NavLink>
  );
};

const AddButton: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <Button className={clsx("justify-start px-0", className)} size="sm">
      <Plus className="sidebarIcon" />
      {children}
    </Button>
  );
};

export default Sidebar;
