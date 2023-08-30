let pointJoueur1 = "0";
let pointJoueur2 = "0";
let afficheur = document.querySelector(".afficheur");
let mancheTerminee = false;
let compteurJoueur1 = document.querySelector(".compteurJoueur1");
let compteurJoueur2 = document.querySelector(".compteurJoueur2");
let boutonNouvellePartie;
let terre = "🌍";
let lune = "🌕";
let tour = terre;
compteurJoueur1.innerHTML = `${pointJoueur1} ${terre}`;
compteurJoueur2.innerHTML = `${pointJoueur2} ${lune}`;
let listEmplacement = document.querySelectorAll(".grille div");

lancerJeu();

function lancerJeu(){
    for (let i =0; i<listEmplacement.length; i++ ) {
        listEmplacement[i].addEventListener ("click", function() {placerPion(listEmplacement[i])})
    }
}

function placerPion (emplacement){
        if(mancheTerminee==false&&tour==terre&&emplacement.innerHTML ==""){
            emplacement.innerHTML=terre;
            tour =lune;
            afficheur.innerHTML = `${lune} a vous de jouer`;
            rechercheVainqueur(terre);
        } else { 
        if(mancheTerminee==false&&tour==lune&&emplacement.innerHTML ==""){
            emplacement.innerHTML=lune;
            tour =terre;
            afficheur.innerHTML = `${terre} a vous de jouer`;
            rechercheVainqueur(lune);
        }
    }
}

function rechercheVainqueur (planete){
    if (listEmplacement[0].innerHTML==planete&&listEmplacement[1].innerHTML==planete&&listEmplacement[2].innerHTML==planete||listEmplacement[3].innerHTML==planete&&listEmplacement[4].innerHTML==planete&&listEmplacement[5].innerHTML==planete||listEmplacement[6].innerHTML==planete&&listEmplacement[7].innerHTML==planete&&listEmplacement[8].innerHTML==planete||listEmplacement[0].innerHTML==planete&&listEmplacement[3].innerHTML==planete&&listEmplacement[6].innerHTML==planete||listEmplacement[1].innerHTML==planete&&listEmplacement[4].innerHTML==planete&&listEmplacement[7].innerHTML==planete||listEmplacement[2].innerHTML==planete&&listEmplacement[5].innerHTML==planete&&listEmplacement[8].innerHTML==planete||listEmplacement[0].innerHTML==planete&&listEmplacement[4].innerHTML==planete&&listEmplacement[8].innerHTML==planete||listEmplacement[2].innerHTML==planete&&listEmplacement[4].innerHTML==planete&&listEmplacement[6].innerHTML==planete){
        afficheur.innerHTML = `${planete} a gagne`;
        if(planete==terre){
            pointJoueur1++;
            compteurJoueur1.innerHTML = `${pointJoueur1} `+planete;
        } else {
            pointJoueur2++; 
            compteurJoueur2.innerHTML = `${pointJoueur2} `+planete;}
            mancheTerminee=true;
            creerBoutons(); 
    } else {
        if (listEmplacement[0].innerHTML!==""&&listEmplacement[1].innerHTML!==""&&listEmplacement[2].innerHTML!==""&&listEmplacement[3].innerHTML!==""&&listEmplacement[4].innerHTML!==""&&listEmplacement[5].innerHTML!==""&&listEmplacement[6].innerHTML!==""&&listEmplacement[7].innerHTML!==""&&listEmplacement[8].innerHTML!==""){
            afficheur.innerHTML = `Match nul`;
            mancheTerminee=true;
            creerBoutons();
        }
    }
}

function creerBoutons(){
    let div = document.createElement("div");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    button1.className = "boutonNouvelleManche";
    button2.className = "boutonNouvellePartie";
    button1.innerText = "Nouvelle manche";
    button2.innerText = "Nouvelle partie";
    afficheur.append(div);
    div.append(button1, button2);
    boutonNouvelleManche = document.querySelector(".boutonNouvelleManche");
    boutonNouvelleManche.addEventListener("click", function() { nouvelleManche() });
    boutonNouvellePartie = document.querySelector(".boutonNouvellePartie");
    boutonNouvellePartie.addEventListener("click", function() { nouvellePartie() });        
}

function nouvelleManche(){
    listEmplacement[0].innerHTML="";
    listEmplacement[1].innerHTML="";
    listEmplacement[2].innerHTML="";
    listEmplacement[3].innerHTML="";
    listEmplacement[4].innerHTML="";
    listEmplacement[5].innerHTML="";
    listEmplacement[6].innerHTML="";
    listEmplacement[7].innerHTML="";
    listEmplacement[8].innerHTML="";
    mancheTerminee=false;
    if (tour ==lune){
        afficheur.innerHTML = `${lune} a vous de jouer`;
    }
    if (tour ==terre){
        afficheur.innerHTML = `${terre} a vous de jouer`;
    }
}

function nouvellePartie () {
    window.location.reload();
}