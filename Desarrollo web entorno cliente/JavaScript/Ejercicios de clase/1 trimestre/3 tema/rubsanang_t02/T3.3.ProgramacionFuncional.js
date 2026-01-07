// Función que devuelve una cadena que representa una taza de té verde
const prepareGreenTea = () => 'greenTea';

// Función que devuelve una cadena que representa una taza de té negro
const prepareBlackTea = () => 'blackTea';

/*
Dada una función (que representa el tipo de té) y el número de tazas necesarias,
la siguiente función devuelve un arreglo de cadenas (cada una representando
una taza de un tipo específico de té).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log( tea4GreenTeamFCC,tea4BlackTeamFCC );



const Window = function(tabs) {
  this.tabs = tabs; 
};

// Cuando unes dos ventanas en una sola
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Cuando abres una nueva pestaña al final
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('nueva pestaña'); // Por ahora abrimos una nueva pestaña
  return this;
};

// Cuando cierras una pestaña
Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index); // Obtén las pestañas antes de la que se cierra
  const tabsAfterIndex = this.tabs.slice(index + 1); // Obtén las pestañas después de la que se cierra

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelas para formar la nueva lista de pestañas

  return this;
};

// Creamos tres ventanas del navegador
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu correo, documentos y otros sitios de trabajo
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

// Ahora realizamos operaciones de apertura, cierre y unión de pestañas
const finalTabs = socialWindow
  .tabOpen() // Abre una nueva pestaña (por ejemplo, para memes de gatos)
  .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en la ventana de videos y únela
  .join(workWindow.tabClose(1).tabOpen()); // Cierra la segunda pestaña en la ventana de trabajo y abre una nueva

console.log(finalTabs.tabs);


let fixedValue = 4;
function incrementer(numero) {
  let incremento = numero + 1;

  return incremento;
}


const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies","Philosophiæ Naturalis Principia Mathematica","Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  const newBookList = [...arr];
  newBookList.push(bookName);
  return newBookList;
}

function remove(arr, bookName) {
  const newBookList = [...arr];
  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {
    newBookList.splice(book_index, 1);
  }
  return newBookList;
}
