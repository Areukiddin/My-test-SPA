const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_STATE = "SET-STATE";

let initialState = {
  users: [
    {
      id: 1,
      name: "Светлана",
      followed: false,
      avatar:
        "https://sun9-27.userapi.com/impg/c854020/v854020793/22c5a9/PPSbpEduS4Y.jpg?size=200x0&quality=90&sign=a7f5459542585c23bcddf648b9400769&ava=1",
      location: { cityId: 1, cityName: "Moscow", country: "Russia" },
    },
    {
      id: 2,
      name: "Алексей",
      followed: true,
      avatar:
        "https://sun9-53.userapi.com/c637429/v637429886/572be/vM0ydo4eppM.jpg?ava=1",
      location: { cityId: 1, cityName: "Pushkino", country: "Russia" },
    },
    {
      id: 3,
      name: "Игорь",
      followed: true,
      avatar:
        "https://sun9-34.userapi.com/impg/c857420/v857420041/148bc2/2qZVcQpeHOE.jpg?size=200x0&quality=90&sign=cc1e3b690d196513468725320dfbbb9b&ava=1",
      location: { cityId: 1, cityName: "Moscow", country: "Russia" },
    },
    {
      id: 4,
      name: "Дмитрий",
      followed: true,
      avatar:
        "https://sun9-48.userapi.com/c850736/v850736060/176f9f/LHGg7uz21SI.jpg?ava=1",
      location: { cityId: 1, cityName: "Sofrino", country: "Russia" },
    },
    {
      id: 5,
      name: "Юлия",
      followed: false,
      avatar:
        "https://sun1-93.userapi.com/impg/I4oGjkF9smnHHZwUWH1jVkB3qTWka65ixfTSRw/DlK43n5w5hc.jpg?size=200x0&quality=90&sign=4087a7237d359bd3cdc4ee0541d10b2f&ava=1",
      location: { cityId: 1, cityName: "Moscow", country: "Russia" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setStateAC = (users) => ({ type: SET_STATE, users });

export default usersReducer;
