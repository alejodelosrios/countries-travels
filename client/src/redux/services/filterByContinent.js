export const filterByContinent = (state, filterBy, array) => {
    let filterItems;

    filterItems = array.filter((e) => e.continent === filterBy);
    return filterItems;
}
