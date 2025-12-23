    function Libro(titulo, autor, disponible){
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = disponible;
    }
    Libro.prototype.prestar = function(){
        this.disponible = false;
    }
    Libro.prototype.devolver = function(){
        this.disponible = true;
    }
    function LibroFisico(titulo, autor, disponible, ubicacion){
        Libro.call(this,titulo, autor, disponible);
        this.ubicacion = ubicacion;
    }
    LibroFisico.prototype = Object.create(Libro.prototype);
    LibroFisico.prototype.constructor = LibroFisico;

    LibroFisico.prototype.mostrarUbicacion = function(){
        console.log("El libro está en la ubicación "+ this.ubicacion);
    }
    function LibroDigital(titulo, autor, disponible, formato){
        Libro.call(this,titulo, autor, disponible);
        this.formato = formato;
    }
    LibroDigital.prototype = Object.create(Libro.prototype);
    LibroDigital.prototype.constructor = LibroDigital;

    LibroDigital.prototype.descargar = function(){
        console.log("Descargando libro");
    }
    const biblioteca = {
        libros: [],
        mostrarDatos: function(){
            for (const libro of this.libros) {
                if(libro instanceof LibroFisico){
                    if(libro.disponible == true){
                        console.log(`El libro ${libro.titulo} (Fisico - ${libro.ubicacion}) está disponible`);
                    }else
                         console.log(`El libro ${libro.titulo} (Fisico - ${libro.ubicacion}) no está disponible`);
                }else if(libro.disponible == true){
                        console.log(`El libro ${libro.titulo} (Digital - ${libro.formato}) está disponible`);
                      }else
                         console.log(`El libro ${libro.titulo} (Fisico - ${libro.formato}) no está disponible`);
            }
        }
    }
    let libro1 = new LibroDigital("Marina", "Pedro", true, "PDF");
    let libro2 = new LibroFisico("Aladim", "Ruben", false, "2 estanteria");
    let libro3 = new LibroDigital("3 CERDITOS", "Juan", true, "PDF");
    let libro4 = new LibroFisico("Hoyo", "Carlo", false, "6 estanteria");
    let libro5 = new LibroDigital("Paco", "Paco", false, "PDF");
    let libro6 = new LibroFisico("Canto gitano", "Lorca", true, "2 pasillo");

    biblioteca.libros.push(libro1,libro2, libro3, libro4, libro5, libro6);
    biblioteca.mostrarDatos();

    libro2.mostrarUbicacion();
    libro1.descargar();