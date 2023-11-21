import {
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  ORDER_ALFABETICO,
  ORDER_POBLACION,
} from "./actions";

let initialState = {
  allCountries: [],
  copyCountries: [],
  allActivities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        copyCountries: action.payload,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload,
      };

    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        allCountries: action.payload,
      };
    case FILTER_BY_CONTINENT:
      const continent = action.payload;
      let filteredResults;
      if (continent === "Todos") {
        filteredResults = state.copyCountries;
      } else {
        filteredResults = state.copyCountries.filter(
          (pais) => pais.continente === continent
        );
      }

      return {
        ...state,
        allCountries: filteredResults,
      };
    case FILTER_BY_ACTIVITY:
      const activity = action.payload;

      const filterActivities = state.copyCountries.filter((pais) => {
        return pais.activities?.some((act) => {
          return act.nombre === activity;
        });
      });

      return {
        ...state,
        allCountries: filterActivities,
      };
    case ORDER_ALFABETICO:
      const allCoun = [...state.allCountries];

      allCoun.sort((a, b) => {
        const nameA = a.nombre;
        const nameB = b.nombre;
        if (action.payload === "A-Z") {
          if (nameA > nameB) return 1;
          if (nameA < nameB) return -1;
          return 0;
        } else if (action.payload === "Z-A") {
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        }
        return 0;
      });
      return {
        ...state,
        allCountries: allCoun,
      };
    case ORDER_POBLACION:
      const countriesAll = [...state.allCountries];
      const orderType = action.payload;
      console.log(orderType);

      countriesAll.sort((a, b) => {
        const populationA = a.poblacion;
        const populationB = b.poblacion;

        if (orderType === "-") {
          return populationA - populationB;
        } else if (orderType === "+") {
          return populationB - populationA;
        }

        return 0;
      });
      return {
        ...state,
        allCountries: countriesAll,
      };
    default:
      return state;
  }
};

export default rootReducer;
