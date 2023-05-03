// Modulo filesystem para poder crear el archivo ofuscado
const fs = require('fs');
//Modulo para Ofuscar el codigo
const JavaScriptObfuscator = require('javascript-obfuscator');

//Leer el archivo original como texto
fs.readFile('./src/mycode.js', 'UTF-8', function(err, data){
    if(err) {
        throw err;
    }

    //Ofuscacion
    var obfuscationResult = JavaScriptObfuscator.obfuscate(data);

    //Almacenar el resultado de la ofuscación en un nuevo archivo
    fs.writeFile('./src/mycode-obfuscate.js', obfuscationResult.getObfuscatedCode(), function(err){
        if(err){
            return console.log(err);
        }
        console.log('Ofuscación lista');
    });

})