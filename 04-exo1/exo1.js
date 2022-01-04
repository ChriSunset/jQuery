$(function () {
  // ici mon script

  // EXO 1
  $(".zone1").on("click", function () {
    $(this).css("color", "green");
    $(this).css("text-align", "center");
    $(this).css("font-size", "80px");
  });

  // EXO 2
  $(".zone2").on("click", function () {
    $("body").css("background", "Hotpink");
  });

  // EXO 3
  $(".zone3").on("mouseup", function () {
    $("body").css("background", "green");
  });
});
