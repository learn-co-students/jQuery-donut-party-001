$(function(){ 
  var donutCounter = new DonutCounter();
});

// your code here

function DonutCounter (){
  this.$donutCount = $("#donuts h3")
  this.$guestCount = $("#guests h3")
  this.addNumber()
  this.decreaseNumber()
  this.check();
}

DonutCounter.prototype.addNumber = function(){
  $("#donuts button.add, #guests button.add").click(function(){
    var $field = $(this).parent().find("h3 span")
    $field.text(Number($field.text()) + 1);
  })
}

DonutCounter.prototype.decreaseNumber = function(){
  $("#donuts button.remove, #guests button.remove").click(function(){
    var $field = $(this).parent().find("h3 span")
    if (Number($field.text()) > 0) {
        $field.text(Number($field.text()) - 1);
      }
  })
}


DonutCounter.prototype.check = function (){
  $("#check button").click(function(){
    var guestCount = Number($("#guests h3 .guest-count").text())
    var donutCount = Number($("#donuts h3 .donut-count").text())
    if (guestCount == 0){
      $("#status").text("Invite someone you jerk!")
    }
    else if (donutCount >= 5){
      $("#status").text("ARE YOU TRYING TO KILL US ALL!?")
    }
    else if (guestCount > donutCount){
      $("#status").text("Guests are sad :(")
    }
    else
      {
        $("#status").text("Guests are having a blast!")
      }
  })
}