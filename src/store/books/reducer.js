import * as types from "./constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOOKS_SUCCESS:
      return action.payload;
    case types.GET_BOOKS_FAILED:
      return action.payload;
    case types.ADD_BOOK_SUCCESS:
      return [...state, action.payload[0]];
    case types.ADD_BOOK_FAILED:
      return action.payload;
    case types.DELETE_BOOK_PENDING:
      return state;
    case types.DELETE_BOOK_SUCCESS:
      return state.filter(book => book.id !== action.payload[0].id);
    case types.DELETE_BOOK_FAILED:
      return action.payload;
    case types.EDIT_BOOK_PENDING:
      return state;
    case types.EDIT_BOOK_SUCCESS:
      return state.map(book =>
        book.id === action.payload.id ? action.payload : book
      );
    case types.EDIT_BOOK_FAILED:
      return action.payload;
    default:
      return state;
  }
};
