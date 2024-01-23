import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial =  async (req, res) => {

    // Validar

    const {nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje : 'El nombre está vacío'})
    }

    if(correo.trim() === '') {
        errores.push({mensaje : 'El correo está vacío'})
    }

    if(mensaje.trim() === '') {
        errores.push({mensaje : 'El mensaje está vacío'})
    }

    if(errores.length > 0) {

        // Consultar Testimoniales Existentes
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            // Pasamos los errores a la vista de testimoniales
            errores, // envio errores a esa vista

            // Pasamos los siguientes objetos para que mantenga el valor en el form
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        // Almacenarlo en la BD
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            // Para que la pagina no se quede pegada luego de hacer submit hacemos:
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error);
        }
    };

    // body es lo que el usuario digita en el formulario
    
};

export {
    guardarTestimonial
};