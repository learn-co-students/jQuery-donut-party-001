$(function(){
  var donutCounter = new DonutCounter();
});

// your code here

// $("#donuts button").click(function(){
//   $("#donuts h3 span").text += 1
// })

var DonutCounter = function(){
  //add the references to selected elements
  this.$guestDonut = $("#guests .guest-count")
  this.$totalDonut = $("#donuts .donut-count")
  //then add a object to store event listeners
  this.listeners()
}

DonutCounter.prototype.listeners = function(){
  this.addCount()
  this.subCount()
  this.calcCount()
}

DonutCounter.prototype.addCount = function(){
  $("#guests .add, #donuts .add").click(function(){
    var count = $(this).parent().find("h3 span")
    count.text(parseInt(count.text()) + 1)
  })
}

DonutCounter.prototype.subCount = function(){
  $("#guests .remove, #donuts .remove").click(function(){
    var count = $(this).
  })
}
