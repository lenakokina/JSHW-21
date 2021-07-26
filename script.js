
// let img = document.getElementById('images');

const $fotorama = $('.fotorama');
// const photoTemplate = document.getElementById('newTodoTemplate').innerHTML;
const photoTemplate = $('#newTodoTemplate').html();

let arrFoto = [];

function fetchFoto() {
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
    .then((resp) => {resp.json()
    .then((data) => arrFoto = data)
    .then(renderFotos);
    });
}

function renderFotos(arrFoto) {
  arrFoto.map(renderFoto);
}

 function renderFoto(photo) {
   const $photoEl = $(getPhotosHtml(photo));
   $fotorama.append($photoEl);
}

function getPhotosHtml(photo) {
  return photoTemplate
        .replace('{{id}}', photo.id)
        .replace('{{title}}', photo.title)
        .replace('{{url}}', photo.url)
        .replace('{{thumbnailUrl}}', photo.thumbnailUrl)
}

fetchFoto()
