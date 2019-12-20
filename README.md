# Homework-05
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Work Day Scheduler</title>
  </head>   
  <body>
    <div">
    
    <var input= document.getElementById().value;
         localStorage.setItem()
       
    ></var>
     <header class="jumbotron">
      <h1 class="display-3">Work Day Scheduler</h1>
      <h1 id="ClockDisplay"></h1>
      <p class="lead">A simple calendar app for scheduling your work day</p>
      <p id="currentDay" class="lead">
    </header></div>
    <div class="container">
      <!-- Timeblocks go here --> 
      <script type="text/javascript">
        function showTime(){
        var date = new Date();
        var h= date.getHours();
        var m= date.getMinutes();
        var s= date.getSeconds();
        var session= "AM";
  
           if (h==0){
               h = 12;  
}
          if (h < 10){
              h = h-12;
         session = "PM";
}
h=(h < 10)  ? "0"+ h: h;
m= (m < 10) ? "0"+ m: m;
s= (s < 10) ? "0"+ s: s;
//var time= h + ";" + m + ";"+ s + "" + session; 
var time=moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("ClockDisplay").innerText = time;
document.getElementById("ClockDisplay").text = time;
setTimout(showTime, 1000);
}

</script>
    <div id="hour-9" class="row time-block">
    <div class="col-md-1 hour">9AM</div> 
    <textarea class="col-md-10 description"></textarea>
    <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
  
    </div>
    <div id="hour-10" class="row time-block">
      <div class="col-md-1 hour">10AM</div> 
      <textarea class="col-md-10 description"></textarea>
      <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
     
    </div>
    <div id="hour-11" class="row time-block">
      <div class="col-md-1 hour">11AM</div> 
      <textarea class="col-md-10 description"></textarea>
      <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
     
    </div>
    <div id="hour-12" class="row time-block">
      <div class="col-md-1 hour">12PM</div> 
      <textarea class="col-md-10 description"></textarea>
      <button class="btn saveBtn col-md-1"> <i class="fas fa-save"></i></button>
     
     </div>
      <div id="hour-1" class="row time-block">
        <div class="col-md-1 hour">1PM</div> 
        <textarea class="col-md-10 description"></textarea>
        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
        
      </div>
      <div id="hour-2" class="row time-block">
        <div class="col-md-1 hour">2PM</div> 
        <textarea class="col-md-10 description"></textarea>
        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
       
      </div>
      <div id="hour-3" class="row time-block">
        <div class="col-md-1 hour">3PM</div> 
        <textarea class="col-md-10 description"></textarea>
        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
       
      </div>
      <div id="hour-4" class="row time-block">
        <div class="col-md-1 hour">4PM</div> 
        <textarea class="col-md-10 description"></textarea>
        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
        
      </div>
      <div id="hour-5" class="row time-block">
        <div class="col-md-1 hour">5PM</div> 
        <textarea class="col-md-10 description"></textarea>
        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>

      </div>
      <div id="hour-6" class="row time-block">
        <div class="col-md-1 hour">6PM</div> 
        <textarea class="col-md-10 description"></textarea></div>
        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>

      
       
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script rel="text/javascript" src="script.js"></script>
  </body>
</html>
  
  //js. below//
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
 //js. end//
 
 //css//
 
 body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1;
}

textarea{
  background: transparent;
  border: none;
  resize: none;
  color: #000000;
  border-left: 1px solid black;
  padding: 10px;
}

.jumbotron {
  text-align: center;
  background-color: transparent;
  color: black;
  border-radius: 0;
  border-bottom: 10px solid black;
}

.description{
  white-space: pre-wrap;
}

.time-block{
  text-align: center;
  border-radius: 15px;
}
.row {
  white-space: pre-wrap;
  height: 80px;
  border-top: 1px solid white;;
}

.hour {
  background-color: #ffffff;
  color: #000000;
  border-top: 1px dashed #000000;
}

.past {
  background-color: #d3d3d3;
  color: white;
}

.present {
  background-color: #ff6961;
  color: white;
}

.future {
  background-color: #77dd77;
  color: white;
}

.saveBtn {
  border-left: 1px solid black;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #06AED5;
  color: white;
}

.saveBtn i:hover {
  font-size: 20px;
  transition: all .3s ease-in-out;
}




//css end//


