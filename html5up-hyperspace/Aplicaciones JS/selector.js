const img = document.querySelector("img"); 
img.src = "amax.png";

function rellenar(s1, s2){

    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if (s1.value == "FusilesA"){
        var optionA = ["|","kilo.html|Kilo 141","m4a1.html|M4A1","m13.html|M13","ram.html|RAM-7","grau.html|Grau 5.56","amax.html|CR-56 AMAX","asval.html|AS-VAL", "akcw.html|AK-47 (CW)","ffar.html|FFAR 1","xm4.html|XM4"];
    } else if (s1.value == "Subfusiles"){
        var optionA = ["|","mp5mw.html|MP5 (MW)", "aug.html|AUG","p90.html|P90","uzi.html|Uzi","mp5cw.html|MP5 (CW)","bullfrog.html|Bullfrog","mac10.html|MAC-10", "lc10.html|LC-10"];
    } else if (s1.value == "FusilesT"){
        var optionA = ["|","m16.html|M16","augcw.html|AUG (CW)"];
    } else if (s1.value == "RiflesT"){
        var optionA = ["|","kar.html|Kar98k","spr.html|SP-R 208"];
    } else if (s1.value == "Ametralladoras"){
        var optionA = ["|","bruen.html|Bruen MK9","pkm.html|PKM"];
    } else if (s1.value == "RiflesF"){
        var optionA = ["|","hdr.html|HDR", "swiss.html|Swiss K31"];
    } else if (s1.value == "Pistolas"){
        var optionA = ["|","m19.html|M19","sykov.html|Sykov","diamatti.html|Diamatti"];
    } else if (s1.value == "Ecopetas"){
        var optionA = ["|","origin.html|Origin 12","r9.html|R9-0","gallo|Gallo SA12", "streetsweeper.html|Streetsweeper","jak.html|JAK-12"];
    }

    for(var opt in optionA){
        var pair = optionA[opt].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }


}

function link(src) {

    window.location=src;

}