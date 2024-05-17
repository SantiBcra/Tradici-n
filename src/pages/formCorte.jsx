import React, { useEffect, useState } from 'react'
import {postHaircut, sumOne}from "../Redux/actions/actions"
import { useDispatch, useSelector } from 'react-redux'
import Swal from "sweetalert2";
function FormCorte() {


    const dispatch = useDispatch()
    const contador = useSelector(state => state.valor)


    const [state, setState] = useState({
        peluquero:"",
        pago:"",
        metodo:"",
      })


      const [error, setError] = useState({
        peluquero:"cannot be null",
        pago:"cannot be null",
        metodo:"cannot be null", 
      })

      const validate = (stateAux, name)=>{
        if(name==="peluquero"){
          if(stateAux.peluquero==="") setError({...error, peluquero:"incomplete"})
          else setError({...error, peluquero:""})
        }
    
        if(name==="pago"){
          if(stateAux.pago==="") setError({...error, pago:"incomplete"})
          else setError({...error, pago:""})
        }

        if(name==="metodo"){
            if(stateAux.metodo==="") setError({...error, metodo:"incomplete"})
            else setError({...error, metodo:""})
          }
  
    
    
      }




      const handleChange = (event) =>{

          setState({
            ...state,
            [event.target.name]: event.target.value
          })
        
    
        validate({
          ...state,
          [event.target.name]: event.target.value
        }, event.target.name)

      
      }
    

      
    //controlador de submit
      const disableFunction = ()=>{
        let disabledAux = true;
        for(let err in error){  
          if(error[err]==="") disabledAux = false;
          else{
            disabledAux = true;
            break;
          }
        }
        return disabledAux;
      }


      const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(postHaircut(state))
      }


    return ( <>



      <form onSubmit={handleSubmit} className='form-haircut'  >
    
    
    <label htmlFor="peluquero">Peluquero</label>
            <select name='peluquero'onChange={handleChange}  className="seleccion" >
            <option   value="no registrado">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <label className='form-error'>{error.peluquero}</label>


            <label htmlFor="pago">Pago</label>
            <input onChange={handleChange}   name='pago' className="seleccionn" placeholder="$$$"  type="number" id ="pago"  />
<label className='form-error'>{error.pago}</label>


            <label htmlFor="metodo">Metodo de Pago</label>
            <select onChange={handleChange}  name='metodo' className="seleccion" >
            <option  value="no registrado">-</option>
                <option value="efectivo">Efectivo</option>
                <option value="transferencia">Transferencia</option>
                <option value="débito">Débito</option>
                <option value="crédito">Crédito</option>
            </select>
            <label className='form-error'>{error.metodo}</label>
    
    
            <input onClick={() =>{ dispatch(sumOne()) ,

Swal.fire({
  title: "Listo!",
  text: "El corte fue Agregado!",
  
  icon: "success"
});
            }

            } disabled={disableFunction()} type="submit" />

            </form>
    
    </> );
}

export default FormCorte;