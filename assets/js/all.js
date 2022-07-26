"use strict";

console.log('Hello!');
$(document).ready(function () {
  $('#menu-mobile-btn').click(function () {
    $('#menu-mobile').toggleClass('d-none');
  });
  $('#agree').click(function () {
    $('#agreeFalse').toggleClass('d-none');
    $('#agreeTrue').toggleClass('d-none');
  });
});
//# sourceMappingURL=all.js.map
