export const getActivities = (array) => {
    // Obtiene las actividades turísticas y las guarda en un array
    let activities = new Set([]);
    for (const country of array) {
        for (const activity of country.Activities) {
            activities.add(activity.name);
        }
    }
    let activitiesArray = Array.from(activities);
    return activitiesArray;
};
