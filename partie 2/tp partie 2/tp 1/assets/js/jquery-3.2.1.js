
$(document).ready(function () {
    var count = 0;
       
      var minNumber = 1;
    var maxNumber = 100;
    var result = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
    console.log(result);
    // $('#result').html(result);
    
    $("#enter").click(function () { 
        count++;
        var number = $("#number").val();
     
    if (minNumber >= number && number < maxNumber) {
        alert("Entre un nombre compris entre 1 et 100");
    }

    else if (number < result) {
        alert("plus");
    }
    else if (number > result) {
        alert("moins");
    }

    else { 
        alert("correct !"+ "\n tu as reussi en "+ count + " essais");
    //   $("#enter").click("text");
    //   var count = document.getElementById("enter").textContent();
       

        alert("tu as trouver le bon nombre apprès " + count + " essai");  
        
    }
});
});
