function rellenar(s1, s2){

    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if (s1.value == "FusilesA"){
        var optionA = ["|","kilo|Kilo 141","fal|FAL","m4a1|M4A1","fr|FR 5.56","oden|Oden","m13|M13","scar|FN Scar 17","akmw|AK-47 (MW)","ram|RAM-7","grau|Grau 5.56","amax|CR-56 AMAX","asval|AS-VAL","an94|AN-94","fara|FARA 83", "akcw|AK-47 (CW)","krig|Krig 6","ffar|FFAR 1","xm4|XM4", "qbz|QBZ-83"];
    } else if (s1.value == "Subfusiles"){
        var optionA = ["|","mp5mw|MP5 (MW)", "mp7|MP7","aug|AUG","p90|P90","bizon|PP19 Bizon","uzi|Uzi","mp5cw|MP5 (CW)","milano|Milano 821","ak74|AK-74u","ksp|KSP-45","bullfrog|Bullfrog"];
    } else if (s1.value == "FusilesT"){
        var optionA = ["|","type|Type 63","m16|M16","augcw|AUG","dmr|DMR 14"];
    } else if (s1.value == "RiflesT"){
        var optionA = ["|","ebr|EBR-14","kar|Kar98k","spr|SP-R 208","ballesta|Ballesta","carbine|Mk2 Carbine"];
    } else if (s1.value == "Ametralladoras"){
        var optionA = ["|","bruen|Bruen MK9","finn|FiNN","m91|M91","sa87|SA87","mg34|MG34","pkm|PKM","holger|Holger-26","stoner|Stoner 63","rpd|RPD","m60|M60"];
    } else if (s1.value == "RiflesF"){
        var optionA = ["|","hdr|HDR","dragunov|Dragunov","ax50|AX-50","rytec|Rytec AMR","pellington|Pellington 703","tundra|LW3-Tundra","m82|M82"];
    } else if (s1.value == "Pistolas"){
        var optionA = ["|",".50gs|.50GS","m19|M19","x16|X16","1911mw|1911 (MW)",".357|.357","renetti|Renetti","sykov|Sykov","1911cw|1911 (CW)","magnum|Magnum","diamatti|Diamatti"];
    } else if (s1.value == "Ecopetas"){
        var optionA = ["|","origin|Origin 12","modelo|Modelo 680","725|725","r9|R9-0","vlk|VLK-Rogue","hauer|Hauer 77","gallo|Gallo SA12"];
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
} else if (a == "m4a1") {
    outputText = "Información de M4A1"
} else if (a == "fr") {
    outputText = "Información de fr 5.56"
} else if (a == "oden") {
    outputText = "Información de Oden"
} else if (a == "m13") {
    outputText = "Información de M13"
} else if (a == "scar") {
    outputText = "Información de SCAR"
} else if (a == "akmw") {
    outputText = "Información de la AK de Modern Warfare"
} else if (a == "ram") {
    outputText = "Información de la RAM-7 "
} else if (a == "grau") {
    outputText = "Información de la GRAU"
} else if (a == "amax") {
    outputText = "Información de la AMAX"
} else if (a == "asval") {
    outputText = "Información de la AS-VAL"
} else if (a == "an94") {
    outputText = "Información de la AN-94"
} else if (a == "fara") {
    outputText = "Información de la FARA 83"
} else if (a == "akcw") {
    outputText = "Información de la AK de Cold War"
} else if (a == "krig") {
    outputText = "Información de Krig 6"
} else if (a == "ffar") {
    outputText = "Información de la FFAR"
} else if (a == "xm4") {
    outputText = "Información de XM4"
} else if (a == "qbz") {
    outputText = "Información de la QBZ"
} else if (a == "mp5mw") {
    outputText = "Información de la MP5 de Modern Warfare"
} else if (a == "mp7") {
    outputText = "Información de la MP7"
} else if (a == "aug") {
    outputText = "Información de la AUG"
} else if (a == "p90") {
    outputText = "Información de P90"
} else if (a == "bizon") {
    outputText = "Información de Bizon"
} else if (a == "uzi") {
    outputText = "Información de Uzi"
} else if (a == "mp5cw") {
    outputText = "Información de MP5 de Cold War"
} else if (a == "milano") {
    outputText = "Información de Milano"
} else if (a == "ak74") {
    outputText = "Información de la AK-74U"
} else if (a == "ksp") {
    outputText = "Información de KSP"
} else if (a == "bullfrog") {
    outputText = "Información de Bullfrog"
} else if (a == "type") {
    outputText = "Información de Type 64"
} else if (a == "m16") {
    outputText = "Información de M16"
} else if (a == "augcw") {
    outputText = "Información de AUG"
} else if (a == "dmr") {
    outputText = "Información de DMR 16"
} else if (a == "ebr") {
    outputText = "Información de EBR"
} else if (a == "kar") {
    outputText = "Información de Kar98k"
} else if (a == "spr") {
    outputText = "Información de SP-R"
} else if (a == "ballesta") {
    outputText = "Información de Ballesta"
} else if (a == "carbine") {
    outputText = "Información de Carbine"
} else if (a == "bruen") {
    outputText = "Información de Bruen"
} else if (a == "finn") {
    outputText = "Información de FiNN"
} else if (a == "m91") {
    outputText = "Información de M91"
} else if (a == "sa87") {
    outputText = "Información de SA87"
} else if (a == "mg34") {
    outputText = "Información de MG34"
} else if (a == "pkm") {
    outputText = "Información de PKM"
} else if (a == "holger") {
    outputText = "Información de Holger"
} else if (a == "stoner") {
    outputText = "Información de la Stoner"
} else if (a == "rpd") {
    outputText = "Información de RPD"
} else if (a == "m60") {
    outputText = "Información de M60"
} else if (a == "hdr") {
    outputText = "Información de HDR"
} else if (a == "dragunov") {
    outputText = "Información de Dragunov"
} else if (a == "ax50") {
    outputText = "Información de AX-50"
} else if (a == "rytec") {
    outputText = "Información de Rytec"
} else if (a == "pellington") {
    outputText = "Información de Pellington"
} else if (a == "tundra") {
    outputText = "Información de Tundra"
} else if (a == "m82") {
    outputText = "Información de M82"
} else if (a == ".50gs") {
    outputText = "Información de .50gs"
} else if (a == "m19") {
    outputText = "Información de M19"
} else if (a == "x16") {
    outputText = "Información de X16"
} else if (a == "1911mw") {
    outputText = "Información de 1911 Modern Warfare"
} else if (a == ".357") {
    outputText = "Información de .357"
} else if (a == "renetti") {
    outputText = "Información de renetti"
} else if (a == "sykov") {
    outputText = "Información de Sykov"
} else if (a == "1911cw") {
    outputText = "Información de 1911 de Cold War"
} else if (a == "magnum") {
    outputText = "Información de Magnum"
} else if (a == "diamatti") {
    outputText = "Información de Diamatti"
} else if (a == "origin") {
    outputText = "Información de Origin"
} else if (a == "modelo") {
    outputText = "Información de Modelo 680"
} else if (a == "725") {
    outputText = "Información de 725"
} else if (a == "r9") {
    outputText = "Información de R9"
} else if (a == "vlk") {
    outputText = "Información de VLK"
} else if (a == "hauer") {
    outputText = "Información de Hauer"
} else if (a == "gallo") {
    outputText = "Información de GalloSA12"
} 

document.getElementById("output").innerHTML = outputText;


}
