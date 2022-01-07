import {
  ORDER_COUNTRIES,
  GET_COUNTRIES,
  FILTER_COUNTRIES,
  SET_ITEMS_PER_PAGE,
  SET_PAGE_CURRENT_ITEMS,
  SEARCH_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_COUNTRY_BY_NAME,
  SET_IS_MODAL_OPEN,
} from "./actions";

import { handleCurrentCountries } from "./services/handleCurrentCountries";
import { filterByName } from "./services/filterByName";
import { getActivities } from "./services/getActivities";
import { filterByActivity } from "./services/filterByActivity";
import { order } from "./services/order";

const initialState = {
  activities: [],
  countryById: {},
  countries: [],
  continents: [],
  currentCountries: [],
  searchCountries: [],

  filtering_and_ordering: {
    byName: "",
    byContinent: "all",
    orderBy: "",
    byActivity: "",
  },

  currentPage: 1,
  itemsPerPage: 10,
  currentItems: [],

  loading: true,
  isModalOpen: { val: false, msg: "", type: "" },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES: {
      let activities = getActivities(payload);
      return {
        ...state,
        activities: activities,
        // Guardo todos los continentes en un array sin repeticiones
        continents: [
          ...new Set(Array.from(payload, ({ continent }) => continent)),
        ],
        countries: payload,
        currentCountries: payload,
        searchCountries: payload,
        currentItems: payload.slice(0, state.itemsPerPage),
        loading: false,
      };
    }
    case GET_COUNTRY_BY_NAME: {
      let currentCountries = payload.data;

      // Esta parte la puedo refactorizar llevandola al
      // handleCurrentCountries

      // Llama al filtro por acitividad turística
      if (payload.filtering_and_ordering.byActivity.length > 0) {
        currentCountries = filterByActivity(
          currentCountries,
          payload.byActivity
        );
      }
      // Llama al ordenamiento
      if (payload.filtering_and_ordering.orderBy.length > 0) {
        currentCountries = order(currentCountries, payload.orderBy);
      }

      return {
        ...state,
        filtering_and_ordering: payload.filtering_and_ordering,
        currentCountries: currentCountries,
        currentItems: currentCountries.slice(0, state.itemsPerPage),
        currentPage: 1,
      };
    }
    case GET_COUNTRY_BY_ID: {
      return {
        ...state,
        countryById: payload,
      };
    }
    case SET_IS_MODAL_OPEN: {
      return {
        ...state,
        isModalOpen: payload,
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
    case SEARCH_COUNTRIES: {
      let filtered = filterByName(state.countries, payload);
      return {
        ...state,
        searchCountries: filtered,
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
