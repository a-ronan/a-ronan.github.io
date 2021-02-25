//Sélectionner toutes les options du "select" en html :
const optSelector = document.querySelectorAll("option");
let result;
let button = document.querySelector("button");

//L'évènement au clic :
button.addEventListener("click", function () {
  
  //Boucle 'for of' pour enlever la classe 'show' et faire disparaitre les img
  const list = document.getElementsByClassName("show");
  for (let item of list) {
    item.classList.remove("show");
  }
  //Choisir aléatoirement parmi les 3 options du sélecteur : Pierre/Feuille ou ciseaux
  let ordinat = optSelector[Math.floor(Math.random() * optSelector.length)];

  //En fonction du choix du joueur :
  let joueur = document.getElementById("myChoice").selectedIndex;
  let jChoice = document.getElementsByTagName("option")[joueur].value;

  //Faire apparaitre l'image par rapport au choix du joueur :
  switch (jChoice) {
    case "Rock":
      document.getElementsByClassName("choicePImgStone")[0].classList.add("show");
      break;
    case "Paper":
      document.getElementsByClassName("choicePImgPaper")[0].classList.add("show");
      break;
      case "Scissor":
      document.getElementsByClassName("choicePImgScissor")[0].classList.add("show");
        break;
        
    default:
      "Rock";
      break;
  }
  //Faire apparaitre l'image par rapport au choix de l'ordinateur
  switch (ordinat) {
    case "Rock":
      document.getElementsByClassName("choiceRImgStone")[0].classList.add("show");
      break;
    case "Paper":
      document.getElementsByClassName("choiceRImgPaper")[0].classList.add("show");
      break;
      case "Scissor":
      document.getElementsByClassName("choiceRImgScissor")[0].classList.add("show");
        break;

    default:
      "Rock";
      break;
  }

  // Les différent cas possible du combat :
  if (jChoice === ordinat) {
    result = "draw";
  } else if (
    (jChoice === "Rock" && ordinat === "Scissor") ||
    (jChoice === "Scissor" && ordinat === "Paper") ||
    (jChoice === "Paper" && ordinat === "Rock")
  ) {
    result = "win";
  } else {
    result = "loose";
  }

  //Faire apparaitre la phrase de résultat suivant ledit résultat :
  switch (result) {
    case "win":
      document.getElementsByClassName("win")[0].classList.add("show");
      break;
    case "loose":
      document.getElementsByClassName("lose")[0].classList.add("show");
      break;
    case "draw":
      document.getElementsByClassName("draw")[0].classList.add("show");
      break;

    default:
      "draw";
      break;
  }
});
/*
const buttons = document.querySelectorAll("button");
// const resultat = document.querySelector(".resultat");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const joueur = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat = "";
    // resultat.innerHTML = joueur + "       " + robot;
    if (joueur===robot) {
      resultat = "Egalité";
    }
    else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Feuilles") && (robot === "Pierre")) {
      resultat = "Gagné";
    }
    else {
      resultat = "Perdu";
    }
  document.querySelector(".resultat").innerHTML = `
  Joueur : ${joueur} </br>
  Robot : ${robot} <br/>
  Résultat : ${resultat}
`  ;
    
  });
*/
