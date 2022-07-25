console.log('Hello!');

$(document).ready(() => {
  $('#menu-mobile-btn').click(() => {
    $('#menu-mobile').toggleClass('d-none');
  });
  $('#agree').click(() => {
    $('#agreeFalse').toggleClass('d-none');
    $('#agreeTrue').toggleClass('d-none');
  })
});
