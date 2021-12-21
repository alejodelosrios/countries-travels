export const filterByName = (array, byName) => {
    // Filtra por nombre
    array = array.filter(
        (e) => e.name.toLowerCase().search(byName.toLowerCase()) >= 0
    );
    return array;
};
