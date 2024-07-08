export default class Cl_vehiculo {
    constructor(placa,tipov){
        this.placa=placa;
        this.tipov=tipov;
    }
    set placa(p){
        this._placa=p;
    }
    get placa(){
        return this._placa;
    }
    set tipov(tv){
        this._tipov=tv;
    }
    get tipov(){
        return this._tipov;
    }
    tarifa(){
        if(this.tipov==1){
            return  10;
        }
        if (this.tipov==2){
            return 20;
        }
        else return  50;
    }
}