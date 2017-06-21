'use strict';

const Codigo =(update) =>{
  const codigo = $('<div class = "container"></div>');
  const flexTercero = $('<div class = "flex"></div>');
  const imgTercero = $('<img src ="img/icons/message.png">');
  const hcincoTercero =$('<p class = "center-align text-neg">Ahora ingresa tu código</p>');
  const pmensajito = $('<p class ="center-align gray-text text-small"> Enviamos un SMS con el código de validación al número <span>'+state.phone+'</span></p>');
  let span = $('<span class = red-text>El código es: '+state.code+'</span>');
  const divInputTercero =$('<div class="mt-15"></div>')
  const inputTercero = $('<input type = "number" placeholder = "- - - - -">');
  const labelInputTercero= $('<label class ="candado"><img src="img/icons/lock.png"></label>');


  codigo.append(flexTercero);
  flexTercero.append(imgTercero);
  codigo.append(hcincoTercero);
  codigo.append(pmensajito);
  codigo.append(span)
  codigo.append(divInputTercero);
  divInputTercero.append(labelInputTercero);
  divInputTercero.append(inputTercero);


/*$(document).ready(setInterval(otrocodigo(){
  function otrocodigo() {
    $.post('api//resendCode',{
        phone:state.phone,
    },(response) =>{
    span.html("El código es :" + response.data)
      console.log(response);
    },'json');

  };

},3000));*/

  inputTercero.on('keyup',(e) =>{
    e.preventDefault();
    if(inputTercero.val() == state.code){
      state.selectedInfo = "info4";
    update();
    }
  })

  return codigo;
}
