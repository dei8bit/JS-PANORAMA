const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(es){
  // e.target se refiere elemento clickado <li>
  // Esto es diferente de e.currentTarget, que se referiría al padre <ul> en este contexto
  es.target.style.visibility = 'hidden';
}

// Incluir el 'listener' a la lista
// Se ejecutará cuando se haga click en cada <li>
ul.addEventListener('click', hide, false);