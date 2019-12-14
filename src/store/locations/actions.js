import axios from "axios";
import * as types from "./constants";

export const getAllLocations = () => {
  return dispatch => {
    axios
      .get("http://localhost:8000/locations")
      .then(res => {
        dispatch({
          type: types.GET_LOCATIONS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_LOCATIONS_FAILED,
          payload: err
        });
      });
  };
};
// export const addBook = book => {
//   return dispatch => {
//     axios
//       .post(`http://localhost:8000/books`, book)
//       .then(res => {
//         dispatch({
//           type: types.ADD_BOOK_SUCCESS,
//           payload: res.data
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: types.ADD_BOOK_FAILED,
//           payload: err
//         });
//       });
//   };
// };
// export const deleteBook = id => {
//   return dispatch => {
//     axios
//       .post(`http://localhost:8000/books/remove/${id}`)
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
