'use strict';

const ValidateNumber = (update) =>{
  const validate = $('<div class = "container"></div>');
  const spanMessage = $('<span></span>')
  const form = $('<form></form>');
  const flex = $('<div class = "flex"></div>');
  const imgPhone = $('<img src ="img/icons/phone.png">');
  const hcincoComenzar =$('<p class = "center-align text-neg">Para comenzar validemos tu número</p>');
  const spanRecibiras = $('<p class ="center-align gray-text text-small"> Recibirás un SMS con un codigo de validación</p>');
  const divInput =$('<div class="mt-15"></div>')
  const input = $('<input type = "number" >');
  const labelInput= $('<label class ="label-img"><img src="img/icons/phoneandnumber.png"></label>');
  const checkbox = $('<input type="checkbox" class="filled-in" id="filled-in-box" >');
  const label = $('<label for="filled-in-box">Acepto los <span class = "green-text">Terminos y Condiciones</span></label>');
  const btnflex = $('<div class = "flex"></div>');
  const buttonContinue = $('<button class ="btn yellow">Continuar</button>');
  buttonContinue.prop('disabled', true);


  validate.append(form);
  form.append(spanMessage)
  form.append(flex);
  flex.append(imgPhone);
  form.append(hcincoComenzar);
  form.append(spanRecibiras);
  form.append(divInput);
  divInput.append(labelInput);
  divInput.append(input);
  form.append(checkbox);
  form.append(label);
  form.append(btnflex);
  btnflex.append(buttonContinue);

form.change(function(){
  if(input.val().length == 9 && checkbox.prop('checked')){
    buttonContinue.prop('disabled',false);
  }else{
      buttonContinue.prop('disabled',true);
  }
});

buttonContinue.on('click', (e)=>{
  e.preventDefault();

  $.post('api/registerNumber',{
      phone:input.val(),
      terms:true
  },(response) =>{
    if(response.success == false){
      spanMessage.html('Numero ya esta regitrado, intente otro número');
    }else{
      state.phone = response.data.phone;
      state.code = response.data.code
      console.log(response.data.phone)
      state.selectedInfo = "info3";
      update();
      console.log(update);
    }
    console.log(response);
    console.log(response.success)
    console.log(response.data.code);
  },'json');
});

  return validate;
}
