import { ThemeStore , StoreSub } from './Store.js';

// Aquí inicializamos directamente el singleton
const store = new ThemeStore();

// Creamos los subscribers para cada elemento
const bodySub = new StoreSub(document.body);
const headerSub = new StoreSub(document.getElementById('mainHeader'));
const buttonSub = new StoreSub(document.getElementById('toggleThemeBtn'));
const box1Sub = new StoreSub(document.getElementById('box1'));
const box2Sub = new StoreSub(document.getElementById('box2'));
const box3Sub = new StoreSub(document.getElementById('box3'));

// Suscribimos al store
store.subscribe(bodySub);
store.subscribe(headerSub);
store.subscribe(buttonSub);
store.subscribe(box1Sub);
store.subscribe(box2Sub);
store.subscribe(box3Sub);

// Evento del botón
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
  store.toggleTheme();
});

// Inicializamos la vista la primera vez con el tema por defecto
store.notify();