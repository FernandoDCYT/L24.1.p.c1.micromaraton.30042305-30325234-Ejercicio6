
import Cl_peaje from "./Cl_peaje.js";
import Cl_vehiculo from "./Cl_vehiculo.js";
let vehiculo1=new Cl_vehiculo ("KBS11E",1);
let vehiculo2=new Cl_vehiculo ("XXES12",2);
let vehiculo3=new Cl_vehiculo ("YXZQE1",3);
let vehiculo4=new Cl_vehiculo ("KBS23E",1);

let peaje= new Cl_peaje();

peaje.procesarP(vehiculo1);
peaje.procesarP(vehiculo2);
peaje.procesarP(vehiculo3);
peaje.procesarP(vehiculo4);

let salida=document.getElementById("salida");
salida.innerHTML=`
<br>Vehiculo con placa ${vehiculo1.placa} su tarifa a pagar es de: ${vehiculo1.tarifa()}$
<br>Vehiculo con placa ${vehiculo2.placa} su tarifa a pagar es de: ${vehiculo2.tarifa()}$
<br>Vehiculo con placa ${vehiculo3.placa} su tarifa a pagar es de: ${vehiculo3.tarifa()}$
<br>Vehiculo con placa ${vehiculo4.placa} su tarifa a pagar es de: ${vehiculo4.tarifa()}$ <br> 
<br>Porcentaje de vehiculos tipo particular ${peaje.porcentajeTipo1()}%
<br>Porcentaje de vehiculos tipo transporte ${peaje.porcentajeTipo2()}%
<br>poercentaje de vehiculos tipo carga ${peaje.porcentajeTipo3()}%
<br>Monto total del municipio: ${peaje.totalMunicipio()} Bs
`



