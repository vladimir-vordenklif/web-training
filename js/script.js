$(".nav__menu, .closed").click(function() { // Тут класс твоей кнопки
    $('.menu').slideToggle(200);  // Тут класс твоего меню, предварительно оно "display:none"
  });
//   $('.menu').on('mouseenter', function (event) {
//     $("body").css("overflow","hidden"); 
//  }).on('mouseleave',  function(){
//     $("body").css("overflow","auto");
//  });
//    $("#drag5").draggable({axis:"x"});
//    $("#drag4").draggable({axis:"y"});
$(".clik-one").click(function() { // Тут класс твоей кнопки
  $('.clik-one-n').slideToggle(200);  // Тут класс твоего меню, предварительно оно "display:none"
});
$(".clik-two").click(function() { // Тут класс твоей кнопки
  $('.clik-two-n').slideToggle(200);  // Тут класс твоего меню, предварительно оно "display:none"
});
$(".clik-three").click(function() { // Тут класс твоей кнопки
  $('.clik-three-n').slideToggle(200);  // Тут класс твоего меню, предварительно оно "display:none"
});
$(".clik-four").click(function() { // Тут класс твоей кнопки
  $('.clik-four-n').slideToggle(200);  // Тут класс твоего меню, предварительно оно "display:none"
});
$(".clik-five").click(function() { // Тут класс твоей кнопки
  $('.clik-five-n').slideToggle(200);  // Тут класс твоего меню, предварительно оно "display:none"
});
$(".clik-six").click(function() { // Тут класс твоей кнопки
  $('.clik-six-n').slideToggle(200);  // Тут класс твоего меню, предварительно оно "display:none"
});

// $(".arrow-ac").click(function(e) {
//   e.preventDefault();
//   $(".arrow-ac").removeClass('active');
//   $(this).addClass('active');
// })
$(function() {
  $(".arrow-ac").click(function() {
      $(".ac-block").removeClass("active");         
      $(this).toggleClass("active");
  })
});


