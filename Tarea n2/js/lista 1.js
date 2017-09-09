    var arreglo=[];
var i=0;
var salto="<br>";
var lista="";
function guardar(nombre,numero){
    
    var nombre= document.getElementById("nom").value;
    var numero=document.getElementById("num").value;
    if(nombre==""){
    document.getElementById("nom").focus();
    
    }
    else{
        if(numero==""){
        document.getElementById("num").focus();
    }else{
       arreglo[i]=nombre + " "+numero + salto;

    document.getElementById("nom").value="";
    document.getElementById("num").value="";
    document.getElementById("nom").focus;
        alert("Datos Guardados");
    
    }
}
    
}

function mostrar(){
    for(var i=0;i<arreglo.length;i++){
        lista=lista + arreglo[i];
    }

 document.getElementById("caja").innerHTML=lista;
    
}
