import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_ALFABETICO = "ORDER_ALFABETICO";
export const ORDER_POBLACION = "ORDER_POBLACION";

export function getCountries() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/");
    return dispatch({
      type: GET_COUNTRIES,
      payload: response.data,
      //el payload es la info( la data )
    });
  };
}

export function getActivities() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/activities");
    return dispatch({
      type: GET_ACTIVITIES,
      payload: response.data,
    });
  };
}

export function getCountriesByName(nombre) {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/countries?nombre=${nombre}`
      );
      return dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      return window.alert(error.message);
    }
  };
}
export function filterByContinent(continente) {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continente,
  };
}

export function filterByActivity(activity) {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  };
}

export const orderAlfabetico = (order) => {
  return {
    type: ORDER_ALFABETICO,
    payload: order,
  };
};

export const orderPoblacion = (order) => {
  return {
    type: ORDER_POBLACION,
    payload: order,
  };
};
