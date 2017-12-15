import { SAMPLE_ACTION } from "actions/const";

const initialState = {
  items: [
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit",
      type: "success"
    },
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit",
      type: "primary"
    },
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit",
      type: "secondary"
    },
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit",
      type: "info"
    },
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit",
      type: "alert"
    },
    {
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit",
      type: "warning"
    }
  ]
};

initialState.allItems = initialState.items;

function reducer(state = initialState, action) {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case SAMPLE_ACTION: {
      let filter = [];
      if (action.payload === "all") {
        filter = initialState.allItems;
      } else {
        nextState.allItems.map(({ title, description, type }) => {
          if (type === action.payload) {
            filter.push({ title, description, type });
          }
        });
      }
      nextState.items = filter;
      return nextState;
    }
    default:
      return nextState;
  }
}

export default reducer;
