class manejoError{
    constructor(color){
        this.color = color;
        elem.addEventListener("click", this.manejaClick.bind(this));
    }
//currentTarget mirar
    pulsadoError(){
        console.log("error");
    }
    pulsadoOk(){
        console.log("error");
    }
    manejaClick(e){
        if(this.color == "rojo"){
            this.pulsadoError();
        }else{
            this.pulsadoOk();
        }
    }
}