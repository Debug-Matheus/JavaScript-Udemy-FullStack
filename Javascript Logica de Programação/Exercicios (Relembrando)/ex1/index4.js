//Use desestruturação para extrair:
//tema → pega do array
//idioma → se não existir no array, deve virar "pt-BR"

const config = ["dark"]
const[tema, idioma = 'pt-BR'] = config

console.log(tema, idioma)