'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  //if(state.selectedInfo){
    wrapper.append(Slide(_ => render(root)));
    wrapper.append(Segundo(_ => render(root)));
    root.append(wrapper);
};

const state = {
  info:null,
  selectedInfo:null
}

$(_=>{

  $.post('api/registerNumber',{
    phone:995173456,
    terms:true
},(response) =>{
  const root = $('.root');
  render(root);
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  console.log(response);

},'json');
});
