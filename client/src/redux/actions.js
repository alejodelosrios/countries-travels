import axios from "axios";
//import { fakeData } from "../../src/fakeData";

export const GET_COUNTRIES = "get_countries";
export const SAVE_ACTIVITY = "save_activity";
export const ORDER_COUNTRIES = "order_countries";
export const FILTER_COUNTRIES = "filter_countries";
export const SET_ITEMS_PER_PAGE = "set_items_per_page";
export const SET_PAGE_CURRENT_ITEMS = "set_page_current_items";
export const SEARCH_COUNTRIES = "search_countries";
export const GET_COUNTRY_BY_ID = "get_country_by_id";

export const get_countries = () => async (dispatch) => {
  try {
    let response = await axios.get("http://localhost:4000/api/v1/countries");
    return dispatch({ type: GET_COUNTRIES, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
export const getCountryById = (id) => async (dispatch) => {
  try {
    let response = await axios.get(
      `http://localhost:4000/api/v1/countries/${id}`
    );
    console.log("Respuesta:", response.data);
    return dispatch({ type: GET_COUNTRY_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
export const save_activity = (data) => async (dispatch) => {
  console.log("Data enviada:", data);
  await axios
    .post("http://localhost:4000/api/v1/activity", data)
    .then(async () => {
      console.log("entro");
      var countries = await axios.get("http://localhost:4000/api/v1/countries");
      console.log("Respuesta:", countries);
      return dispatch({ type: SAVE_ACTIVITY, payload: countries.data });
    })
    .catch((e) => {
      console.log(e);
    });
};
//export const get_countries = () => {
//let data = fakeData;
////console.log(data);
//return { type: GET_COUNTRIES, payload: data };
//};
export const filter_countries = (data) => {
  return { type: FILTER_COUNTRIES, payload: data };
};
export const order_countries = (data) => {
  return { type: ORDER_COUNTRIES, payload: data };
};
export const set_items_per_page = (data) => {
  return { type: SET_ITEMS_PER_PAGE, payload: data };
};
export const set_page_current_items = (data) => {
  return { type: SET_PAGE_CURRENT_ITEMS, payload: data };
};
export const search_countries = (data) => {
  return { type: SEARCH_COUNTRIES, payload: data };
};
