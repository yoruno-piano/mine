$(document).ready(function () {
  $(".star").each(function () {
      var randomtop = Math.floor(Math.random() * ($(window).height() - $(this).height())),
          randomleft = Math.floor(Math.random() * ($(window).width() - $(this).width())),
          randomzindex = Math.floor(Math.random());
      $(this).css({
          "top": randomtop,
          "left": randomleft,
          "z-index": randomzindex
      });
  });
  $(".star_delayShiny").each(function () {
    var randomtop = Math.floor(Math.random() * ($(window).height() - $(this).height())),
        randomleft = Math.floor(Math.random() * ($(window).width() - $(this).width())),
        randomzindex = Math.floor(Math.random());
    $(this).css({
        "top": randomtop,
        "left": randomleft,
        "z-index": randomzindex
    });
});
$(".star_normalShiny").each(function () {
  var randomtop = Math.floor(Math.random() * ($(window).height() - $(this).height())),
      randomleft = Math.floor(Math.random() * ($(window).width() - $(this).width())),
      randomzindex = Math.floor(Math.random());
  $(this).css({
      "top": randomtop,
      "left": randomleft,
      "z-index": randomzindex
  });
});

});