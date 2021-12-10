import {
  GET_COUNTRIES,
  FILTER_COUNTRIES,
  SET_CURRENT_PAGE,
  SET_ITEMS_PER_PAGE,
  SET_CURRENT_ITEMS,
} from "./actions";

import { filter } from "./services/filter";

const initialState = {
  countries: [],
  filterCountries: [],
  currentPage: 1,
  itemsPerPage: 10,
  currentItems: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: payload,
        currentItems: payload.slice(0, state.itemsPerPage),
      };
    }
    case FILTER_COUNTRIES: {
      ///local
      return {
        ...state,
        filterCountries: filter(state, payload),
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: payload,
      };
    }
    case SET_ITEMS_PER_PAGE: {
      return {
        ...state,
        itemsPerPage: payload,
      };
    }
    case SET_CURRENT_ITEMS: {
      return {
        ...state,
        currentItems: payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
