const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5, listar = false , hasta = 10 ) => {

    try {
       
            let salida = '' ;
            let consola = '';

            for (let i = 1; i <= hasta; i++) {
                salida += `${base} x ${i} = ${i*base}\n`;
                consola += `${base} ${'x'.green} ${i} ${'='.green} ${i*base}\n`;
            }
            if ( listar ) {
                console.log('==============='.green)
                console.log(`Tabla del:`.green, colors.blue(base))
                console.log(`===============`.green)
                console.log(consola);
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            return nombreArchivo = `tabla-${base}.txt`
    }
    catch (error) {
        throw error;
    } 

};

module.exports = {
    crearArchivo
}