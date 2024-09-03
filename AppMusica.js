let canciones = [];
let idCancion = 0;

function agregarCancion() {
    const nombre = document.getElementById('nombre-cancion').value.trim();
    const artista = document.getElementById('artista').value.trim();
    const genero = document.getElementById('genero').value.trim();

    // Verifica si todos los campos están llenos
    if (nombre && artista && genero) {
        // Crear un nuevo objeto de canción
        let nuevaCancion = {
            id: idCancion++,
            nombre: nombre,
            artista: artista,
            genero: genero,
            favorita: false
        };
        
        // Agregar la nueva canción al array
        canciones.push(nuevaCancion);
        
        // Mostrar las canciones en la lista
        mostrarCanciones();
        
        // Mostrar un mensaje de éxito
        alert(`¡Qué buena la canción "${nombre}" de ${artista}!`);
    } else {
        // Mostrar un mensaje de advertencia si faltan campos
        alert("Bebé, completá todos los campos.");
    }
}

function mostrarCanciones() {
    const lista = document.getElementById('lista-canciones');
    lista.innerHTML = '';

    for (let cancion of canciones) {
        let li = document.createElement('li');
        li.textContent = `${cancion.nombre} - ${cancion.artista} [${cancion.genero}]`;
        
        let btnFavorita = document.createElement('button');
        btnFavorita.textContent = cancion.favorita ? 'No Fav' : 'Fav';
        btnFavorita.onclick = function() {
            cancion.favorita = !cancion.favorita;
            mostrarCanciones();
        };

        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = function() {
            canciones = canciones.filter(c => c.id !== cancion.id);
            mostrarCanciones();
        };

        li.appendChild(btnFavorita);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    }
}