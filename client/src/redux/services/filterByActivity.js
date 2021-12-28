export const filterByActivity = (array, activity) => {
    // Filtra por actividad turística
    if (activity !== "all") {
        let newCountriesArray = [];
        for (const country of array) {
            for (const newActivity of country.Activities) {
                if (newActivity.name === activity) {
                    newCountriesArray.push(country);
                }
            }
        }
        array = newCountriesArray;
    }
    //console.log("Resultado filtro: ", array);
    return array;
};
