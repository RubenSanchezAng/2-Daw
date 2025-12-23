import { ConfigManager } from "./services/ConfigManager.js";

/*  NOTA PARA USAR MÓDULOS
    si borras el archivo package.json, para poder usar módulos con node tienes que hacer:
    // 1) usar la terminal e inicializar un proyecto  desde la misma carpeta que index.js
    npm init -y
    // 2) añadir al packae.jsson
          ...
          type: 'module',
          ...
*/

/* RESULTADO ESPERADO DE ESTE CÓDIGO
-> ConfigManager creado por primera vez
¿Es la misma instancia? true
Configuración inicial: { theme: 'light', language: 'es', version: '1.0.0' }

Idioma desde c2: en

Estado global final: { theme: 'light', language: 'en', version: '1.0.0' }
*/


const c1 = new ConfigManager();
const c2 = new ConfigManager();

console.log("¿Es la misma instancia?", c1 === c2); // true

console.log("Configuración inicial:", c1.getConfig());

// Cambiamos algo desde c1
c1.setParam("language", "en");

// Comprobamos desde c2
console.log("\nIdioma desde c2:", c2.getParam("language"));

console.log("\nEstado global final:", c2.getConfig());
