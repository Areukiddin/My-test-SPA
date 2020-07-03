import React from "react";
import profileStyles from "../../profile.module.css";
import { Post } from "./Post";
import {
  updatePostTextCreator,
  addPostCreator,
} from "../../../../../redux/myFeed-reducer";

export const MyFeed = (props) => {
  const postElements = props.myFeed.posts.map((p) => (
    <Post id={p.id} post={p.post} />
  ));

  const newPostElem = React.createRef();

  const addPost = () => {
    let text = newPostElem.current.value;
    props.dispatch(addPostCreator(text));
    newPostElem.current.value = "";
  };

  const onPostChange = () => {
    let text = newPostElem.current.value;
    props.dispatch(updatePostTextCreator(text));
  };

  return (
    <div className={profileStyles.myFeed}>
      <textarea
        placeholder="Что у вас нового?"
        ref={newPostElem}
        onChange={onPostChange}
      ></textarea>
      <button className="btn btn-primary" type="button" onClick={addPost}>
        Поделиться
      </button>
      <div className={profileStyles.post}>{postElements}</div>
    </div>
  );
};
