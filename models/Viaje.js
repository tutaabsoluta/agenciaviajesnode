import { Sequelize } from "sequelize";
// Importar archivo de configuracion, porque tiene instancia de sequelize
import db from "../config/db.js";

// Definir primer model
// la tabla se llama viajes, luego creamos un objeto de configuracion donde definimos cada tabla
export const Viaje = db.define('viajes', { 
    titulo: {
        // Tipo de dato y cantidad de caracteres
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
});

// Nuestro routing sirve como routing y como controlador


