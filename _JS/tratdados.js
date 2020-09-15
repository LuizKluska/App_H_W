var leitorDeTXT = new FileReader()
window.onload = function init() {
    leitorDeTXT.onload = leTXT;
}

function pegaTXT(inputFile) {
    var file = inputFile.files[0];
    leitorDeTXT.readAsText(file);
    
}

function leTXT(evt) {

    var fileLista = evt.target.result.split('\n');
    var TXTsaida = document.getElementById('TXTsaida');
    TXTsaida.innerHTML = fileLista
    
    
  }

