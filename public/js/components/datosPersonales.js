'use strict';

const Datos = (update) =>{
  const datosPersonales = $('<div class="container"></div>');
  const divflex = $('<div class = "flex"></div>');
  const imgCandado = $('<img src ="img/icons/lockone.png">');
  const hcincoCreaUser =$('<p class = "center-align text-neg">Crea tu Usuario Yape</p>');
  const pmensajitoDatos = $('<p class ="center-align gray-text text-small"> Ingresa un nombre, email y clave de usuario</p>');
  const formDatos = $('<form></form>');
  const labelInputFace= $('<label class ="img-datos"><img class="mt-menos15" src="img/icons/user.png"></label>');
  const name = $('<input class="relative" type = "text" placeholder="nombre">');
  const labelInputEmail= $('<label class ="img-datos"><img src="img/icons/message-gray.png"></label>');
  const email = $('<input class="relative" type = "email" placeholder="correo@ejemplo.com">');
  const labelInputPassw= $('<label class ="img-datos"><img class ="small" src="img/icons/lock.png"></label>');
  const password = $('<input class="relative" type = "password" placeholder="Ingresa clave de 6 digitos" /required>');
  const mensajeClaveCuidar =$('<p class="center-align gray-text text-small">Cuida esta clave como oro, es tú acseso a Yape</p>');
  const btnflexDatos = $('<div class = "flex "></div>');
  const buttonCreaUser = $('<button class ="btn yellow cuarto">Crear Cuenta</button>');

  buttonCreaUser.prop('disabled', true);

  datosPersonales.append(divflex);
  divflex.append(imgCandado);
  datosPersonales.append(hcincoCreaUser);
  datosPersonales.append(pmensajitoDatos);
  datosPersonales.append(formDatos);
  formDatos.append(labelInputFace);
  formDatos.append(name);
  formDatos.append(labelInputEmail);
  formDatos.append(email);
  formDatos.append(labelInputPassw);
  formDatos.append(password);
  formDatos.append(mensajeClaveCuidar);
  formDatos.append(btnflexDatos);
  btnflexDatos.append(buttonCreaUser);


  formDatos.change(function(){
    if(name.val().length!= 0 && email.val().length!= 0 && password.val().length==6){
      buttonCreaUser.prop('disabled',false)
    }else{
      buttonCreaUser.prop('disabled',true)
    }
  });

buttonCreaUser.on('click', (e) =>{
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
