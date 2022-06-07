// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return someValue > 42 ?  someValue - 42 : 42 - someValue;
}
const distanceFromHqInFeet = (someValue) =>  distanceFromHqInBlocks(someValue) * 264;
const distanceTravelledInFeet = (start, destination) => destination > start? (destination- start) * 264 : 
(start - destination) * 264;
const calculatesFarePrice = (start, destination) => {
    let charges;
    if(distanceTravelledInFeet(start, destination) < 400){
        charges = 0;
    } 
    else if( distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000){
        charges = (distanceTravelledInFeet(start, destination) - 400 ) * 0.02;
    }
    else if(distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
        charges = 25;
    }
    else{
        charges = 'cannot travel that far';
    }
    return charges;
}
