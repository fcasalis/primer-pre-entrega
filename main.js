alert('¡Bienvenido al cine! - selecciona tu butaca y pelicula, peliculas solo aptas para mayores de 16 años');

let edad = parseInt(prompt('Por favor, ingresa tu edad:'));

if (isNaN(edad) || edad < 0) {
    alert('Por favor, ingresa una edad válida.');
} else if (edad < 16) {
    alert('Lo siento, las películas solo son para mayores de 16 años.');
} else {
    let peliculaElegida;
    let butacaElegida;

    do {
        alert('Películas disponibles: \n1. Oppenheimer  \n2. Barbie \n3. Rapido y Furioso 98');

        let opcionPelicula = parseInt(prompt('Selecciona una película (1, 2, 3):'));

        if (isNaN(opcionPelicula) || opcionPelicula < 1 || opcionPelicula > 3) {
            alert('Opción inválida. Por favor, elige una película válida.');
            continue;
        }

        switch (opcionPelicula) {
            case 1:
                peliculaElegida = 'Oppenheimer ';
                break;
            case 2:
                peliculaElegida = 'Barbie';
                break;
            case 3:
                peliculaElegida = 'Rapido y Furioso 98';
                break;
        }

        alert(`Has seleccionado la película "${peliculaElegida}".`);

        alert('Butacas disponibles:\n1. A1\n2. A2\n3. A3\n4. B1\n5. B2\n6. B3\n7. C1\n8. C2\n9. C3');

        let opcionButaca = parseInt(prompt('Selecciona una butaca (1-9):'));

        if (isNaN(opcionButaca) || opcionButaca < 1 || opcionButaca > 9) {
            alert('Opción inválida. Por favor, elige una butaca válida.');
            continue;
        }

        switch (opcionButaca) {
            case 1:
                butacaElegida = 'A1';
                break;
            case 2:
                butacaElegida = 'A2';
                break;
            case 3:
                butacaElegida = 'A3';
                break;
            case 4:
                butacaElegida = 'B1';
                break;
            case 5:
                butacaElegida = 'B2';
                break;
            case 6:
                butacaElegida = 'B3';
                break;
            case 7:
                butacaElegida = 'C1';
                break;
            case 8:
                butacaElegida = 'C2';
                break;
            case 9:
                butacaElegida = 'C3';
                break;
        }

        alert(`Has seleccionado la butaca "${butacaElegida}".`);

        let continuar = prompt('¿Desea seleccionar otra película y butaca? (si/no)').toLowerCase();
        if (continuar !== 'si') {
            break;
        }
    } while (true);

    alert('Gracias!, disfruta la pelicula!');
}
