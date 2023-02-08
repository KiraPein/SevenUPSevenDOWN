var bal = 10000;
var sel = "sdoo";
var bet = 0;
$("#sdoo").css("border", "4px solid #ffe300");
$(".reset").click(function () {
    bal = 10000;
    sel = "sdoo";
    $(".b1").css("border", "0px solid #ffe300");
    $("#sdoo").css("border", "4px solid #ffe300");

    $("#ys").html("<p>Seven Down</p>");
    $("#ab").html("<p>" + bal + "</p>");
    $(".wintxt").html("Place Your Bet!!");
});

$(".b1").click(function () {
    var idd = this.id;
    //alert(idd);
    sel = this.id;
    if (sel == "supp")
        $("#ys").html("<p>Seven Up</p>");
    if (sel == "sdoo")
        $("#ys").html("<p>Seven Down</p>");
    if (sel == "sevv")
        $("#ys").html("<p>Exact Seven</p>");

    $(".b1").css("border", "0px solid #ffe300");
    $("#" + this.id).css("border", "4px solid #ffe300");

})

$(".bb").click(function () {
    var x = document.getElementById("bet").value;
    var y = parseInt(x);
    if (bal == 0)
        alert("please Reset");
    else if (y > bal) {
        alert("Bet a smaller amount");
    }
    else {
        var a = Math.floor(Math.random() * 6 + 1);
        var b = Math.floor(Math.random() * 6 + 1);

        $("#die1").attr("src", "images/dice" + a + ".jpg");
        $("#die2").attr("src", "images/dice" + b + ".jpg");
        var ele1 = document.querySelector("#die1");
        var ele2 = document.querySelector("#die2");
       
        


        ele1.classList.add("pressed1");
        ele2.classList.add("pressed2");

        var cc = a + b;
        //alert(a+" "+b);
        // alert(sel)
        var outt = " "
        if (cc == 7 && sel == "sevv") {
            bal += y * 2;
            outt = "Congrats You Won";
        }
        else if (cc < 7 && sel == "sdoo") {
            bal += y;
            outt = "Congrats You Won";
        }
        else if (cc > 7 && sel == "supp") {
            bal += y;
            outt = "Congrats You Won";
        }
        else {
            bal -= y;
            outt = "OOPS!! You Lost";
        }
        outt=outt+" ("+ cc+")";
        setTimeout(function () {
            $(".wintxt").html(outt);
            $("#ab").html("<p>" + bal + "</p>");
            
        }, 1000);
        setTimeout(function () {
          
            ele1.classList.remove("pressed1");
            ele2.classList.remove("pressed2");
        }, 2500);
        setTimeout(function () {
            $(".wintxt").html("Place Your Next Bet");

        }, 2500);
    }
});

function anim1()
{

}
