var c, h;
var outputText;

    function hipotenusa() {

        c = document.forms["input_form2"]["cateto"].value;
        h = document.forms["input_form2"]["hipotenusa"].value;

        if (c <= 0) {
            outputText = "El valor del cateto debe ser positivo";
        } else if (h <= 0) {
            outputText = "El valor de la hipotenusa debe ser positivo";
        } else if (isNaN(c)) {
            outputText = "El valor del cateto debe ser numérico";
        }  else if (isNaN(h)) {
            outputText = "El valor de la hipotenusa debe ser numérica";
        }  else if (h<=c) {
            outputText = "Los valores son incorrectos (hipotenusa debe ser mayor al cateto)";
        }  else {

            y = Math.sqrt( (Math.pow(h, 2) - Math.pow(c, 2)) );

            outputText = "El valor del cateto faltante es:  <strong>" + y;
        }

        document.getElementById("output2").innerHTML = outputText;


    }
