console.log('script loaded');

$(document).ready(function(){

  console.log('ready');

  $('#new-item-show').click(function(){
    $('#new-item').slideToggle(200);
  });

});
