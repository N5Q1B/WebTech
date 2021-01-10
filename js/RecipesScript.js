$(document).ready(function() {

  $(".content .radio_content").hide(); //this line to hide what ever inside the wrapper by default
  $(".content .radio_content:first-child").show();

  $(".content2 .radio_content2").hide(); //this line to hide what ever inside the wrapper by default
  $(".content2 .radio_content2:first-child").show();

  $(".content3 .radio_content3").hide(); //this line to hide what ever inside thr warpper by default
  $(".content3 .radio_content3:first-child").show();

  $(".radio_wrap").click(function() {
    var current_radio = $(this).attr("data-radio");
    $(".content .radio_content").hide();
    $("." + current_radio).show();
  });

  $(".radio_wrap2").click(function() {
    var current_radio = $(this).attr("data-radio");
    $(".content2 .radio_content2").hide();
    $("." + current_radio).show();
  });

  $(".radio_wrap3").click(function() {
    var current_radio = $(this).attr("data-radio");
    $(".content3 .radio_content3").hide();
    $("." + current_radio).show();
  });
});
