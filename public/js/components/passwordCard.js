'use strict';
const PasswordCard =(update) =>{
  const passwordCard= $('<div class= "container"></div>');
  const helpPassw = $('<img class = "fl-right help" src="img/icons/question.png">');
  const spanNot = $('<span><span>');
  const flexImgPassw = $('<div class = "flex"></div>');
  const imgCreditPassw = $('<img src ="img/icons/bcp-logo.png">');
  const hcincoPassw=$('<p class = "center-align text-neg">Ingresa la clave de tu tarjeta</p>');
  const pmensajitoPassw= $('<p class ="center-align gray-text text-small">Tarjeta'+state.creditCard+'</p>');
  const formPassw= $('<form></form>');
  const labelInputPassw= $('<label class ="img-datos"><img class ="mt-menos15 " src="img/icons/card.png"></label>');
  const passw = $('<input class="relative"  type = "password">');
  const btnflexPassw = $('<div class = "flex "></div>');
  const buttonPassw = $('<button class ="btn yellow cuarto">Crear Cuenta</button>');
  buttonPassw.prop('disabled', true);


  passwordCard.append(helpPassw);
  passwordCard.append(spanNot);
  passwordCard.append(flexImgPassw);
  flexImgPassw.append(imgCreditPassw);
  passwordCard.append(hcincoPassw);
  passwordCard.append(pmensajitoPassw);
  passwordCard.append(formPassw);
  formPassw.append(labelInputPassw);
  formPassw.append(passw);
  formPassw.append(btnflexPassw);
  btnflexPassw.append(buttonPassw);

  formPassw.change(function(){
    console.log(passw.val())
    console.log(passw.val().length)

    if(passw.val().length!=0){
      buttonPassw.prop('disabled',false)
    }else{
      buttonPassw.prop('disabled',true)
    }
  });

  buttonPassw.on('click',(e) =>{
      e.preventDefault();
      $.post('api/registerCard',{
          phone:state.phone,
          cardNumber : state.creditCard,
          cardMonth :state.month,
          cardYear: state.year,
          cardPassword: passw.val()
      },(response) =>{
       if(response.success == false){
          spanNot.htm('Usuario no encontrado');
        }else{
          state.creditCard = response.data.cardNumber;
          state.month= response.data.cardMonth;
          state.year = response.data.cardYear;
          state.creditPassword =response.data.cardPassword;
          state.selectedInfo = "info8";
          update();
        }
        console.log(response.success)
      },'json');

  })

 return passwordCard;
}
