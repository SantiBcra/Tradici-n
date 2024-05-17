import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getCortes, editHaircut, deleteHaircut, getCount} from "../Redux/actions/actions"
import { useState } from "react";
import Swal from "sweetalert2";

function Dashboard() {
  
const dispatch = useDispatch()
const allCuts = useSelector(state => state.cortesData)


const [filter, setFilter] = useState('');
const [sortType, setSortType] = useState('');



    const handleFilterChange = (peluquero) => {
        setFilter(peluquero);
      };
    const handleSortChange = (type) => {
        
        setSortType(type);
      };



      let filteredData = filter ? allCuts.filter(item => item.peluquero === filter) : allCuts;    
 // Aplicar orden a los datos
 if (sortType === 'fecha') {
    filteredData.sort((a, b) => {
      const dateA = new Date(a.fecha);
      const dateB = new Date(b.fecha);
      return dateB - dateA;
    });
  } else if (sortType === 'ultimoMes') {
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    filteredData = filteredData.filter(item => {
      const date = new Date(item.fecha);
      return date >= lastMonth;
    });
  } else if (sortType === 'ultimoDia') {
    const today = new Date();
    filteredData = filteredData.filter(item => {
      const date = new Date(item.fecha);
      return date >= today;
    });
  }


useEffect(()=>{
dispatch (getCortes())

},[])









const [isEditing, setIsEditing] = useState(false);

const [currentData, setCurrentData] = useState({identifier:'', peluquero: '', pago: '', metodo: '' });





const handleEditClick = (corte) => {
  setCurrentData((prevData) => ({
    ...prevData,
    identifier: corte.id
}));
  setIsEditing(true);
  
};

const handleChange = (e) => {
  const { name, value } = e.target;
  
  setCurrentData({
    ...currentData,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(editHaircut(currentData))
  dispatch(getCortes())
  setIsEditing(false);
  Swal.fire({
    title: "Listo!",
    text: "Corte Actualizado",
    
    icon: "success"
  });

};



    return (<>
    
    <div className="contenedor">
   

      <button onClick={() => handleFilterChange('')}>Todos</button>
      <button onClick={() => handleFilterChange('1')}>1</button>
      <button onClick={() => handleFilterChange('2')}>2</button>
      <button onClick={() => handleFilterChange('3')}>3</button>

      <button onClick={() => handleSortChange('fecha')}>Fecha</button>
      <button onClick={() => handleSortChange('ultimoMes')}>Último Mes</button>
      <button onClick={() => handleSortChange('ultimoDia')}>Último Día</button>

   <div >
   <h2 className="ip1">TRADICIÓN DATABASE</h2>


   {isEditing && (

    
  <form  className='form-haircut' >

<label htmlFor="peluquero">Peluquero</label>
            <select name='peluquero'onChange={handleChange}  className="seleccion" >
            <option   value="no registrado">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
  
    


            <label htmlFor="pago">Pago</label>
            <input onChange={handleChange}   name='pago' className="seleccionn" placeholder="$$$"  type="number" id ="pago"  />


    <label htmlFor="metodo">Metodo de Pago</label>
            <select onChange={handleChange}  name='metodo' className="seleccion" >
            <option  value="no registrado">-</option>
                <option value="efectivo">Efectivo</option>
                <option value="transferencia">Transferencia</option>
                <option value="débito">Débito</option>
                <option value="crédito">Crédito</option>
            </select>

    <button onClick={handleSubmit}>Guardar</button>
    </form> 
)}



     <table className="tabla">
           <thead>
               <tr className="op1">

                   <th>Peluquero </th>
                   <th>Valor</th>
                   <th>Metodo de Pago</th>
                   <th>Mes día y año </th>
                   <th>Hora de Realizacion</th>
                   
                   
               </tr>
           </thead>
           <tbody>

           {filteredData?.map(corte => (
          //   console.log(corte),
          //  <Card  key={corte.id} corte={corte} />

          
    
    <tr key={corte.id} className="carta">
        <td>{corte.peluquero}</td>
        <td >$ {corte.pago}</td>
        <td >- {corte.metodo}</td>
        <td>{corte.fecha} </td>
        <td> {corte.time}</td>
        <td onClick={() => handleEditClick(corte)}> Editar</td>
        

        <td onClick={() => {dispatch(deleteHaircut(corte.id))
  Swal.fire({
    title: "Listo!",
    text: "corte eliminado",
    
    icon: "success"
  });

}} className="botoncito" >Eliminar Dato </td>


    </tr>

  
           
           ))}

          
         </tbody>
      
 </table></div>

</div>

  
    </> );
}

export default Dashboard;