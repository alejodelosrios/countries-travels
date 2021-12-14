export const filter = (state, payload) => {
    let filterItems;
    if (state.filterCountries.length > 0) {
        filterItems = state.filterCountries;
    } else {
        filterItems = state.countries;
    }

    if (payload.orderBy) {
        if (payload.orderBy === "asc") {
            filterItems = filterItems.sort((a, b) => {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        } else if (payload.orderBy === "dsc") {
            filterItems = filterItems.sort((a, b) => {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        } else if (payload.orderBy === "hp") {
            filterItems = filterItems.sort(
                (a, b) => b.population - a.population
            );
        } else {
            filterItems = filterItems.sort(
                (a, b) => a.population - b.population
            );
        }
    }
    return filterItems;
};
//if (payload.byName && payload.byGender) {
//if (payload.byName.length <= 3) {
//filterCountries = state.characters.filter(
//(e) => e.gender === payload.byGender
//);
//} else {
//filterCountries = state.characters.filter(
//(e) =>
//e.name.toLowerCase().search(payload.byName.toLowerCase()) >= 0 &&
//e.gender === payload.byGender
//);
//}
//} else if (!payload.byName && payload.byGender) {
//filterCountries = state.characters.filter(
//(e) => e.gender === payload.byGender
//);
//} else if (payload.byName && !payload.byGender) {
//if (payload.byName <= 3) {
//filterCountries = state.characters.filter(
//(e) => e.name.toLowerCase().search(null) >= 0
//);
//} else {
//filterCountries = state.characters.filter(
//(e) => e.name.toLowerCase().search(payload.byName.toLowerCase()) >= 0
//);
//}
//} else {
//filterCountries = [];
//}

//return filterCountries;
