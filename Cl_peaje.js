export default class Cl_peaje{
    constructor(){
        this.acumTarifas=0,0;
        this.contVehiculos=0;
        this.contTipo1=0;
        this.contTipo2=0;
        this.contTipo3=0;
    }
    procesarP(v){
        this.acumTarifas+=v.tarifa();
        this.contVehiculos++;
        if(v.tipov===1)
            this.contTipo1++;
        if(v.tipov===2)
            this.contTipo2++;
        if(v.tipov===3)
            this.contTipo3++;
    }
    porcentajeTipo1(){
        return this.contTipo1 / this.contVehiculos * 100;
    }
    porcentajeTipo2(){
        return this.contTipo2 / this.contVehiculos * 100;
    }
    porcentajeTipo2(){
        return this.contTipo2 / this.contVehiculos* 100;
    }
    porcentajeTipo3(){
        return this.contTipo3 / this.contVehiculos* 100;
    }
    totalMunicipio(){
       return this.acumTarifas * 0.40;
    }
} 