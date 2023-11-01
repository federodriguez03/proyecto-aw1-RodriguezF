import especialidades from "./especialidades.js"
import e from "./especialidades.js"

//Referencia
const principal = document.getElementById("especialidades")

//principal.innerHTML = `<h2>${especialidades.categoria}</h2>`

especialidades.categoria.forEach(especialidades => {
    principal.innerHTML += `<section>
    <label for="opciones">A-G</label>
    <select id="opciones" name="opciones">
        
    </select>
    <label for="opciones">${especialidades.categoria}</label>
    <select id="opciones" name="opciones">
        ${especialidades.nombre}
    </select>
    <label for="opciones">P-U</label>
    <select id="opciones" name="opciones">
     
    </select>
    <label for="opciones">W-Z</W-Z></label>
    <select id="opciones" name="opciones">

    </select>
</section>`

});