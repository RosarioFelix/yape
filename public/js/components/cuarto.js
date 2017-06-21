'use strict';

const Datos = (update) =>{
  const datosPersonales = $('<div class="container"></div>');
  const divflex = $('<div class = "flex"></div>');
  const imgCandado = $('<img src ="img/icons/lockone.png">');
  const hcincoCuarto =$('<p class = "center-align text-neg">Crea tu Usuario Yape</p>');
  const pmensajitoCuarto = $('<p class ="center-align gray-text text-small"> Ingresa un nombre, email y clave de usuario</p>');
  const formDatos = $('<form></form>');
  const name = $('<input type = "text" placeholder="nombre">');
  const email = $('<input type = "email" placeholder="correo@ejemplo.com" /required>');
  const password = $('<input type = "password" placeholder="Ingresa clave de 6 digitos" /required>');
  const mensajeClaveCuidar =$('<p class="center-align gray-text text-small">Cuida esta clave como oro, es tú acseso a Yape</p>');
  const btnflexCuarto = $('<div class = "flex "></div>');
  const buttonCuarto = $('<button class ="btn yellow cuarto">Crear Cuenta</button>');

  buttonCuarto.prop('disabled', true);

  //const nombre = $()

  datosPersonales.append(divflex);
  divflex.append(imgCandado);
  datosPersonales.append(hcincoCuarto);
  datosPersonales.append(pmensajitoCuarto);
  datosPersonales.append(formDatos);
  formDatos.append(name);
  formDatos.append(email);
  formDatos.append(password);
  formDatos.append(mensajeClaveCuidar);
  formDatos.append(btnflexCuarto);
  btnflexCuarto.append(buttonCuarto);


  formDatos.change(function(){
    if(name.val().length!= 0 && email.val().length!= 0 && password.val().length==6){
      buttonCuarto.prop('disabled',false)
    }else{
      buttonCuarto.prop('disabled',true)
    }
  });

buttonCuarto.on('click', (e) =>{
  e.preventDefault();
  $.post('api/createUser',{
      phone:state.phone,
      name:name.val(),
      email:email.val(),
      password:password.val()
  },(response) =>{
    console.log(response)
      state.name = response.data.name;
      state.email = response.data.email;
      state.password = response.data.password;
      state.selectedInfo = "info5";
      update();
  },'json')

})
  return datosPersonales;
}
