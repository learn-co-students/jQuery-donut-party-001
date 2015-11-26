$(function(){ 
  var donutCounter = new DonutCounter();
});


function DonutCounter() {

// create variables for guest count and donut count.
  var guestCount = 0, donutCount = 0;

  // add event listeners for clicking buttons to add and remove guests.
  
    // increment guest count when clicked.
    $('#guests button:eq(0)').click(function(){
      guestCount += 1;
      $('#guests span').text(guestCount);
    });
    
    // update the text of the guest number when clicked.
    $('#guests button:eq(1)').click(function(){
      if (guestCount > 0) {
        guestCount -= 1;
        $('#guests span').text(guestCount);
      }
    });

  // add event listeners for clicking buttons to add and remove donuts.
    $('#donuts button:eq(0)').click(function(){
      donutCount += 1;
      $('#donuts span').text(donutCount);
    });

    // increment donut count when clicked.
    $('#donuts button:eq(1)').click(function(){
      if (donutCount > 0) {
        donutCount -= 1;
        $('#donuts span').text(donutCount);
      }
    });
    
    // update the text of the donut number when clicked.
    

  // add event listner for clicks on the check button.
    $('#check button').click(function(){
      if (guestCount > donutCount) {
        $('#status').text("Guests are sad :(");
      } else if (guestCount == 0 && donutCount == 0) {
        $('#status').text("Invite someone you jerk!");
      } else if (guestCount == 0) {
        $('#status').text("Invite someone you jerk!");
      } else if (guestCount == donutCount) {
        $('#status').text("Guests are having a blast!");
      } else {
        $('#status').text("ARE YOU TRYING TO KILL US ALL!?");
      }
    });
    // when clicked update the text to display of guests are hungry when there are not enough donuts per guest and happy when there are enough donuts.

}
// your code here