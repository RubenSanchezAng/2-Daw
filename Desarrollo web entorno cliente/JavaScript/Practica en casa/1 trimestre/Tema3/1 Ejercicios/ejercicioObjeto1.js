    function Libro(titulo, autor, disponible){
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = disponible;
    }
    const biblioteca = {
        libros: [],
       prestarLibros: function(titulo) {
            let encontrado = false; 
            for (const libro of this.libros) {
                if (libro.titulo === titulo) {
                encontrado = true;
                if (libro.disponible === true) {
                    libro.disponible = false;
                    console.log("El libro ha sido prestado");
                } else {
                    console.log("El libro está en préstamo");
                }
                }
            }

            if (!encontrado) {
                console.log("Ese libro no lo tenemos");
            }
        },
        mostrarLibros: function(){
            for (const libro of this.libros) {
                if(libro.disponible == true){
                    console.log("El libro "+ libro.titulo + " está disponible");
                }
            }
        }
    };
    let libro1 =new Libro("Alfredo", "Paco", true);
    let libro2 = new Libro("Picapiedra", "Ruben", false);
    let libro3 = new Libro("Marian", "Hola", true);

    biblioteca.libros.push(libro1, libro2, libro3);
    biblioteca.prestarLibros("Picapiedra");

    biblioteca.mostrarLibros();
