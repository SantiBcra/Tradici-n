
import Swal from "sweetalert2";
import axios from "axios"
import "./kard.css"
const Kard = (promo) => {
  
const nombre = promo.promo.id


  return (
    
    <tr className="carta"  key={promo.id}>
    <td>{promo.promo.client}</td>
    <td>{promo.promo.initialDay}</td>
    <td>{promo.promo.dates}</td>
    <td onClick={() => {axios.delete(`https://server-tradicion.onrender.com/promo/${nombre}`)
  Swal.fire({
    title: "Listo!",
    text: "El corte sera restado en breve!",
    
    icon: "success"
  });
  }} className="botoncito" >Restar uno</td>
  
    </tr>
    
  );
};

export default Kard;
