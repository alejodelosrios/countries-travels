import { filter } from "./filter";
import { order } from "./order";

export const handleCurrentCountries = (state, payload) => {
    let currentCountries = state.currentCountries;
    if (typeof payload === "object") {
        if (payload.byName !== "" && state.orderBy.length > 0) {
            currentCountries = filter(state, payload, "byName");
            currentCountries = order(state, state.orderBy, currentCountries);
            return currentCountries;
        } else {
            currentCountries = filter(state, payload, "byName");
            return currentCountries;
        }
    }

    if (
        state.orderBy.length > 0 ||
        payload === "asc" ||
        payload === "dsc" ||
        payload === "hp" ||
        payload === "sp"
    ) {
        currentCountries = order(state, payload, state.currentCountries);
        return currentCountries;
    }
    // currentCountries = filter(state,payload);
    // currentCountries = order(state);

    //return currentCountries;
};
