import axios from "axios";
//import { fakeData } from "../../src/fakeData";

export const GET_COUNTRIES = "get_countries";
export const FILTER_COUNTRIES = "filter_countries";

export const get_countries = () => async (dispatch) => {
  let response = await axios.get("http://localhost:4000/api/v1/countries");
  return dispatch({ type: GET_COUNTRIES, payload: response.data });
};
//export const get_countries = () => {
//let data = fakeData;
////console.log(data);
//return { type: GET_COUNTRIES, payload: data };
//};
export const filter_countries = (data) => {
  return { type: FILTER_COUNTRIES, payload: data };
};
