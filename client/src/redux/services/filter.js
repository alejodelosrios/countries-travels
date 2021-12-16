export const filter = (state, payload, filterType) => {
    let filterItems;
    // payload.byName
    if (state.currentCountries.length > 0) {
        filterItems = state.currentCountries;
    } else {
        filterItems = state.countries;
    }

    if (payload[filterType].length > 0 || payload[filterType] === undefined) {
        if (
            payload[filterType].length < 1 ||
            payload[filterType] === undefined
        ) {
            filterItems = state.countries;
        } else {
            filterItems = state.countries.filter(
                (e) =>
                    e.name
                        .toLowerCase()
                        .search(payload[filterType].toLowerCase()) >= 0
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
