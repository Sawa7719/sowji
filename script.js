/* =================================
   SOWJI
   Le cœur magique du palais
   ================================= */


/*
   Ouverture du sceau
*/

function ouvrirSceau() {

    let sceau =
    document.getElementById("sceau");


    sceau.style.display = "block";

}



/*
   Vérification du mot secret
*/

function entrerPalais() {


    let code =
    document.getElementById("code").value;


    let erreur =
    document.getElementById("erreur");



    if(code.toLowerCase() === "sowji") {


        erreur.innerHTML =
        "✨ Le sceau reconnaît ton cœur...";


        setTimeout(function(){

            window.location.href =
            "jardin.html";

        },1200);



    }

    else {


        erreur.innerHTML =
        "Le sceau reste fermé...";

    }


}
