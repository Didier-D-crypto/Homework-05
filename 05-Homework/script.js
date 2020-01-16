$(document).ready(function () {

  var time=moment().format('MMMM Do YYYY, h:mm:ss a');
  $(".saveBtn").on("click", function () {
    console.log(this);
    var value = $(this).siblings("description").val();
    var time = $(this).siblings(".hour").text();


    localStorage.setItem(value, time);

   var any = moment().format('MMMM Do YYYY, h:mm:ss a');
    var any2 = moment().format('h');
    console.log(any)
    
            
  }); 

});



var clock = document.getElementById("ClockDisplay");
clock.appendChild();


