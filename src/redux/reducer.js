import { initialState } from "./initialState";
import {
  ADD_TODO,
  DELETE_TODO,
  SET_TODOS,
  SET_TODO_TEXT,
  TOGGLE_COMPLETED,
} from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
