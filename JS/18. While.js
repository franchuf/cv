var fran = {
    nombre: 'francisco',
    apellido: 'faner',
    edad: 39,
    peso: 85,
    estudiante: false,
    ingeniero: true,
    musico: true,
    soldador: true,
}

// const numMax=10;
// const numMin=1;
const INCREMENTO_PESO = 0.200
const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO;
const bajaDePeso = persona => persona.peso -= INCREMENTO_PESO;
const meta = 74
const comeMucho = () => Math.random < 0.3
const haceDeporte = () => Math.random < 0.4
// const numRandom = function (){
//     return Math.round(Math.random()*(numMax-numMin)+numMin)
// }

console.log(`al principio del año ${fran.nombre} pesa ${fran.peso}`);

for (i = 0; i <= 365; i++) {
    var random = Math.random();
    if (random < 0.25) {
        aumentaDePeso(fran);
    }
    else if (random < 0.5) {
        bajaDePeso(fran);
    }
}
console.log(`al final del año ${fran.nombre} pesa ${fran.peso.toFixed(1)}`);

while (fran.peso > meta) {
    if ()
 }