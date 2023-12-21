// document.getElementById
// document.querySelector
// document.getElementsByClassName
// document.getElementsByTagName

// var paragraph = document.getElementById("paragraph");

$(document).ready(function () {
    // Syntax Jquery
    // $("p").dblclick(function () {
    //     $("p").hide();
    // });
    // $("#paragraph").dblclick(function () {
    //     $("#paragraph").hide();
    // });
    // $("#paragraph").mouseenter(function () {
    //     $("#paragraph").hide();
    // });
    // $("#paragraph").mouseleave(function () {
    //     $("#paragraph").show();
    // });
    // let i = 0;
    // $("input").keypress(function () {
    //     $("span").text((i += 1));
    // });
    // $("input").keydown(function () {
    //     $("span").text((i += 1));
    // });
    // $("input").keyup(function () {
    //     $("span").text((i += 1));
    // });

    // Effects
    $("#btn1").click(function () {
        $("#panel1").show();
    });
    $("#btn2").click(function () {
        $("#panel2").hide();
    });
    $("#btn3").click(function () {
        $("#panel3").hide("smooth").show("smooth");
    });
    $("#btn4").click(function () {
        $("#panel4").toggle("smooth");
    });
    $("#btn5").click(function () {
        $("#panel5").slideDown();
    });
    $("#btn6").click(function () {
        $("#panel6").slideUp();
    });
    $("#btn7").click(function () {
        $("#panel7").slideUp().slideDown();
    });
    $("#btn8").click(function () {
        $("#panel8").slideToggle();
    });
    $("#btn9").click(function () {
        $("#panel9").fadeIn();
    });
    $("#btn10").click(function () {
        $("#panel10").fadeOut();
    });
    $("#btn11").click(function () {
        $("#panel11").fadeOut().fadeIn();
    });
    $("#btn12").click(function () {
        $("#panel12").fadeToggle();
    });
    // $("#btn13").click(function () {
    //     $("#panel13").fadeTo("smooth", 0.5);
    // });
    let isFaded = true;
    $("#btn13").click(function () {
        if (isFaded) {
            $("#panel13").fadeTo("smooth", 0.5);
            isFaded = false;
        } else {
            $("#panel13").fadeTo("smooth", 1);
            isFaded = true;
        }
    });

    //Manipulation
    // $("#btn").click(function () {
    //     $("#paragraph").append("123");
    // });
    // $("#btn2").click(function () {
    //     $("#paragraph").prepend("123");
    // });
    // $("#btn").click(function () {
    //     $("#paragraph").after("123");
    // });
    // $("#btn2").click(function () {
    //     $("#paragraph").before("123");
    // });
    // $("#btn").click(function () {
    //     $("#container").remove();
    // });
    // $("#btn2").click(function () {
    //     $("#container").empty();
    // });

    //Animation
    // $("#btn").click(function () {
    //     $("#container").animate({
    //         left: "500px",
    //         width: "100px",
    //         height: "500px",
    //     });
    // });

    $.ajax({
        url: "api.json",
        method: "POST",
        success: function(response) {
            $("#name").value.push();
            console.log("Data :", response[1]);
        }
    })
});

// $(window).onload(function() {
//     $("#paragraph").dblclick(function () {
//         $("#paragraph").hide();
//     });
// })


// constants

// export const MOBIL_CONTENTS = [
//     {
//         id: 1,
//         nama: "Toyota",
//     }
//     {
//         id: 4,
//         nama: "Honda",
//     }
// ]

// ReactJS
// Axios(nge get data API)
// .get
// .post
// .put