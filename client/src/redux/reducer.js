import {
  ORDER_COUNTRIES,
  GET_COUNTRIES,
  FILTER_COUNTRIES,
  SET_ITEMS_PER_PAGE,
  SET_PAGE_CURRENT_ITEMS,
  SAVE_ACTIVITY,
} from "./actions";

import { handleCurrentCountries } from "./services/handleCurrentCountries";

const initialState = {
  activities: [],
  countries: [],
  currentCountries: [],
  filtering_and_ordering: {
    byName: "",
    byContinent: "",
    orderBy: "",
  },
  currentPage: 1,
  itemsPerPage: 10,
  currentItems: [],
  continents: [],
  loading: true,
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
        currentCountries: payload,
        currentItems: payload.slice(0, state.itemsPerPage),
        loading: false,
      };
    }
    case SAVE_ACTIVITY: {
      return {
        ...state,
        activities: Array.from(payload.activities, ({ name }) => name),
      };
    }
    case FILTER_COUNTRIES: {
      let filtered = handleCurrentCountries(state.countries, payload);

      return {
        ...state,
        filtering_and_ordering: payload,
        currentCountries: filtered,
        currentItems: filtered.slice(0, state.itemsPerPage),
        currentPage: 1,
      };
    }
    case ORDER_COUNTRIES: {
      let ordered = handleCurrentCountries(state.countries, payload);
      return {
        ...state,
        filtering_and_ordering: payload,
        currentCountries: ordered,
        currentItems: ordered.slice(0, state.itemsPerPage),
        currentPage: 1,
      };
    }
    case SET_ITEMS_PER_PAGE: {
      return {
        ...state,
        itemsPerPage: +payload,
        currentItems: state.currentCountries.slice(0, +payload),
      };
    }
    case SET_PAGE_CURRENT_ITEMS: {
      let currentPage = payload;
      let indexOfLastItem = currentPage * state.itemsPerPage;
      let indexOfFirstItem = indexOfLastItem - state.itemsPerPage;
      let currentItems = state.currentCountries.slice(
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
