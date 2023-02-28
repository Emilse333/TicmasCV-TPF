
var img = document.createElement('img'); 

<img src="data/img/placeholder.png" data-src="https://static.wikia.nocookie.net/lossimpson/images/8/82/John.png/revision/latest?cb=20090901202749&path-prefix=es" 
alt="Foto de perfil"/>';


const experience = document.querySelector('.experience');
const experienceTitle = document.querySelector('.experience-title');

const formation = document.querySelector('.formation');
const formationTitle = document.querySelector('.formation-title');

const languages = document.querySelector('.languages');
const languagesTitle = document.querySelector('.languages-title');

function clickHandler(element) {
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
    element.classList.add('visible');
  } else {
    element.classList.remove('visible');
    element.classList.add('hidden');
  }
}

experienceTitle.addEventListener('click', () => clickHandler(experience));
formationTitle.addEventListener('click', () => clickHandler(formation));
languagesTitle.addEventListener('click', () => clickHandler(languages));
