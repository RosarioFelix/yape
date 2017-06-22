'use strict';

const Slide = (update) => {
  const containerSli = $('<div class ="container"></div>');
  const  slide = $('<div class="carousel carousel-slider center" data-indicators="true" style ="height:320px"></div>');
  const containerUno = $('<div class="carousel-item "><img src= "img/icons/icon-people.png"></div>');
  const hcincoUno = $('<h5>Paga a tus amigos</h5>');
  const textUno = $('<p>Paga a quien quieras desde donde quieras, sin usar efectivo.</p>')
  const containerDos = $('<div class="carousel-item "><img src= "img/icons/happy-person.png"></div>');
  const hcincoDos = $('<h5>Sin número de cuenta</h5>');
  const textDos = $('<p>Elige a quién pagar desde tu lista de contactos.</p>')
  const containerTres = $('<div class="carousel-item"><img src= "img/icons/group-people.png"></div>');
  const hcincoTres = $('<h5>Gratis y Seguro</h5>');
  const textTres = $('<p>La transferencia es inmediata y gratuita de una cuenta a otra.</p>');
  const button = $('<a class="waves-effect waves-light yellow btn">Registrarme</a>')

  containerSli.append(slide);
  slide.append(containerUno);
  containerUno.append(hcincoUno);
  containerUno.append(textUno);
  slide.append(containerDos);
  containerDos.append(hcincoDos);
  containerDos.append(textDos);
  slide.append(containerTres);
  containerTres.append(hcincoTres);
  containerTres.append(textTres);
  containerSli.append(button);


  button.on("click", (e) => {
    e.preventDefault();
    state.selectedInfo = "info2";
    update();
    console.log(update)
  });

  return containerSli;
};
