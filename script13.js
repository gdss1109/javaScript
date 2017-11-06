//insted of jQuery we can write $
//insted of writing all this $(document).ready 
//we can just use $ its a shotcut..

$(function(){
	//start up code gors here
	//alert("this works!");

//$("#title").text("Yay,I can get at the h1 immediately");


//$("#second").html("<h2>Great Quotes</h2>");
//append and prepend works inside the given selection

//There are other like before
//after, insertbefore,which works outside the given selection

$("#first").prepend("<h2>Great Gagan</h2>");
$("#first").append("<h2>...Im Hot man</h2>");


//$("#myAnchor").attr("href","http://gagandeep.com");

$("#title").addClass("standout");

});
/*
//when ever we do this an object is returned of type jQuary
$('.importantText')
$('#myFirstParagraph')
$('p')
$('p').fadeOut();

jQuery('<div id="badge"><img src="badge.gif" alt="Badge earned for achievement"</div>')
$.myCustomMethod = function() {alert('hi');};
$.listBox ={
	show:function() {},
	hide:function() {},
	position: function() {},
	initiate: function() {}
};*/