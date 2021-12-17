import {filterByName} from "./filterByName";
import {filterByContinent} from "./filterByContinent";
import {order} from "./order";

export const handleCurrentCountries = (state, payload) => {
    let currentCountries = state.countries;
    if (typeof payload === "object") {
        // Filtra cuando hay un ordenamiento guardado
        for (let prop in payload) {
            if (prop == "byName") {
                currentCountries = filterByName(state, payload[prop], currentCountries);
            }
            if (prop == "byContinent") {
                currentCountries = filterByContinent(state, payload[prop], currentCountries);
            }
        }
        if(state.orderBy.length >0){
            currentCountries = order(state, payload, currentCountries);
        }
        return currentCountries;
    }

    if (
        payload === "asc" ||
        payload === "dsc" ||
        payload === "hp" ||
        payload === "sp"
    ) {
        for (let prop in state.filterCountries) {
            if (prop === "byName" && state.filterCountries[prop].length >0) {
                currentCountries = filterByName(state, state.filterCountries[prop], currentCountries);
                console.log("entro byname", currentCountries)
            }
            if (prop === "byContinent" && state.filterCountries[prop].length >0) {
                currentCountries = filterByContinent(state, state.filterCountries[prop], currentCountries);
                console.log("entro continent", currentCountries)
            }
        }
        currentCountries = order(state, payload, currentCountries);
        console.log("entro order", currentCountries)
        return currentCountries;
    }
};
