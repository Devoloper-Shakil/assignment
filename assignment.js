// kiloMeterToMeter function
function kilometerToMeter(kilometer){
    var meter= kilometer*1000;
    return meter;
}
 kilometerToMeter(6);

 // budgetCalculator function

 function budgetCalculator(clock,phone,laptop){
     var clocks = clock*50;
     var phones = phone *100;
     var laptops =laptop *500;
     var trotal =clocks+phones+laptops;
     return trotal;
 }
 budgetCalculator(2,3,2);

 // hotelCost function
 function hotelCost (hotelday){
     var cost = 0;
     if(hotelday<=10){
         cost=hotelday*100;
     }
     else if (hotelday<=20){
         var fastPart=10*100;
         var remaining =hotelday-10;
         var secendPart=hotelday*80;
         cost =fastPart+secendPart;
     }
     else {
        var fastPart=10*100;
        var secendPart = 10*80;
        var remaining =hotelday-20;
        var tradePart=hotelday*100;
        cost =fastPart+secendPart+tradePart;

     }
     return cost;
    }
hotelCost(25);

//megaFriend function
function megaFriend(friend) {
    let word = "";
    for (let i = 0; i < friend.length; i++) {
      if (word.length < friend[i].length) {
        word = friend[i];
      }
    }
    return word;
  }
 megaFriend(["shakil","sakil","himu","bangladesh"]);
