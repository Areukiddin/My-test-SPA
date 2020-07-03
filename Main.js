import React from "react";
import { Avatar } from "./Profile/profileComponents/Avatar";
import { Name } from "./Profile/Bio/Name";
import { BirthDate } from "./Profile/Bio/BirthDate";
import profileStyles from "./Profile/profile.module.css";
import { AddPhotos } from "./Profile/profileComponents/AddPhotos";
import { MyFeed } from "./Profile/profileComponents/myFeed/MyFeed";
import store from "../../redux/redux-store";

export const Main = (props) => {
  let state = props.store.getState().userPage;
  return (
    <div className={profileStyles.profile}>
      <div className={profileStyles.avatar}>
        <Avatar user={state.userInfo.userName} />
      </div>
      <div className={profileStyles.bio}>
        <Name
          name={state.userInfo.userName.name}
          secondName={state.userInfo.userName.secondName}
          surname={state.userInfo.userName.surname}
        />
        <BirthDate date={state.userInfo.userBirth.date} />
      </div>
      <AddPhotos />
      <MyFeed myFeed={state.myFeed} dispatch={store.dispatch} />
    </div>
  );
};
