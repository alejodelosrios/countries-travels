export const filter = (state, payload) => {
  let filterCharacters = state.filterCharacters;

  if (payload.byName && payload.byGender) {
    if (payload.byName.length <= 3) {
      filterCharacters = state.characters.filter(
        (e) => e.gender === payload.byGender
      );
    } else {
      filterCharacters = state.characters.filter(
        (e) =>
          e.name.toLowerCase().search(payload.byName.toLowerCase()) >= 0 &&
          e.gender === payload.byGender
      );
    }
  } else if (!payload.byName && payload.byGender) {
    filterCharacters = state.characters.filter(
      (e) => e.gender === payload.byGender
    );
  } else if (payload.byName && !payload.byGender) {
    if (payload.byName <= 3) {
      filterCharacters = state.characters.filter(
        (e) => e.name.toLowerCase().search(null) >= 0
      );
    } else {
      filterCharacters = state.characters.filter(
        (e) => e.name.toLowerCase().search(payload.byName.toLowerCase()) >= 0
      );
    }
  } else {
    filterCharacters = [];
  }

  return filterCharacters;
};
