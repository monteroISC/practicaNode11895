const perfil = {
    nombre: 'luis',
    apellido: 'montero',
    correo: 'lmontero@correo.com',
    salario: '15k'
}

const datos = ({ nombre, salario }) =>{ 
    console.log(nombre, salario);
}

datos(perfil);