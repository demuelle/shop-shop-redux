import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY
} from "../../utils/actions";

const initialState = {
    names: [],
    currentCategory: ''
}

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return {
        ...state,
        names: [...action.payload],
      };
      case UPDATE_CURRENT_CATEGORY:
        return {
          ...state,
          currentCategory: action.payload,
        };
    default:
      return state
  }
}
