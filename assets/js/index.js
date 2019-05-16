//Check off specific to-dos by clicking:

// $("li").on("click", function(){
// 	//if it is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		//turn back to black
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	} else {
// 		//turn it gray
// 		$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	});}
// });

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var toDoText = $(this).val();
		//acts as a setter
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</ul>");
	}
});

$("#toggle-form").on("click", function(){
	$("input[type='text']").fadeToggle();
});