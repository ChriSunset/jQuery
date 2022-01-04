console.log("Bonjour !");
$(function () {
  //ici mon code jQuery

  // ------------------ EVENEMENT MOUSEOVER ------------------

  $(".zone1").on("mouseover", function () {
    $(this).css("background", "IndianRed");
    // $(this) === $(".zone1")
    $("#info").text("Je suis  dans la zone 1");
  });

  // ------------------ EVENEMENT MOUSEMOVE -----------------------

  $(".zone2").on("mousemove", function (event) {
    $(this).text(" pageX: " + event.pageX + " , pageY: " + event.pageY);
    // $(this) === $(".zone2")
    $("#info").text("Je suis  dans la zone 2");

    // ------------------ EVENEMENT MOUSEOUT -----------------------

    $(".zone3").on("mouseout", function () {
      $(this).css("background", "IndianRed");
      // $(this) === $(".zone3")
      $("#info").text("Je suis sortie de la zone 3");
    });

    // ------------------ EVENEMENT MOUSEENTER + MOUSELEAVE -----------------------

    $(".zone4").on("mouseenter", function () {
      $(this).css("background", "IndianRed");
      // $(this) === $(".zone3")
      $("#info").text("J'entre dans la zone 4");
    });

    $(".zone4").on("mouseleave", function () {
      $(this).css("background", "blue");
      // $(this) === $(".zone3")
      $("#info").text("Je quitte la zone 4");
    });

    // ------------------ EVENEMENT MOUSEUP -----------------------

    $(".zone5").on("mouseup", function () {
      $(this).css("background", "yellow");
      // $(this) === $(".zone3")
      $("#info").text("J'entre dans la zone 5");
    });

    // ------------------ EVENEMENT MOUSEUP + MOUSEDOWN -----------------------

    $(".zone6").on("mouseup", function () {
      $(this).css("background", "yellow");
      $("#info").text("J'entre dans la zone 6");
    });

    $(".zone6").on("mousedown", function () {
      $(this).css("background", "green");
      $("#info").text("J'entre dans la zone 6");
    });

    $(".zone7").on("click", function () {
      $(this).css("background", "green");
      $("#info").text("J'entre dans la zone 7");
    });

    $(".zone8").on("dblclick", function () {
      $(this).css("background", "pink");
      $("#info").text("J'entre dans la zone 8");
    });

    $(".zone9").contextmenu(function () {
      $(this).css("background", "purple");
      $("#info").text("J'entre dans la zone 9");
    });

    // ---------------------- EVENEMENT BLUR ------------------------
    // Lorsque nous allons cliquer ailleurs après avoir cliquer sur l'élément
    $(".zone10").on("blur", function () {
      $(this).css("background", "orange");
      $("#info").text("J'entre dans la zone 10");
    });

    // ---------------------- EVENEMENT CHANGE ------------------------
    // Lorsque nous allons changer l'option d'un élément sélectionné
    $(".zone11").on("change", function () {
      $(this).css("background", "orange");
      $("#info").text("J'entre dans la zone 11");
    });

    // ---------------------- EVENEMENT KEYDOWN ( presser une touche ) ------------------------
    $(".zone12").on("keydown", function () {
      $(this).css("background", "turquoise");
      $("#info").text("J'entre dans la zone 12");
    });

    // ---------------------- EVENEMENT KEYUP ( relacher une touche ) ------------------------
    $(".zone12").on("keyup", function () {
      $(this).css("background", "Hotpink");
      $("#info").text("J'entre dans la zone 12");
    });

    // --------------------------- EVENEMENT AU SCROLL --------------------
    $(window).on("scroll", function () {
      $("#info").css("background", "Lightgreen");
      $("#info").text("Je scroll");
    });
  });
});
