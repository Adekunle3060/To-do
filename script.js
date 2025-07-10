

// $("li").click(function () {
//     $(this).css("color","red" )
//     $(this).css("text-decoration", "line-through");
// });


$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
});


$("ul").on("click", "span",function () {
    $(this).parent().fadeOut(5000, function() {
        $(this).remove()
    });
});

$("input").keypress(function(event) {
    if (event.which === 13) {
        let todoText = $(this).val();
        $(this).val("")
        
    $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>" + todoText + "</li");
}
});


//     if ($(this).css("color")==="rgb(128, 128, 128)") {
//         $(this).css("color", "black")
//         $(this).css("text-decoration", "none")

//     }else {
//     $(this).css("color", "grey")
//     $(this).css("text-decoration", "line-through")

//     }
// });
// // $("li").click (function () {
// //  $(this).css({
// //     color: "grey",
// //     textDecoration: "line-through"
    
// //  });
// });

// if (this.color === "grey") {

// console.log($(this).css("color"));

