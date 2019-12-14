import * as types from "./constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOCATIONS_SUCCESS:
      return action.payload;
    case types.GET_LOCATIONS_FAILED:
      return action.payload;
    // case types.ADD_BOOK_SUCCESS:
    //   return action.payload;
    // case types.ADD_BOOK_FAILED:
    //   return action.payload;
    // case types.DELETE_BOOK_SUCCESS:
    //   let deletedBook = state.map(book =>
    //     book.id === action.payload.id ? action.payload : book
    //   );
    //   return action.payload;
    // case types.DELETE_BOOK_FAILED:
    //   return action.payload;
    default:
      return state;
  }
};
