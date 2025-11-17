const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

//Selecionando o primeiro paragrafo
const p1 = ps[1]
const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor


for(p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
    p.style.marginBottom = '10px';
}