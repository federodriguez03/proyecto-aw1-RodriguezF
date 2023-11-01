const especialidades = {
    categoria: "A-G",
    especialidades: [
        {nombre: "Cardiología"},
        {nombre: "Dermatología"},
        {nombre: "Endocrinología"},
        {nombre: "Gastroenterología"}
    ],
    categoria: "H-O",
    especialidades: [
        {nombre: "Hematología"},
        {nombre: "Infectología"},
        {nombre: "Nefrología"},
        {nombre: "Oftalmología"}
    ],
    categoria: "P-U",
    especialidades: [
        {nombre:  "Pediatría"},
        {nombre: "Química Clínica"},
        {nombre: "Reumatología"},
        {nombre: "Urología"}
    ],
};

let RenderizadoHTML = `<option>${especialidades.nombre}</option>`

