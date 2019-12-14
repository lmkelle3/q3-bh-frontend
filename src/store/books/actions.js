import axios from "axios";
import * as types from "./constants";

export const getAllBooks = () => {
  return dispatch => {
    axios
      .get("http://localhost:8000/books")
      .then(res => {
        dispatch({
          type: types.GET_BOOKS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_BOOKS_FAILED,
          payload: err
        });
      });
  };
};
export const addBook = book => {
  return dispatch => {
    axios
      .post(`http://localhost:8000/books`, book)
      .then(res => {
        dispatch({
          type: types.ADD_BOOK_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.ADD_BOOK_FAILED,
          payload: err
        });
      });
  };
};
// export const deleteBook = id => {
//   return dispatch => {
//     axios
//       .delete(`http://localhost:8000/books/${id}`)
//       .then(res => {
//         dispatch({
//           type: types.DELETE_BOOK_SUCCESS,
//           payload: res.data
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: types.DELETE_BOOK_FAILED,
//           payload: err
//         });
//       });
//   };
// };

export const deleteBook = id => async dispatch => {
  dispatch({
    type: types.DELETE_BOOK_PENDING
  });
  try {
    let response = await axios.delete(`http://localhost:8000/books/${id}`);
    dispatch({
      type: types.DELETE_BOOK_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.DELETE_BOOK_FAILED,
      payload: err
    });
  }
};

export const editBook = (id, book) => async dispatch => {
  dispatch({
    type: types.EDIT_BOOK_PENDING
  });
  try {
    let response = await axios.patch(`http://localhost:8000/books/${id}`, book);
    dispatch({
      type: types.EDIT_BOOK_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.EDIT_BOOK_FAILED,
      payload: err
    });
  }
};

// export const editBook = (id, book) => {
//   return dispatch => {
//     axios
//       .patch(`http://localhost:8000/books/${id}`, book)
//       .then(res => {
//         dispatch({
//           type: types.EDIT_BOOK_SUCCESS,
//           payload: res.data
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: types.EDIT_BOOK_FAILED,
//           payload: err
//         });
//       });
//   };
// };
