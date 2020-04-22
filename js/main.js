
$(function () {
  $('#main_').click(function () {
    $('html,body').animate({ scrollTop: $('#main_').offset().top }, "show");
    return false;
  });
});
$(function () {
  $('#latest_').click(function () {
    $('html,body').animate({ scrollTop: $('#latest').offset().top }, "show");
    return false;
  });
});
$(function () {
  $('#email_').click(function () {
    $('html,body').animate({ scrollTop: $('#email').offset().top }, "show");
    return false;
  });
});
$(function () {
  $('#connect_').click(function () {
    $('html,body').animate({ scrollTop: $('#connect').offset().top }, "show");
    return false;
  });
});