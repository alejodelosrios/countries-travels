//import { filterByName } from "./filterByName";
import { filterByContinent } from "./filterByContinent";
import { filterByActivity } from "./filterByActivity";
import { order } from "./order";

export const handleCurrentCountries = (countries, payload) => {
    let currentCountries = countries;

    // Llama al Filtro por nombre
    //if (payload.byName.length > 0) {
    //currentCountries = filterByName(currentCountries, payload.byName);
    //}
    // LLama al Filtro por continente
    if (payload.byContinent.length > 0) {
        currentCountries = filterByContinent(
            currentCountries,
            payload.byContinent
        );
    }
    // Llama al filtro por acitividad turística
    if (payload.byActivity.length > 0) {
        currentCountries = filterByActivity(
            currentCountries,
            payload.byActivity
        );
    }
    // Llama al ordenamiento
    if (payload.orderBy.length > 0) {
        currentCountries = order(currentCountries, payload.orderBy);
    }
    return currentCountries;
};
