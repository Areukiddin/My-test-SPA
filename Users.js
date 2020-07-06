import React from "react";
import s from "./users.module.css";

export const Users = (props) => {
  debugger;
  return (
    <div className={s.userList}>
      {props.users.map((u) => (
        <div className={s.userCard} key={u.id}>
          <div className={s.info}>
            <img className={s.info__avatar} src={u.avatar}></img>
            <div className={s.info__text}>
              <span>{u.name}</span>
              <br />
              <span>
                {u.location.cityName}, {u.location.country}
              </span>
            </div>
          </div>
          <div className={s.buttons}>
            {u.followed ? (
              <button
                class="btn btn-primary btn-sm"
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Добавить в друзья
              </button>
            ) : (
              <button
                class="btn btn-danger btn-sm"
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Удалить
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
