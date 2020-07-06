const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
  userInfo: {
    userName: {
      name: "Евгений",
      secondName: "Олегович",
      surname: "Максимов",
    },
    userBirth: { date: "01.02.1994" },
  },
  myFeed: {
    posts: [],
    newPostText: "",
    likeValue: 3,
    commentValue: 5,
    repostValue: 1,
  },
};

const myFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let stateCopy = {
        ...state,
        myFeed: state.myFeed,
        posts: state.myFeed.posts,
      };

      let newPost = {
        id: 1,
        post: action.userPost,
      };
      stateCopy.myFeed.posts.push(newPost);
      return stateCopy;
    }
    case UPDATE_POST_TEXT: {
      let stateCopy = { ...state, myFeed: state.myFeed };
      stateCopy.myFeed.newPostText = action.newPost;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostCreator = (text) => ({
  type: ADD_POST,
  userPost: text,
});
export const updatePostTextCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  newPost: text,
});

export default myFeedReducer;
