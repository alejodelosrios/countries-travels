export const filterByName = (state, filterBy, array) => {
    let filterItems;

    // Filtra por nombre
    if (
        filterBy.length < 1 ||
        filterBy === undefined
    ) {
        filterItems = state.countries;
    } else {
        filterItems = array.filter(
            (e) =>
                e.name
                    .toLowerCase()
                    .search(filterBy.toLowerCase()) >= 0
        );
    }
    return filterItems;
}
