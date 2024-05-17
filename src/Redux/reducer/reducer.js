import { createSlice } from '@reduxjs/toolkit';
import {GET_COUNT,GET_HAIRCUTS, GET_PROMOS, COUNT_MORE,COUNT_RESET,COUNT_INIT} from '../types/types.js';
 import moment from 'moment-timezone';

 const obtenerFechaActual = () => {
  return moment.tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DD');
};



const initialState = {
cortesData: [],
promosData: [],
valor: {},
fecha: obtenerFechaActual(),

};



export default function reducer(state = initialState, action) {

switch (action.type) {


case GET_HAIRCUTS:
 return {
   ...state,
   cortesData: [...action.payload]
};


 case GET_PROMOS:
 return {
   ...state,
   promosData: [...action.payload]
};

case COUNT_MORE:
 return {
   ...state,
   valor: state.valor + 1,
};

case COUNT_RESET:
 return {
   ...state,
   valor: 0, fecha: obtenerFechaActual()
};

case COUNT_INIT:
 return {
   ...state,
   valor: [...action.payload.valor],
   fecha: action.payload.fecha
};

case GET_COUNT:
 return {
   ...state,
   valor: action.payload[0],
   fecha: obtenerFechaActual()
};


default:
  return state;
}
}


