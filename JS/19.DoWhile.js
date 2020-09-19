var contador = 0;

var llueve = () => Math.random() < 0.25;
do {
contador++
} while(!llueve()) ;//el ciclo dowile se ejecuta. Si no llueve , el do se ejecuta denuevo.

if (contador===1){
    console.log (`sali a ver si llueve ${contador} vez`);

}else{
    console.log (`sali a ver si llueve ${contador} veces`);
}