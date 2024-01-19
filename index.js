
var a=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
    var b=[1, 2, 3, 4, 5, 6, 7]
    const humidityData = [30, 25, 20, 22, 18, 15, 28,60,];
  var img="w"  

  var discription=["chilly and often frosty, requiring warm clothing and feeling brisk and invigorating.","mild and comfortable, creating pleasant conditions for outdoor activities."," warm and balmy, providing a pleasant and comfortable environment for various outdoor and indoor activities.","hot and sweltering, often indicative of scorching summer weather with the need for shade and hydration.","extremely hot and potentially dangerous,posing severe heat-related risks and requiring extreme caution.","scorching and life-threatening, demanding urgent measures to avoid heatstroke and burns."," dangerously high, posing an extreme risk to human health and safety.",]
    

var btn = document.querySelector(".btnnn");
var deg = document.querySelector(".deg");
var loc = document.querySelector(".location");
var textbox = document.querySelector(".textbox");
var img=document.querySelector(".imgw");
var humidity=document.querySelector(".humnum")
var windspeed=document.querySelector(".wsp")
var dis=document.querySelector(".dis")
function btnclick() {
  if(textbox.value===""){
    
}else{
  var c = Math.floor(Math.random() * a.length);
  deg.innerHTML = c + "&deg;C";
  
  var d = Math.floor(Math.random() * b.length);
  var imgchange=("w"+d+".png")
  if(d===0){
    var imgchange=("w"+6+".png")
  }
  img.src = imgchange

  var hum = Math.floor(Math.random() *a.length);
  humidity.innerHTML = hum + "%";
  loc.innerHTML = textbox.value;

  var wind=Math.floor(Math.random() *a.length);
  var speed=Math.floor(Math.random() *a.length);

 windspeed.innerHTML = (wind+"."+speed+"km/h");

 for(var i=0;i<=discription.length;i++){
  if(c===0||c===1||c===2||c==3||c===4||c===5||c===6||c===7||c===8||c===9||c===10){
    dis.innerHTML = discription[0];
  }
  else if(c===11||c===12||c===13||c==14||c===15||c===16||c===17||c===18||c===19||c===20){
    dis.innerHTML = discription[1];
  }
  else if(c===21||c===22||c===23||c===24||c===26||c===27||c===28||c===29||c===25||c===30){
    dis.innerHTML = discription[2];
  }
  else if(c===31||c===32||c===33||c==34||c===35||c===36||c===37||c===38||c===39||c===40){
    dis.innerHTML = discription[3];
  }
  else if(c===41||c===42||c===43||c==44||c===45||c===46||c===47||c===48||c===49||c===50){
    dis.innerHTML = discription[4];
  }
  else if(c===51||c===52||c===53||c==54||c===55||c===56||c===57||c===58||c===59||c===60){
    dis.innerHTML = discription[5];
  }
  else if(c===61||c===62||c===63||c==64||c===65||c===66||c===67||c===68||c===69||c===70){
    dis.innerHTML = discription[6];
  }
  else{
    dis.innerHTML = discription[6];
  }
 }
}

textbox.value = "";  
  
}

btn.addEventListener("click", btnclick);
