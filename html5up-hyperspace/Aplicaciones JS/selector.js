const img = document.querySelector("img"); 
img.src = "amax.png";

function rellenar(s1, s2){

    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if (s1.value == "FusilesA"){
        var optionA = ["|","kilo.html|Kilo 141","fal.html|FAL","m4a1.html|M4A1","fr.html|FR 5.56","oden.html|Oden","m13.html|M13","scar.html|FN Scar 17","akmw.html|AK-47 (MW)","ram.html|RAM-7","grau.html|Grau 5.56","amax.html|CR-56 AMAX","asval.html|AS-VAL","an94.html|AN-94","fara.html|FARA 83", "akcw.html|AK-47 (CW)","krig.html|Krig 6","ffar.html|FFAR 1","xm4.html|XM4", "qbz.html|QBZ-83"];
    } else if (s1.value == "Subfusiles"){
        var optionA = ["|","mp5mw.html|MP5 (MW)", "mp7.html|MP7","aug.html|AUG","p90.html|P90","bizon.html|PP19 Bizon","uzi.html|Uzi","mp5cw.html|MP5 (CW)","milano.html|Milano 821","ak74.html|AK-74u","ksp.html|KSP-45","bullfrog.html|Bullfrog","mac10.html|MAC-10"];
    } else if (s1.value == "FusilesT"){
        var optionA = ["|","type.html|Type 63","m16.html|M16","augcw.html|AUG (CW)","dmr.html|DMR 14"];
    } else if (s1.value == "RiflesT"){
        var optionA = ["|","ebr.html|EBR-14","kar.html|Kar98k","spr.html|SP-R 208","ballesta.html|Ballesta","carbine.html|Mk2 Carbine"];
    } else if (s1.value == "Ametralladoras"){
        var optionA = ["|","bruen.html|Bruen MK9","finn.html|FiNN","m91.html|M91","sa87.html|SA87","mg34.html|MG34","pkm.html|PKM","holger.html|Holger-26","stoner.html|Stoner 63","rpd.html|RPD","m60.html|M60"];
    } else if (s1.value == "RiflesF"){
        var optionA = ["|","hdr.html|HDR","dragunov.html|Dragunov","ax50.html|AX-50","rytec.html|Rytec AMR","pellington.html|Pellington 703","tundra.html|LW3-Tundra","m82.html|M82"];
    } else if (s1.value == "Pistolas"){
        var optionA = ["|","50gs.html|.50GS","m19.html|M19","x16.html|X16","1911mw.html|1911 (MW)","357.html|.357","renetti.html|Renetti","sykov.html|Sykov","1911cw.html|1911 (CW)","magnum.html|Magnum","diamatti.html|Diamatti"];
    } else if (s1.value == "Ecopetas"){
        var optionA = ["|","origin.html|Origin 12","modelo.html|Modelo 680","725.html|725","r9.html|R9-0","vlk.html|VLK-Rogue","hauer.html|Hauer 77","gallo|Gallo SA12", "streetsweeper.html|Streetsweeper","jak.html|JAK-12"];
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