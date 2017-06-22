'use strict';

const Registrado = (update) =>{
  const registrado = $('<div class ="bg yellow"></div>');
  const checkRegistro = $('<div class ="flex pd-25"><div>');
  const imgCheck = $('<img src = "img/icons/check.png">')
  const textBien = $('<p class ="center-align">¡Bien!</p>');
  const textUsarYape = $('<p class ="center-align">Ahora puedes usar Yape</p>');

  registrado.append(checkRegistro);
  checkRegistro.append(imgCheck);
  registrado.append(textBien);
  registrado.append(textUsarYape);

  setTimeout(function(){
    state.selectedInfo = "info6";
    update();
   }, 3000);

  return registrado;
}
