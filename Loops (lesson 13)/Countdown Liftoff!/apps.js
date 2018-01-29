/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var time = 60;
var sec = ' seconds';

while(time >= 0){
	if(time === 50){
	console.log("Orbiter transfers from ground to internal power");
	}
	else if(time === 31){
	console.log("Ground launch sequencer is go for auto sequence start");
	}
	else if(time === 16){
	console.log("Activate launch pad sound suppression system");
	}
	else if(time === 10){
	console.log( "Activate main engine hydrogen burnoff system");
	}
	else if(time === 6){
	console.log("Main engine start");
	}
	else if(time === 0){
	console.log('Solid rocket booster ignition and liftoff!');
	}

	else{console.log('T-' + time + sec);}
	
	time--;
}