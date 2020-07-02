import React from "react";
import dialogStyles from "./dialogs.module.css";
import { Dialog } from "./dialogComponents/Dialog";
import { Massage } from "./dialogComponents/Massage";

export const Dialogs = (props) => {
  const dialogElements = props.dialogs.map((d) => (
    <Dialog id={d.id} name={d.name} avatar={d.avatar} />
  ));

  const massageElements = props.massages.map((m) => (
    <Massage id={m.id} massage={m.massage} />
  ));

  const newMassageElem = React.createRef();

  const addMassage = () => {
    props.addMassage();
    newMassageElem.current.value = "";
  };

  const onMassageChange = () => {
    let text = newMassageElem.current.value;
    props.onMassageChange(text);
  };

  return (
    <div className={dialogStyles.dialogs__body}>
      <div className={dialogStyles.dialogs + " " + dialogStyles.column}>
        {dialogElements}
      </div>
      <div className={dialogStyles.massages + " " + dialogStyles.column}>
        {massageElements}
      </div>
      <textarea
        placeholder="Введите сообщение"
        ref={newMassageElem}
        onChange={onMassageChange}
      ></textarea>
      <button type="button" className="btn btn-primary" onClick={addMassage}>
        Отправить
      </button>
    </div>
  );
};
