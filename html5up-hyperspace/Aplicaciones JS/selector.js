function rellenar(s1, s2){

    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if (s1.value == "FusilesA"){
        var optionA = ["|","kilo|Kilo 141","fal|FAL","m4a1|M4A1","fr|FR 5.56","oden|Oden","m13|M13","scar|FN Scar 17","akmw|AK-47 (MW)","ram|RAM-7","grau|Grau 5.56","amax|CR-56 AMAX","asval|AS-VAL","an94|AN-94","fara|FARA 83", "akcw|AK-47 (CW)","krig|Krig 6","ffar|FFAR 1","xm4|XM4", "qbz|QBZ-83"];
    } else if (s1.value == "Subfusiles"){
        var optionA = ["|","mp5|MP5 (MW)", "mp7|MP7","aug|AUG","p90|P90","opt|Option","opt|Option","opt|Option","opt|Option","opt|Option","opt|Option","opt|Option","opt|Option","opt|Option",];
    } else if (s1.value == "FusilesT"){
        var optionA = ["|","mp5|MP5 (MW)"];
    } else if (s1.value == "RiflesT"){
        var optionA = ["|","mp5|MP5 (MW)"];
    } else if (s1.value == "Ametralladoras"){
        var optionA = ["|","mp5|MP5 (MW)"];
    } else if (s1.value == "Pistolas"){
        var optionA = ["|","mp5|MP5 (MW)"];
    } else if (s1.value == "Ecopetas"){
        var optionA = ["|","mp5|MP5 (MW)"];
    }

    for(var opt in optionA){
        var pair = optionA[opt].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }


}

var outputText;

function info() {

    a = document.forms["input_form"]["slct2"].value;

if (a == "kilo") {
    outputText = "Kilo ! Nuestro programa funciona :D"
} else if (a == "fal") {
    outputText = "Información de la fal"
}

document.getElementById("output").innerHTML = outputText;


}