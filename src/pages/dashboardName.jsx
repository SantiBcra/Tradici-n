
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import Kard from "../components/05 kard/kard"
import {getPromos} from "../Redux/actions/actions"


function DashboardName() {

    const dispatch = useDispatch()
    const allPromos = useSelector(state => state.promosData)


    useEffect(()=>{
        dispatch (getPromos())
        },[])
        
console.log(allPromos)

    return ( <> 
    <div className="contenedor">
    <h2 className="ip" >Clientes con Promo</h2>

    <div >
   
   
      <table>
          <thead>
              <tr className="op">
                  <th>Cliente </th>
                  <th>Fecha de inicio de la Promo</th>
                  
                  <th>Cortes Restantes</th>
                  
              </tr>
          </thead>

          <tbody>

          {allPromos?.map(promo => (
          
          <Kard  key={promo.id} promo={promo} />
          
          
          ))}
          
        </tbody>
    </table>


</div>
</div>

</> 
);
}

export default DashboardName;