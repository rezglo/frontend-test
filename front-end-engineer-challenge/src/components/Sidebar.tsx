import React from "react";
import { ChevronDown, Plus, User as UserIcon } from "lucide-react";

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
import clsx from "clsx";

const Sidebar: React.FC = () => {
  return (
    <aside className="h-full bg-primary text-primary-foreground/70 p-3 w-52">
      <div className="py-2">
        <h2 className="text-lg text-center text-primary-foreground font-bold">
          Workspace
        </h2>
      </div>

      <SectionSeparator />

      <SidebarSection title="Channels">
        <Channel>channel1</Channel>
        <Channel>channel2</Channel>
        <Channel>channel3</Channel>

        <AddButton className="text-inherit font-normal">Add channels</AddButton>
      </SidebarSection>

      <SectionSeparator />

      <SidebarSection title="Direct messages">
        <User />
        <User />
        <User />

        <AddButton className="font-bold">Add coworkers</AddButton>
      </SidebarSection>
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

const Channel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="sidebarItem">#{children}</div>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem className="text-destructive focus:bg-destructive focus:text-destructive-foreground">
          Leave channel
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

const User: React.FC = () => {
  return (
    <div className="sidebarItem">
      <div className="flex items-center gap-1">
        <UserIcon
          fill="white"
          size={20}
          className="flex-shrink-0 rounded bg-secondary"
        />
        <span className="truncate">Nelson Javier Aldazabal Hernandez</span>
      </div>
    </div>
  );
};

const AddButton: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <Button className={clsx("justify-start px-0", className)} size="sm">
      <Plus className="h-5 w-5 p-1 rounded mr-2 bg-secondary" /> {children}
    </Button>
  );
};
export default Sidebar;
