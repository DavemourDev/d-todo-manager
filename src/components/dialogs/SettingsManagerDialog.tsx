import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext"
import { capitalize } from "../../helpers/string-helpers";
import { Dialog } from "../content/Dialog";
import { SettingsManager } from "../settings/SettingsManager";

type SettingsManagerDialogProps = {
  active: boolean;
  onClose: () => void;
} 

export const SettingsManagerDialog = ({ active, onClose }: SettingsManagerDialogProps ) => {

  const context = useContext(TodoContext);
  const dictionary = context.dictionary;

  return (
    <Dialog isOpen={active} onClose={onClose}>
      <h2>{ capitalize(dictionary.menu.configureSettings ) }</h2>
      <SettingsManager/>
    </Dialog>
  )

}