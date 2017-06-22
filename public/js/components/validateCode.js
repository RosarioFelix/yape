'use strict';

const Codigo =(update) =>{
  const codigo = $('<div class = "container"></div>');
  const flexImg = $('<div class = "flex"></div>');
  const imgMessage = $('<img src ="img/icons/message.png">');
  const hcincoIngresa =$('<p class = "center-align text-neg">Ahora ingresa tu código</p>');
  const pmensajito = $('<p class ="center-align gray-text text-small"> Enviamos un SMS con el código de validación al número <span>'+state.phone+'</span></p>');
  let span = $('<span class = red-text>El código es: '+state.code+'</span>');
  const divInputCodigo =$('<div class="mt-15"></div>')
  const inputNumber = $('<input class="relative" type = "number" placeholder = "- - - - -">');
  const labelInputLock= $('<label class ="candado"><img src="img/icons/lock.png"></label>');


  codigo.append(flexImg);
  flexImg.append(imgMessage);
  codigo.append(hcincoIngresa);
  codigo.append(pmensajito);
  codigo.append(span)
  codigo.append(divInputCodigo);
  divInputCodigo.append(labelInputLock);
  divInputCodigo.append(inputNumber);
/*
let i = 0;

inputTercero.on('keypress', function() {
  setInterval(function(){
    if(i == 0){
      $.post('api//resendCode',{
          phone:state.phone,
      },(response) =>{
      span.html("El nuevo código es :" + response.data)
        console.log(response);
      },'json');
    }
  },10000)

})*/

  inputNumber.on('keyup',(e) =>{
    e.preventDefault();
    if(inputNumber.val() == state.code){
      state.selectedInfo = "info4";
    update();
    }
  })

  return codigo;
}
