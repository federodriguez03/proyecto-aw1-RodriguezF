import especialidades from "./especialidades.js";

const contenedoresp = document.getElementById("contenedor");



let contenidoEspecialidades = `<label class="categorias"></label>
<select class="opciones">`;

especialidades.opciones.forEach((opcion) => {
contenidoEspecialidades += `<option value="${opcion.nombre}">${opcion.nombre}</option>`;
});

contenidoEspecialidades += `</select>`;

contenedoresp.innerHTML = contenidoEspecialidades;