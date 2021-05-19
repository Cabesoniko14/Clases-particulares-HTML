var ca, cb;
var outputText;

    function catetos() {

        ca = document.forms["input_form"]["valora"].value;
        cb = document.forms["input_form"]["valorb"].value;

        if (ca <= 0) {
            outputText = "El valor de los catetos debe ser positivo";
        } else if (cb <= 0) {
            outputText = "El valor de los catetos debe ser positivo";
        } else if (isNaN(ca)) {
            outputText = "El valor de los catetos debe ser numérico";
        }  else if (isNaN(cb)) {
            outputText = "El valor de los catetos debe ser numérico";
        }   else {

            y = Math.sqrt( (Math.pow(ca, 2) + Math.pow(cb, 2)) );

            outputText = "El valor de la hipotenusa es:  <strong>" + y;
        }

        document.getElementById("output").innerHTML = outputText;


    }
