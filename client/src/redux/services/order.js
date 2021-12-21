export const order = (array, orderBy) => {
    if (orderBy === "asc") {
        array = array.sort((a, b) => {
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
    } else if (orderBy === "dsc") {
        array = array.sort((a, b) => {
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
    } else if (orderBy === "hp") {
        array = array.sort((b, a) => a.population - b.population);
    } else if (orderBy === "sp") {
        array = array.sort((b, a) => b.population - a.population);
    }

    return array;
};
