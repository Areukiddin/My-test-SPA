import React from "react";
import { Dialog } from "./dialogComponents/Dialog";
import { Massage } from "./dialogComponents/Massage";
import {
  addMassageCreator,
  updateMassageTextCreator,
} from "../../redux/dialog-reducer";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = (props) => {
  debugger;
  let state = props.store.getState();

  const dialogElements = state.dialogPage.dialogs.map((d) => (
    <Dialog id={d.id} name={d.name} avatar={d.avatar} />
  ));

  const massageElements = state.dialogPage.massages.map((m) => (
    <Massage id={m.id} massage={m.massage} />
  ));

  const newMassageElem = React.createRef();

  const addMassage = () => {
    props.store.dispatch(addMassageCreator());
  };

  const onMassageChange = (text) => {
    props.store.dispatch(updateMassageTextCreator(text));
  };

  return (
    <Dialogs
      addMassage={addMassage}
      onMassageChange={onMassageChange}
      dialogs={state.dialogPage.dialogs}
      massages={state.dialogPage.massages}
    />
  );
};
