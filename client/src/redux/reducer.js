import {
  ORDER_COUNTRIES,
  GET_COUNTRIES,
  FILTER_COUNTRIES,
  SET_ITEMS_PER_PAGE,
  SET_PAGE_CURRENT_ITEMS,
} from "./actions";

import { filter } from "./services/filter";
import { order } from "./services/order";

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
      let filters = filter(state, payload);
      return {
        ...state,
        filterCountries: filters,
        currentItems: filters.slice(0, state.itemsPerPage),
      };
    }
    case ORDER_COUNTRIES: {
      let ordered = order(state, payload);
      return {
        ...state,
        countries: ordered,
        currentItems: ordered.slice(0, state.itemsPerPage),
        currentPage: 1,
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
