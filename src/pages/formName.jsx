import React, {  useState } from 'react'
import {postVip}from "../Redux/actions/actions"
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";




function FormName() {
   
    const dispatch = useDispatch()

    const [state, setState] = useState({
        client:"",
      })

      const [error, setError] = useState({
        client:"cannot be null",
         
      })

      const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(postVip(state))
        Swal.fire({
          title: "Listo!",
          text: "El cliente fue agregado con 4 cortes disponibles!",
          
          icon: "success"
        });
      }


      const handleChange = (event) =>{

        setState({
          ...state,
          [event.target.name]: event.target.value
        })
      

        const validate = (stateAux, name)=>{
           
              if(stateAux.client==="") setError({...error, client:"incomplete"})
              else setError({...error, client:""})
            
          }

  
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

      
    return (

        <div className="contenedor" >


            <form onSubmit={handleSubmit} className='form-haircut' >
        
        



                            {/* TEXT INPUT PAGO  */}
            <label htmlFor="client">Nombre y Apellido</label>
            <input name='client' onChange={handleChange}  className="seleccion" placeholder="cliente"  type="text" id ="client"  />
            <label className='form-error'>{error.client}</label>



            <input disabled={disableFunction()} type="submit" />

            

            </form>

        {/* <div>{JSON.stringify(watch(), null, 2)}</div> */}










{/* 
        <table>
              <thead>
                  <tr>
                      <th>Peluquero</th>
                      <th>Valor</th>
                      <th>Metodo de Pago</th>
                      <th>Fecha </th>
                      
                  </tr>
              </thead>
              
    </table> */}













        </div>


    )
        
        
    }
export default FormName;