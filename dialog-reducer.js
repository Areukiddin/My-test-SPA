const ADD_MASSAGE = "ADD-MASSAGE";
const UPDATE_MASSAGE_TEXT = "UPDATE-MASSAGE-TEXT";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Евгений",
      avatar:
        "https://sun9-41.userapi.com/c850324/v850324750/b77b1/Te0sORVLuZ4.jpg?ava=1",
    },
    {
      id: 2,
      name: "Светлана",
      avatar:
        "https://sun9-27.userapi.com/impg/c854020/v854020793/22c5a9/PPSbpEduS4Y.jpg?size=200x0&quality=90&sign=a7f5459542585c23bcddf648b9400769&ava=1",
    },
    {
      id: 3,
      name: "Алексей",
      avatar:
        "https://sun9-53.userapi.com/c637429/v637429886/572be/vM0ydo4eppM.jpg?ava=1",
    },
    {
      id: 4,
      name: "Игорь",
      avatar:
        "https://sun9-34.userapi.com/impg/c857420/v857420041/148bc2/2qZVcQpeHOE.jpg?size=200x0&quality=90&sign=cc1e3b690d196513468725320dfbbb9b&ava=1",
    },
    {
      id: 5,
      name: "Дмитрий",
      avatar:
        "https://sun9-48.userapi.com/c850736/v850736060/176f9f/LHGg7uz21SI.jpg?ava=1",
    },
    {
      id: 6,
      name: "Юлия",
      avatar:
        "https://sun1-93.userapi.com/impg/I4oGjkF9smnHHZwUWH1jVkB3qTWka65ixfTSRw/DlK43n5w5hc.jpg?size=200x0&quality=90&sign=4087a7237d359bd3cdc4ee0541d10b2f&ava=1",
    },
  ],
  massages: [],
  newMassageText: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MASSAGE: {
      let stateCopy = { ...state };
      stateCopy.massages = [...state.massages];
      let newMassage = {
        id: 6,
        massage: stateCopy.newMassageText,
      };
      stateCopy.massages.push(newMassage);
      return stateCopy;
    }
    case UPDATE_MASSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMassageText = action.newMassage;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMassageCreator = () => ({ type: ADD_MASSAGE });
export const updateMassageTextCreator = (text) => ({
  type: UPDATE_MASSAGE_TEXT,
  newMassage: text,
});

export default dialogReducer;
