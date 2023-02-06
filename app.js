var bal = 10000;
var sel = "sdoo";
var bet = 0;
$("#sdoo").css("border", "4px solid #ffe300");
$(".reset").click(function () {
    bal = 10000;
    sel = "sdoo";
    $(".b1").css("border", "0px solid #ffe300");
    $("#sdoo").css("border", "4px solid #ffe300");

    $("#ab").html("<p>" + bal + "</p>");
    $(".wintxt").html("Place Your Bet!!");
});

$(".b1").click(function () {
    var idd = this.id;
    //alert(idd);
    sel=this.id;
    $(".b1").css("border", "0px solid #ffe300");
    $("#" + this.id).css("border", "4px solid #ffe300");

})

$(".bb").click(function () {
    var x = document.getElementById("bet").value;
    var y = parseInt(x);
    if(bal==0)
        alert("please Reset");
    else if (y > bal) {
        alert("Bet a smaller amount");
    }
    else {
        var a = Math.floor(Math.random() * 6 + 1);
        var b = Math.floor(Math.random() * 6 + 1);
        //dice animation

        var cc = a + b;
        // alert(cc);
        // alert(sel)
        if (cc == 7 && sel == "sevv") {
            bal += y * 2;

            $(".wintxt").html("Congrats You Won");
        }
        else if (cc < 7 && sel == "sdoo") {
            bal += y;

            $(".wintxt").html("Congrats You Won");
        }
        else if (cc > 7 && sel == "supp") {
            bal += y;

            $(".wintxt").html("Congrats You Won");
        }
        else {
            bal -= y;

            $(".wintxt").html("OOPS!! You Lost");
        }
        $("#ab").html("<p>" + bal + "</p>");
    }
});
//firstly 7down will be selected... first take input of which box has to be selected and then change parameters and display accordingly. and then take input of bet size and then if the user presses the bet button then first check if the user has sufficient balance or not. if not then alert the user to enter less amount. if yes then proceed to a different function. here first u randomize 2 variables and then throw the dixce and then when the dice lands then show the win or loose and then change balance.