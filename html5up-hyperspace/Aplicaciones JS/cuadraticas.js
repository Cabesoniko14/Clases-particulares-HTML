var a, b, c;
var outputText;

    function chicharronero() {

        a = document.forms["input_form"]["valora"].value;
        b = document.forms["input_form"]["valorb"].value;
        c = document.forms["input_form"]["valorc"].value;

        if (a == 0) {
            outputText = "El valor de a no puede ser 0";
        }  else if (isNaN(a)) {
            outputText = "El valor de a debe ser numérico";
        }  else if (isNaN(b)) {
            outputText = "El valor de b debe ser numérico";
        }  else if (isNaN(c)) {
            outputText = "El valor de c debe ser numérico";
        }  else if ((Math.pow(b,2) - 4*a*c) < 0) {
            outputText = "La ecuación no tiene solución";    
        }  else {

            var x1 = (-b + Math.sqrt((Math.pow(b,2) - 4*a*c))) / (2*a);
            var x2 = (-b - Math.sqrt((Math.pow(b,2) - 4*a*c))) / (2*a);

            outputText = "La solución a la ecuación cuadrática <strong>" + a + "x\u00B2 + " + b + "x + " + c + " = 0 </strong>, son los valores de <strong>x1 = " + x1 + "</strong> y <strong>x2 = " + x2 + "</strong>";

        }

        document.getElementById("output").innerHTML = outputText;


    }