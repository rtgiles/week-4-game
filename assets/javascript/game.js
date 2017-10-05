$(document).ready(function(){
// Computer generated random number for player to match
// between 19 & 120
var rndmTrgt = Math.floor(Math.random() * 101) + 19

// Gem random number generator
// between 1 & 12
var gemNum1 = Math.floor(Math.random() * 11) + 1
var gemNum2 = Math.floor(Math.random() * 11) + 1
var gemNum3 = Math.floor(Math.random() * 11) + 1
var gemNum4 = Math.floor(Math.random() * 11) + 1

// Variables for tally
var usrTtl=0;
var wins= 0;
var losses= 0;

// Add randomTarget to ranNum in html
$('#ranNum').text(rndmTrgt);

//resets game
$('#numWins').text(wins);
$('#numLosses').text(losses);
	
function reset() {
	rndmTrgt = Math.floor(Math.random() * 101) + 19;
	console.log(rndmTrgt);
	$('#ranNum').text(rndmTrgt);
	var gemNum1 = Math.floor(Math.random() * 11) + 1;
	var gemNum2 = Math.floor(Math.random() * 11) + 1;
	var gemNum3 = Math.floor(Math.random() * 11) + 1;
	var gemNum4 = Math.floor(Math.random() * 11) + 1;
	usrTtl= 0;
	$('#userTotal').text(usrTtl);
}
// Adds wins to html wins 
function yahoo(){
	alert("YOU WON !!!!");
	wins++;
	$('#numWins').text(wins);
	reset();
}
//Addes losses to html losses
function darn(){
	alert("YOU LOSE !!!!");
	losses++;
	$('#numLosses').text(losses);
	reset();
}
//Gem Clicks
$('#gem1').on('click', function(){
	usrTtl = usrTtl + gemNum1;
	console.log("new user total = " + usrTtl);
	$('#userTotal').text(usrTtl);
	//win loss statement
	if (usrTtl == rndmTrgt) {
		yahoo();
	}
	else if (usrTtl > rndmTrgt){
		darn();
	}
})

$('#gem2').on('click', function(){
	usrTtl = usrTtl + gemNum2;
	console.log("new user total = " + usrTtl);
	$('#userTotal').text(usrTtl);
	//win loss statement
	if (usrTtl == rndmTrgt) {
		yahoo();
	}
	else if (usrTtl > rndmTrgt){
		darn();
	}
})

$('#gem3').on('click', function(){
	usrTtl = usrTtl + gemNum3;
	console.log("new user total = " + usrTtl);
	$('#userTotal').text(usrTtl);
	//win loss statement
	if (usrTtl == rndmTrgt) {
		yahoo();
	}
	else if (usrTtl > rndmTrgt){
		darn();
	}
})

$('#gem4').on('click', function(){
	usrTtl = usrTtl + gemNum4;
	console.log("new user total = " + usrTtl);
	$('#userTotal').text(usrTtl);
	//win loss statement
	if (usrTtl == rndmTrgt) {
		yahoo();
	}
	else if (usrTtl > rndmTrgt){
		darn();
	}
})
})