// ===============================
// MUSIQUE DU PALAIS DE SOWJI
// ===============================


const musiques = {


ouverture:
"musiques/ouverture.mp3",


jardin:
"musiques/jardin.mp3",


mariage:
"musiques/mariage.mp3",


final:
"musiques/final.mp3"


};




let audio = new Audio();

audio.volume = 0.35;





function jouerMusique(type){


if(!musiques[type]){

return;

}



audio.pause();


audio.src = musiques[type];


audio.loop = true;


audio.play()
.catch(()=>{

console.log("Lecture en attente d'une action utilisateur");

});


}






function arreterMusique(){


audio.pause();


audio.currentTime=0;


}






// Fondu sonore royal


function fondu(volumeFinal=0.35,duree=2000){


let volume=0;


audio.volume=0;


let interval=setInterval(()=>{


volume+=0.01;


audio.volume=Math.min(volume,volumeFinal);



if(volume>=volumeFinal){

clearInterval(interval);

}


},duree/35);


}
