'use strict';

const CreditCard =(update) =>{
  const creditCard = $('<div class= "container"></div>');
  const help = $('<img class = "fl-right help" src="img/icons/question.png">')
  const flexImgCredit = $('<div class = "flex"></div>');
  const imgCredit = $('<img src ="img/icons/bcp-logo.png">');
  const hcincoCredit =$('<p class = "center-align text-neg">Registra tu tarjeta débito BCP</p>');
  const pmensajitoCredit = $('<p class ="center-align gray-text text-small">Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles</p>');
  const formCredit = $('<form></form>');
  const labelInputCard= $('<label class ="img-datos"><img class ="mt-menos15 " src="img/icons/card.png"></label>');
  const card = $('<input class="relative" max="16" type = "number" required/>');
  const divScanCard = $('<div class = "flex  scan"></div>');
  const imgScan = $('<img src = "img/icons/scan.png">');
  const textScan = $('<span class="green-text">Escanear tarjeta<span>');
  const row = $('<div class = row><div>');
  const colCinco =$('<div class = "col s5"><div>');
  const dateCard = $('<span>Fecha de vencimiento<span>');
  const colCuatro= $('<div class = "col s3"><div>');
  const inputMes = $('<input  type="number" placeholder = "00"  required/>');
  const colCuatroDos= $('<div class = "col s3"><div>');
  const inputAno = $('<input  type="number" placeholder ="00"  required/>');
  const btnflexCard = $('<div class = "flex"></div>');
  const buttonContinueCard = $('<button class ="btn yellow">Continuar</button>');
  buttonContinueCard.prop('disabled', true);

  creditCard.append(help);
  creditCard.append(flexImgCredit);
  flexImgCredit.append(imgCredit);
  creditCard.append(hcincoCredit);
  creditCard.append(pmensajitoCredit);
  creditCard.append(formCredit);
  formCredit.append(labelInputCard);
  formCredit.append(card);
  formCredit.append(divScanCard);
  divScanCard.append(imgScan);
  divScanCard.append(textScan);
  formCredit.append(row);
  row.append(colCinco);
  colCinco.append(dateCard);
  row.append(colCuatro);
  colCuatro.append(inputMes);
  row.append(colCuatroDos);
  colCuatroDos.append(inputAno);
  formCredit.append(btnflexCard);
  btnflexCard.append(buttonContinueCard);


  formCredit.change(function(){
    console.log(card.val())
    console.log(card.val().length)

    if(card.val().length == 16 && inputMes.val().length ==2 && inputAno.val().length ==2){
      buttonContinueCard.prop('disabled',false)
    }else{
      buttonContinueCard.prop('disabled',true)
    }
  });

  buttonContinueCard.on('click', (e)=>{
    e.preventDefault();
    state.creditCard = card.val()
    state.month = inputMes.val()
    state.year = inputAno.val()
    console.log(state.month)
    state.selectedInfo = "info7";
    update();
  });


  return creditCard;
}
