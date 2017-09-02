	var persona={
					nombre: "Helmut",
  					apellido: "colindres",
                    edad:20
					};

				var estudiante={
					nombre: "Lesbia",
 					 apellido: "Lacayo",
                    edad:40
					};

				var empleado={
					cargo:"Docente",
					salario: "10,000"
                    
					};


				var clase={
					nombre:"Programacion2",
					turno:"Sabatino"
					};

				var carrera={
					nombre:"Ingeieria en computacion",
                    año:"4to"
					};

				var arreglo=[];

				for(var i=0 ; i<5 ;i++){
					if(i==0){
					  arreglo[i]=persona.nombre + " " + persona.apellido+ " "+ persona.edad;
					  }	else  if(i==1){
 						arreglo[i]=estudiante.nombre + " " + estudiante.apellido + " " + estudiante.edad;
 						}else if(i==2)	{
 							arreglo[i]=empleado.cargo + " "+ empleado.salario;
 						}else if(i==3){
 							arreglo[i]=clase.nombre + " " + clase.turno;
 						}else if(i==4){
 							arreglo[i]=carrera.nombre + " "+ carrera.año;
 						}
 
				};

				for(var i=0 ; i<5 ; i++){
 					alert(arreglo[i] );
				};