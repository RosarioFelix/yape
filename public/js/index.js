'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.selectedInfo == null){
    wrapper.append(Slide(_ => render(root)));
  }else if(state.selectedInfo == "info2"){
    wrapper.append(ValidateNumber(_ => render(root)));
    //root.append(wrapper);
  }else if(state.selectedInfo == "info3"){
    wrapper.append(Codigo(_ => render(root)));
    //root.append(wrapper);
  }else if(state.selectedInfo == "info4"){
    wrapper.append(Datos(_ => render(root)));
  }else if (state.selectedInfo == "info5"){
    wrapper.append(Registrado(_ => render(root)));
  }else if (state.selectedInfo == "info6"){
      wrapper.append(CreditCard());
  }
  root.append(wrapper);
}

const state = {
  //info:null,
  selectedInfo: null,
  phone : null,
  code: null,
  data : null,
  name : null,
  email : null,
  password: null
}

$(_=>{
  const root = $('.root');
  render(root);
  $('.carousel.carousel-slider').carousel({fullWidth: true});

});
