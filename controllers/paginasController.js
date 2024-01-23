import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (request, response) => { 

    // Consultar 3 viajes del modelo viaje

    const promiseDB = [];
    promiseDB.push( Viaje.findAll({ limit:3 }) )
    promiseDB.push( Testimonial.findAll({ limit:3 }) )
    try {
        const resultado = await Promise.all(promiseDB)
        response.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaNosotros = (request, response) => { 
    response.render('nosotros', {
         pagina: 'Nosotros'
    });
};

const paginaViaje = async (request, response) => { 

    // Consultar la BD
    const viajes = await Viaje.findAll(); // findAll se trae todos los resultados de la tabla


    response.render('viajes', {
         pagina: 'Próximos Viajes', 
         viajes
    });
};

const paginaTestimoniales = async (request, response) => { 

    try {
        // Consultar modelo de testimoniales
        const testimoniales = await Testimonial.findAll();
        response.render('testimoniales', {
             pagina: 'Testimoniales',
             testimoniales
        });
        
    } catch (error) {
        console.log(error);
    }
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (request, response) => {
    
    // Extraer y crear la variable del comodin
    const { slug } = request.params // params se asocia mucho con el comodin

    // try en caso de que haya un error al consultar la BD
    try {
        const viaje = await Viaje.findOne({ where : { slug }})

        response.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
        
    } catch (error) {
        console.log(error)
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViaje,
    paginaTestimoniales,
    paginaDetalleViaje
};