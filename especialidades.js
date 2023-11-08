const especialidades = {
    categoria: "A-G",
    especialidad: [
        {opciones: "Cardiología"},
        {opciones: "Dermatología"},
        {opciones: "Endocrinología"},
        {opciones: "Gastroenterología"}
    ],
    categoria: "H-O",
    especialidad: [
        {opciones: "Hematología"},
        {opciones: "Infectología"},
        {opciones: "Nefrología"},
        {opciones: "Oftalmología"}
    ],
    categoria: "P-U",
    especialidad: [
        {opciones:  "Pediatría"},
        {opciones: "Química Clínica"},
        {opciones: "Reumatología"},
        {opciones: "Urología"}
    ],
};

let RenderizadoHTML = `<label>${especialidades.nombre}</label>`
export default especialidades //Permite importar por otro lado

const esp = document.getElementById(especialidades)