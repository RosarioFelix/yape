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
  const card = $('<input class="relative" type = "number">');
//  const divShowCard = $('<div class = "flex"></div>')
  //const

  creditCard.append(help);
  creditCard.append(flexImgCredit);
  flexImgCredit.append(imgCredit);
  creditCard.append(hcincoCredit);
  creditCard.append(pmensajitoCredit);
  creditCard.append(formCredit);
  formCredit.append(labelInputCard);
  formCredit.append(card);


  return creditCard;
}
