import { GET_COUNTRIES, FILTER_COUNTRIES } from "./actions";

import { filter } from "./services/filter";

const initialState = {
  countries: [],
  filterCountries: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: payload,
      };
    }
    case FILTER_COUNTRIES: {
      ///local
      return {
        ...state,
        filterCountries: filter(state, payload),
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
