export const order = (state, payload, array) => {
    let orderItems;
    let validator;

    if (payload) {
        validator = payload;
    } else {
        validator = state.orderBy;
    }

    if (validator === "asc") {
        orderItems = array.sort((a, b) => {
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
    } else if (validator === "dsc") {
        orderItems = array.sort((a, b) => {
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
    } else if (validator === "hp") {
        orderItems = array.sort((b, a) => a.population - b.population);
    } else if (validator === "sp") {
        orderItems = array.sort((b, a) => b.population - a.population);
    }

    return orderItems;
};
