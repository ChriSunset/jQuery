$(function () {
  // ici mon script

  // EXO 1
  $(".zone1").on("click", function () {
    /* $(this).css("color", "green");
    $(this).css("text-align", "center");
    $(this).css("font-size", "80px");*/
    $(this).css({ textAlign: "center", fontsize: "80px", color: "green" });
    $("h1").css({ textAlign: "center", fontsize: "80px", color: "green" });
  });

  // EXO 2
  $(".zone2").on("click", function () {
    $("body").css("background", "Hotpink");
  });

  // EXO 3
  $(".zone3").on("click", function (e) {
    e.preventDefault(); // permet de ne pas recharger la page, interrompt l'envoi
    $("body").css("background", "green");
  });

  // EXO 4
  $(".zone5").on("click", function (e) {
    e.preventDefault();
    let couleur = $(".zone4").val();
    console.log(couleur);
    $("body").css("background", couleur);
  });

  // EXO 5
  $(".zone7").on("click", function (e) {
    e.preventDefault();
    let color = $(".zone6").val();
    console.log(color);
    $("body").css("background", color);
  });

  // EXO 6
  $(".zone8").on("click", function () {
    $(this).css("background", "yellow");
  });

  // EXO 7
  $(".zone9").on("click", function () {
    $(".zone9").css("background", "yellow");

    $(".zone9").on("click", function () {
      $(this).css("background", "green");
    });
  });
});
