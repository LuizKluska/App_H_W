
function carrega_dados(n){
    
    console.log(`Arquivo carregado: ${n}`)
    
    const fs = require('fs');
    var arquivo = fs.readFileSync(n,'utf-8');
    var lista_grande = arquivo.split('\r\n');

    for (v of lista_grande) {
        console.log(v);
    }

}
carrega_dados('AN.txt')



