export const order = (state, payload) => {
    let orderedItems = state.countries;

    if (payload.orderBy) {
        if (payload.orderBy === "asc") {
            orderedItems = orderedItems.sort((a, b) => {
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
            orderedItems = orderedItems.sort((a, b) => {
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
            orderedItems = orderedItems.sort(
                (a, b) => b.population - a.population
            );
        } else {
            orderedItems = orderedItems.sort(
                (a, b) => a.population - b.population
            );
        }
    }
    return orderedItems;
};
