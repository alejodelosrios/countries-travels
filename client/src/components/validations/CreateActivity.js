export const Validate = (prevFormData) => {
  let errors = {};
  if (prevFormData.name.length < 1) {
    errors.name = "Name field is required";
  } else if (prevFormData.name.length < 5) {
    errors.name = "Name field must have 5 characters minimum";
  }

  if (prevFormData.difficulty === "none") {
    errors.difficulty = "Difficulty field is required";
  }
  if (prevFormData.duration === "none") {
    errors.duration = "Duration field is required";
  }
  return errors;
};
