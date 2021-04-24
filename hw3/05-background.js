var timer;
var ut = document.getElementById("interval").value;
timer = setInterval(function() { 
  change_bg_color();
}, ut*1000); 

function btnClick(){
  var btn = document.getElementById("changeBtn");
  // var timer;

  var disabled = document.getElementById("interval").disabled;
  console.log(btn.value);
  console.log(btn.className);

  if(btn.value === "Stop"){
    btn.value = "Start";
    btn.className = "btn btn-primary";
    document.getElementById("interval").disabled = false;
    clearInterval(timer); 
  }

  else if(btn.value === "Start"){
    var user_time = document.getElementById("interval").value;
    // console.log("time = "+user_time);
    btn.value = "Stop";
    btn.className = "btn btn-danger";
    document.getElementById("interval").disabled = true;
    // if(timer)
    //   clearInterval(timer);
    timer = setInterval(function() { 
      change_bg_color();
    }, user_time*1000); 
  }
  
  return false;
}

function change_bg_color(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log(bgColor);
  document.body.style.background = bgColor;
}
