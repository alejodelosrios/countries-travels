import { filterByName } from "./filterByName";
import { filterByContinent } from "./filterByContinent";
import { order } from "./order";

export const handleCurrentCountries = (countries, payload) => {
    let currentCountries = countries;

    if (payload.byName.length > 0) {
        currentCountries = filterByName(currentCountries, payload.byName);
    }

    if (payload.byContinent.length > 0) {
        currentCountries = filterByContinent(
            currentCountries,
            payload.byContinent
        );
    }

    if (payload.orderBy.length > 0) {
        currentCountries = order(currentCountries, payload.orderBy);
    }
    return currentCountries;
};
