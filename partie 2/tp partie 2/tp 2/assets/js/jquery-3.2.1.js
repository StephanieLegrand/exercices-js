
$(document).ready(function () {



    $("#enter").click(function () {
        let first = $("#first").val();
        let second = $("#second").val();
        let third = $("#third").val();
        let fourth = $("#fourth").val();
        let fifth = $("#fifth").val();
        let somme = parseInt(first) + parseInt(second) + parseInt(third) + parseInt(fourth) + parseInt(fifth);
        var result = somme / 5;
        console.log(result);


        if (result == 20) {
            alert(result + "\nappreciation : " + "\nExcellent");
        }

        else if (10 > result && result > 0) {
            alert(result + "\nappreciation : " + "\nEn dessous de la moyenne");
        }
        else if (result >= 10 && result < 13) {
            alert(result + "\nappreciation : " + "\nMoyen");
        }
        else if (result >= 13 && result < 16) {
            alert(result + "\nappreciation : " + "\nBien");
        }

        else if (result >= 16 && result < 20) {
            alert(result + "\nappreciation : " + "\nTrès bien ");
        }
        else if (0 >= result && result > 20) {
            alert("Entre un nombre compris entre 1 et 20 pour voir ton appreciation");
        }
        else {
            alert("Erreur");
        }

    });
});
