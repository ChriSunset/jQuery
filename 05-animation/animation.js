console.log("coucou animation");

$(function () {
  // ------------------------ effet de fondu en jquery

  $("#b1").click(function () {
    $("#h1Fondu").fadeOut(1000); // temps en ms
  });

  $("#b2").click(function () {
    $("#h1Fondu").fadeIn(1000);
  });

  $("#b3").click(function () {
    $("#h1Fondu").fadeToggle(1000);
  });

  $("#b4").click(function () {
    $("#h1Fondu").fadeTo(1000, 0.1); // fondu jusqu'à un niveau d'opacité
  });

  // ------------------------ effet de slide en jQuery

  $("#b1Slide").click(function () {
    $("#h1Slide").slideUp(1000);
  });

  $("#b2Slide").click(function () {
    $("#h1Slide").slideDown(10000);
  });

  $("#b3Slide").click(function () {
    $("#h1Slide").slideToggle(1000);
  });

  // ------------------------ show() et hide() en jQuery

  $("#b1Hide").click(function () {
    $("#h1HideShow").hide(5000, "linear", function () {
      alert("Titre bien caché !");
    });
  });

  $("#b2Show").click(function () {
    $("#h1HideShow").show(5000);
  });

  // ------------------------ Toogle en jQuery
  $("#b1Toggle").click(function () {
    $("#h1Toggle").toggle();
  });

  $("#b2Toggle").click(function () {
    $("#h2Toggle").toggle(2000, function () {
      alert("Etat de visibilité changé");
    });
  });

  // ------------------------ animate() en jQuery

  $("#b1Animate").click(function () {
    $("#h1Animate").animate({ width: "-=20%" }, 1000);
  });

  $("#b2Animate").click(function () {
    $("#h1Animate").animate({ height: "toggle" }, 1000);
  });

  $("#b3Animate").click(function () {
    $("#h1Animate").animate({ width: "+=20%" }, 1000);
  });
});
