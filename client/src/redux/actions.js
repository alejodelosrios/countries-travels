import axios from "axios";
//import { fakeData } from "../../src/fakeData";

export const GET_COUNTRIES = "get_countries";
export const SET_IS_MODAL_OPEN = "set_is_modal_open";
export const ORDER_COUNTRIES = "order_countries";
export const FILTER_COUNTRIES = "filter_countries";
export const SET_ITEMS_PER_PAGE = "set_items_per_page";
export const SET_PAGE_CURRENT_ITEMS = "set_page_current_items";
export const SEARCH_COUNTRIES = "search_countries";
export const GET_COUNTRY_BY_ID = "get_country_by_id";
export const GET_COUNTRY_BY_NAME = "get_country_by_name";

export const get_countries = () => async (dispatch) => {
  try {
    let response = await axios.get(`/countries`);
    return dispatch({ type: GET_COUNTRIES, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const get_country_by_name =
  (filtering_and_ordering) => async (dispatch) => {
    try {
      let { data } = await axios.get(
        `/countries?name=${filtering_and_ordering.byName}`
      );
      console.log("Respuesta: ", data);
      return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: { data, filtering_and_ordering },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getCountryById = (id) => async (dispatch) => {
  try {
    let response = await axios.get(`/countries/${id}`);
    console.log("Respuesta:", response.data);
    return dispatch({ type: GET_COUNTRY_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
export const save_activity = (data) => async (dispatch) => {
  console.log("Data enviada:", data);
  try {
    let res = await axios.post("/activity", data);

    // Si la respuesta del servidor es un error
    if (res.data.hasOwnProperty("error")) {
      // Mando el mensaje de error capitalizado y el tipo de mensaje "error"
      return dispatch({
        type: SET_IS_MODAL_OPEN,
        payload: {
          val: true,
          msg: res.data.error.errors[0].message.replace(/^\w/, (c) =>
            c.toUpperCase()
          ),
          type: "error",
        },
      });
    } else {
      // De lo contrario es que la  actividad se creo satisfactoriamente
      // Mando el mensaje de exito y el tipo de  mensaje "success"
      return dispatch({
        type: SET_IS_MODAL_OPEN,
        payload: {
          val: true,
          msg: "Activiy created successfully",
          type: "success",
        },
      });
    }
  } catch (e) {
    // Si hay algun  error en la ruta
    console.log(e);
    return dispatch({
      type: SET_IS_MODAL_OPEN,
      payload: {
        val: true,
        msg: "Error, We can't create the recipe",
        type: "error",
      },
    });
  }
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

export const setIsModalOpen = (data) => {
  return { type: SET_IS_MODAL_OPEN, payload: data };
};
