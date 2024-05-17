 import {GET_HAIRCUTS, GET_PROMOS,COUNT_MORE,COUNT_RESET,COUNT_INIT ,GET_COUNT} from "../types/types";
import axios from 'axios'

export const postHaircut = (state)=> async dispatch => {
   
    try {
      const {data} = await axios.post('https://server-tradicion.onrender.com/admin/haircut',state)
    } 
    catch (error) {
       throw Error(error.message);
      }
    }



    export const postVip = (state)=> async dispatch => {
   
      try {
        const {data} = await axios.post('https://server-tradicion.onrender.com/promo/',state)
      } 
      catch (error) {
         throw Error(error.message);
        }
      }


  

  export function getCortes(){
  return async function (dispatch){
    
    try {
      const {data} = await axios.get('https://server-tradicion.onrender.com/admin/haircut')

      return dispatch({type: GET_HAIRCUTS, payload: data});
     
    } 
    
    catch (error) {
       throw Error(error.message);
      }
    }
  }
  
  export function getPromos(){
    return async function (dispatch){
      
      try {
        const {data} = await axios.get('https://server-tradicion.onrender.com/promo/')
  
        return dispatch({type: GET_PROMOS, payload: data});
       
      } 
      
      catch (error) {
         throw Error(error.message);
        }
      }
    }


    
    export const editHaircut = (currentData)=> async dispatch => {
   
      try {
        const {data} = await axios.put('https://server-tradicion.onrender.com/admin/haircut',currentData)
        return dispatch
      } 
      catch (error) {
         throw Error(error.message);
        }
      }



      export const deleteHaircut = (id)=> async dispatch => {
   
        try {
          const {data} = await axios.delete(`https://server-tradicion.onrender.com/admin/haircut${id}`)
          return dispatch
        } 
        catch (error) {
           throw Error(error.message);
          }
        }



        export const sumOne = ()=> async dispatch => {
         
   
            return dispatch({type: COUNT_MORE});
          } 

        


          export const sumReset = (resetObject )=> async dispatch => {
            try {
          const {data} = await axios.put("https://server-tradicion.onrender.com/count/",resetObject)
          return dispatch
        } 
        catch (error) {
           throw Error(error.message);
          }
        }
   

        //   export const sumCreate = (action)=> async dispatch => {
         
        //     try {
        //       const {data} = await axios.put("http://localhost:3001/count/",resetObject)
        //       return dispatch
        //     } 
        //     catch (error) {
        //        throw Error(error.message);
        //   } 
        // }
       

          export function getCount(){
            return async function (dispatch){
              
              try {
                const {data} = await axios.get('https://server-tradicion.onrender.com/count/')
          
                return dispatch({type: GET_COUNT, payload: data});
               
              } 
              
              catch (error) {
                 throw Error(error.message);
                }
              }
            }
            