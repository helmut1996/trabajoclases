	var persona={
					nombre: "Helmut",
  					apellido: "colindres"
					};

				var estudiante={
					nombre: "Lesbia",
 					 apellido: "Lacayo"
					};

				var empleado={
					cargo:"Docente",
					salario: "10,000"
					};


				var clase={
					nombre:"Programacion 2",
					turno:"Sabatino"
					};

				var carrera={
					nombre:"Ingeieria en computacion",
					};

				var arreglo=[];

				for(var i=0 ; i<5 ;i++){
					if(i==0){
					  arreglo[i]=persona.nombre + " " + persona.apellido;
					  }	else  if(i==1){
 						arreglo[i]=estudiante.nombre + " " + estudiante.apellido;
 						}else if(i==2)	{
 							arreglo[i]=empleado.cargo + " "+ empleado.salario;
 						}else if(i==3){
 							arreglo[i]=clase.nombre + " " + clase.turno;
 						}else if(i==4){
 							arreglo[i]=carrera.nombre;
 						}
 
				};

				for(var i=0 ; i<5 ; i++){
 					alert(arreglo[i] );
				};