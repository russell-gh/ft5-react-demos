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
    case SET_TODOS: {
      const copy = { ...state };
      copy.todos = action.data;
      copy.lastIssueId = copy.todos.length + 1;
      return copy;
    }

    case TOGGLE_COMPLETED: {
      const copy = [...state.todos];

      const indexOf = copy.findIndex((todo) => {
        return todo.id === action.id;
      });

      copy[indexOf].completed = !copy[indexOf].completed;

      return { ...state, todos: copy };
    }

    case DELETE_TODO: {
      const copy = [...state.todos];

      const indexOf = copy.findIndex((todo) => {
        return todo.id === action.id;
      });

      copy.splice(indexOf, 1);

      return { ...state, todos: copy };
    }

    case SET_TODO_TEXT:
      return { ...state, todoText: action.text };

    case ADD_TODO: {
      const _state = { ...state };
      _state.lastIssueId = state.lastIssueId + 1;

      const copy = [..._state.todos];

      copy.push({
        userId: 1,
        title: action.text,
        completed: false,
        id: state.lastIssueId,
      });

      return { ..._state, todos: copy };
    }

    default:
      return state;
  }
}
