var odj1={
    nombre:"Helmut",
    apellido:"Brenes",
    edad:20,
    odj2:{
        universidad:"upoli",
        entrada:"7:00 am",
        salida:"8:40",
        odj3:{
            cargo:"auxiliar",
            Hentrada:"7:00 am",
            Hsalida:"3:00 pm",
            odj4:{
            id:"estudiante",
            Cmateria:8,
            horac:"6:00pm",
            horas:"8:40 pm"
        }
        }
    }
}

var arreglo=[]

for(var i=0;i<5;i++){
	if(i==0){
        arreglo[i]=odj1.nombre + " " + odj1.apellido + " " +odj1.edad;
    }
     else if (i==1){
       arreglo[i]=odj2.universidad + " "+ odj2.entrada;
     }



}

for (var i=0;i<4;i++){
    alert(arreglo[i])
};
