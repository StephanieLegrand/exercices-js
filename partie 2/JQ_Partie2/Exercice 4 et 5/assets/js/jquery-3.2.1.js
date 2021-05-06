$(document).ready(function () {
    // $("#green").css({ "backgroundColor": "green" });
    // $("#red").css("backgroundColor", "red");
    // $("#blue").css({ "backgroundColor": "blue" });

    $("button").on("click", function () {
        $("#text").css({ "color": $(this).attr('id') });

    });
    $("button").mouseover(function () {
        $(this).css({ "color": $(this).attr('id') })
    })
    $("button").mouseout(function () {
        $(this).css({ "color": "black" })
    })

    // version 2 ex 4
    // $("#green").click(function () {
    //     $("#text").css("color", "green");
    // });
    // $("#red").click(function () {
    //     $("#text").css("color", "red");
    // });
    // $("#blue").click(function () {
    //     $("#text").css("color", "blue");
    // });

    // version 3 pour ex 4 (pour que le texte change de couleur selon le nom du btn, qui est un attribut couleur)
    // $("button").click(function () {
    //     $("#text").css("color", $(this).attr('id'));
    // });

});
