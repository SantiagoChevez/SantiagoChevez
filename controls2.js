var xyValues = [
    {"x": 0, "y": 0},
    {"x": 5, "y": 5},
    {"x": 9, "y": 8},
  ];
const hip=[
    {"j":0},
    {"j":7.071067812},
    {"j":5}
]  
const button = document.getElementById("up");
const button2= document.getElementById("down");

let variable=new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues,
        showLine:true,
        fill:false
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 0, max:20}}],
        yAxes: [{ticks: {min: 0, max:16}}],
      }
    }
  });
 function LEFT (xy){
    console.log("Hola mundo");
    i=1
    while (i<3) {
      console.log(xy[i]["y"]);
      if (i==1){
        if (xy[i]["x"]>0){
            xy[i]["x"]-=1;
            console.log(xy[i]["x"]);
            hipotenusa=hip[i]["j"];
            console.log(hipotenusa)
            a2=Math.pow(parseInt(hipotenusa),2);
            console.log(a2);
            cateto=xy[i]["x"];
            console.log(cateto)
            b2=Math.pow(parseInt(cateto),2);
            console.log(b2);
            pitagoras=Math.abs(a2-b2);
            console.log(pitagoras);
            xy[i]["y"]=Math.round(Math.sqrt(pitagoras));
            console.log(xy[i]["y"]);
            i++
            console.log(i);
        }
     }
     else{
        if (xy[i]["x"]>0){
            console.log("segunda parte");
            xy[i]["x"]-=xy[1]["x"]+1;
            console.log(xy[i]["x"]);
            hipotenusa=hip[i]["j"];
            console.log(hipotenusa)
            a2=Math.pow(parseInt(hipotenusa),2);
            console.log(a2);
            cateto=xy[i]["x"];
            console.log(cateto)
            b2=Math.pow(parseInt(cateto),2);
            console.log(b2);
            pitagoras=math.abs(a2-b2);
            console.log(pitagoras);
            xy[i]["y"]=Math.round(Math.sqrt(pitagoras)+xy[1]["x"]+1);
            xy[i]["x"]+=xy[1]["x"];
            console.log(xy[i]["y"]);  
            i++
     }
     }
    }
    variable.update();
}
 function RIGHT (xy){
  console.log("Adios mundo");;
  i=1
  while (i<3) {
    console.log(xy[i]["x"]);
    if (i==1){
      if (xy[i]["y"]>0){
          xy[i]["y"]-=1;
          console.log(xy[i]["y"]);
          hipotenusa=hip[i]["j"];
          console.log(hipotenusa)
          a2=Math.pow(parseInt(hipotenusa),2);
          console.log(a2);
          cateto=xy[i]["y"];
          console.log(cateto)
          b2=Math.pow(parseInt(cateto),2);
          console.log(b2);
          pitagoras=Math.abs(a2-b2);
          console.log(pitagoras);
          xy[i]["x"]=Math.round(Math.sqrt(pitagoras));
          console.log(xy[i]["x"]);
          i++
          console.log(i);
      }
   }
   else{
      if (xy[i]["y"]>0){
          console.log("segunda parte");
          xy[i]["x"]-=xy[1]["y"]+1;
          console.log(xy[i]["y"]);
          hipotenusa=hip[i]["j"];
          console.log(hipotenusa)
          a2=Math.pow(parseInt(hipotenusa),2);
          console.log(a2);
          cateto=xy[i]["y"];
          console.log(cateto)
          b2=Math.pow(parseInt(cateto),2);
          console.log(b2);
          pitagoras=Math.abs(a2-b2);
          console.log(pitagoras);
          xy[i]["y"]=Math.round(Math.sqrt(pitagoras)+xy[1]["x"]+1);
          xy[i]["x"]+=xy[1]["y"];
          console.log(xy[i]["y"]);  
          i++
   }
   }
  }
  variable.update();
}
button.onclick=function() {LEFT(xyValues)};
button2.onclick=function() {RIGHT(xyValues)};