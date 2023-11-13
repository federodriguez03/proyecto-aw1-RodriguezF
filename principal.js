import especialidades from "./especialidades.js";

const contenedoresp = document.getElementById("contenedor");

let contenidoEspecialidades = "";

Object.keys(especialidades.opciones).forEach(rango => {
  contenidoEspecialidades += `<label for="${rango}">${rango}</label>
    <select id="${rango}" name="${rango}">`;

  especialidades.opciones[rango].forEach(opcion => {
    contenidoEspecialidades += `<option>${opcion.nombre}</option>`;
  });

  contenidoEspecialidades += `</select>`;
});

contenedoresp.innerHTML = contenidoEspecialidades;