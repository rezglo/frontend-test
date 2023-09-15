import React, { useContext, useState } from "react";
import { v4 as uuid4 } from "uuid";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { Input } from "./input";
import { GlobalContext } from "@/context/globalContext";
import { Plus } from "lucide-react";

const AddChannel: React.FC = () => {
  const [name, setName] = useState("");
  const { channels, setChannels } = useContext(GlobalContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setChannels([...channels, { id: uuid4(), name, messages: [] }]);
    setName("");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex items-center text-sm justify-start px-0">
        <Plus className="sidebarIcon" />
        Add channel
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create a Channel</AlertDialogTitle>
          <AlertDialogDescription>
            <Input
              className="text-foreground"
              placeholder="e.g. plan-budget"
              value={name}
              onChange={handleChange}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Create</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddChannel;
