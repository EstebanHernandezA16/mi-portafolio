import Swal from "sweetalert2"
// import 'sweetalert2/src/sweetalert2.scss'



export const alertaContacto = (datosContacto) =>{
    Swal.fire({
        title:`Contacto de ${datosContacto.nombre}`,
        html:`
        WhatsApp: ${datosContacto?.contacto} <br>
        Correo: ${datosContacto?.correo}
        `
    })
}