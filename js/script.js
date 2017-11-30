const knop = document.getElementById('knop');
let vlak = document.querySelectorAll('.vlakje');

vlak[0].style.backgroundColor = "red";
vlak[1].style.backgroundColor = "white";
vlak[2].style.backgroundColor = "blue";

const schuif = () => {
  for(let i =0; i < vlak.length; i++) {
    vlak[i].classList.toggle('vlakje--schuif-uit');
    vlak[i].style.transitionDuration = i + 0.45 + "s";
  }
}

knop.addEventListener('click', schuif);