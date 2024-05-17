import "./home.css"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import moment from 'moment-timezone';
import { useSelector, useDispatch } from 'react-redux';
import { getCount,sumReset} from "../../Redux/actions/actions"

function Home() {

    const dispatch = useDispatch()

    const count = useSelector(state => state.valor)
    const fecha = useSelector(state => state.fecha)
    

    

    const obtenerFechaActual = () => {
        return moment.tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DD');
      };

    const fechaActual = obtenerFechaActual();

      useEffect(()=>{
        dispatch (getCount())



if (count.date) {
console.log(count.date)
if (count.date !== fechaActual) {
          dispatch(sumReset(resetObject ));
          
        } 



}
    
        
      },[])

     

      const resetObject = {
  date: fechaActual, 
  newNumber: "0",
  identifier: "40bbd294-b223-4a9b-818b-3472f1016b29"
      }



      // useEffect(() => {
      
        
    
      //   if (count !== fechaActual) {
      //     dispatch(sumReset(resetObject ));
          
      //   } 
      // }, [dispatch]);



    return ( 
    <div className="home">
    
   <div className="titular">
    <h3>Cortes del Día:</h3>
    <h3>{count.count}</h3>
    </div>
    
    <div className="botonera">

            <Link to="/FormHaircut"> 
            <button className="boton">Cargar nuevo Dato</button>
            </Link>

            <Link to="/NamesVip">
            <button className="boton">Cientes con promoción</button> 
            </Link>

            <Link to="/FormName">
            <button className="boton">Nueva Promoción</button>
            </Link>

            

    </div>


    </div>);
}

export default Home;