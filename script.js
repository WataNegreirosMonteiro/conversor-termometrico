function calculo_Escala() {
  valor = document.getElementById('grau').value;
  
  let select = document.getElementById('valor-select');
  let valor_selecionado = select.options[select.selectedIndex].text;

  if (valor_selecionado == 'Gelo') {
    valor = (valor * 212) / 32
    valor = valor.toFixed(2)

    C = (valor - 32) * 5 / 9
    C = C.toFixed(2)
    var K = (valor - 32) * 5 / 9 + 273
    K = K.toFixed(2)

  }
  else if (valor_selecionado == 'Ebulição'){
    valor = (valor * 32) / 212
    valor = valor.toFixed(2)


    C = (valor - 32) * 5 / 9
    C = C.toFixed(2)
    var K = (valor - 32) * 5 / 9 + 273
    K = K.toFixed(2)
  }
  else{
    valor = 0
    C = 0
    var K = 0
  }

  document.getElementById('C').innerHTML = C + ' °C';
  document.getElementById('F').innerHTML = valor + ' °F';
  document.getElementById('K').innerHTML = K + ' K';
}

function converter_escala(){
  let valor_converter = document.getElementById('valor-escala').value;
  let xC = (C*valor_converter)/valor
  xC = xC.toFixed(2)
  document.getElementById('mostrar-conversão').innerHTML = xC + ' C°';
}

function submitForm(event) {
  event.preventDefault();
  window.history.back();
}