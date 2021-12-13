import {
  GET_COUNTRIES,
  FILTER_COUNTRIES,
  SET_ITEMS_PER_PAGE,
  SET_PAGE_CURRENT_ITEMS,
} from "./actions";

import { filter } from "./services/filter";

const initialState = {
  countries: [],
  filterCountries: [],
  currentPage: 1,
  itemsPerPage: 10,
  currentItems: [],
  continents: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        continents: [
          ...new Set(Array.from(payload, ({ continent }) => continent)),
        ],
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
    case SET_ITEMS_PER_PAGE: {
      return {
        ...state,
        itemsPerPage: payload,
      };
    }
    case SET_PAGE_CURRENT_ITEMS: {
      let currentPage = payload;
      let indexOfLastItem = currentPage * state.itemsPerPage;
      let indexOfFirstItem = indexOfLastItem - state.itemsPerPage;
      let currentItems = state.countries.slice(
        indexOfFirstItem,
        indexOfLastItem
      );
      return {
        ...state,
        currentPage: payload,
        currentItems: currentItems,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
