	function suma(n1,n2){
	var n1= parseInt(document.getElementById("num1").value);
    var n2= parseInt(document.getElementById("num2").value);
	suma= n1+n2;
	document.getElementById("res").value=suma;
	}

	function resta(n1,n2){
	var n1= parseInt(document.getElementById("num1").value);
    var n2= parseInt(document.getElementById("num2").value);
	resta= n1-n2;
	document.getElementById("res").value=resta;
	}

	function multiplicacion(n1,n2){
	var n1= parseInt(document.getElementById("num1").value);
    var n2= parseInt(document.getElementById("num2").value);
	multiplicacion= n1*n2;
	document.getElementById("res").value=multiplicacion;
	}

	function division(n1,n2){
	var n1= parseInt(document.getElementById("num1").value);
    var n2= parseInt(document.getElementById("num2").value);
	division= n1/n2;
	document.getElementById("res").value=division;
	}