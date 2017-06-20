'use strict';

const Segundo = (update) =>{
  const segundo = $('<div class = "container"></div>');
  const imgSegundo = $('<img src ="img/icons/phone.png">');
  const hcincoSegundo =$('<p>Para comenzar validemos tu número</p>');
  const span = $('<span> Recibirás un SMS con un codigo de validación</span>');
  const input = $('<input></input>');
  const check = $('<input type="checkbox" class="filled-in" id="filled-in-box"  />')
  const label = $('<label for="filled-in-box">Acepto los <span class = "green-text">Terminos y Condiciones</span></label>')


  segundo.append(imgSegundo);
  segundo.append(hcincoSegundo);
  segundo.append(span);
  segundo.append(input);
  segundo.append(check);
  segundo.append(label);

  return segundo;
}
