function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    console.log(`${title} ${width} ${height}`);
}

// Ejemplos de uso:
showMenu(); // → "Menu 100 200"
showMenu({ title: "Mi menú" }); // → "Mi menú 100 200"
showMenu({ width: 300, height: 400 }); // → "Menu 300 400"
