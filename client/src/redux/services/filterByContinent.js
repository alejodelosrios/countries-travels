export const filterByContinent = (array, continent) => {
    // Filtra por continente
    if (continent !== "all") {
        array = array.filter((e) => e.continent === continent);
    }
    return array;
};
