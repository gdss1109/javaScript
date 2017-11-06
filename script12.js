var batwing = {
	status: "Ready",
	rescueBatman: function() {
		document.write("Locating his transponder .... Initiating launch!!!");
	}
}
/*
if (batwing.status === "Ready") {
	batwing.rescueBatman();
}
*/

var utilities = {
	printAllMembers: function(targetObject) {
		for(i in targetObject) {
			document.write("<br />" + targetObject[i]);
		}
	}
}

//utilities.printAllMembers(batwing);

//var i_am_empty = {};
//utilities.printAllMembers(i_am_empty);


var planet = {
	id: 34,
	name: "Imtempesta Box",
	faction: {
		factionId:2,
		name: "Nex",
		notification: function(){
			document.write("nex allience..... Unite!");
		}
	},
	cities: [
{locationId:15,name:"Gladius"},
{locationId:16,name:"Chalybs"},
{locationId:17,name:"Ensis"},
	]

}

function car(make,model,year){
	this.make = make;
	this.model = model;
	this.ear = year;
}

var myCar = new car("BMW","M3",2017);
var myOtherCar = new car("jeep","open","2016");

alert(myCar.model);
alert(myCar.make);
alert(myOtherCar.make);


/*
utilities.printAllMembers(planet);

for (member in planet)
{
	document.write("<br\>" +member + "==>"+planet[member]);
}
*/

/*
if(typeof planet.defence ==="undefined"){
	planet.defence = "Ion Canon";
}

document.write(planet.defence);
*/

/*
var z = planet;
document.write(z.name);

document.write("<br/>"+planet.name);
planet.name="Hitman";
document.write("<br/>"+planet.name);
*/

//document.write(planet.cities[2].locationId);
//planet.faction.notification();
//utilities.printAllMembers(planet);