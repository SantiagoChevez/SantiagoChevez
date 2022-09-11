var xyValues = [
    {"x": 0, "y": 0},
    {"x": 5, "y": 5},
    {"x": 8, "y": 7},
  ];
const hip=[
    {"j":0},
    {"j":7.071067812},
    {"j":3.605551575}
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
    for (let i=1; i <3; i++){
      console.log(xy[i]["y"]);
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
            pitagoras=a2-b2;
            console.log(pitagoras);
            xy[i]["y"]=Math.sqrt(pitagoras);
            console.log(xy[i]["y"]);
        }
    }
    variable.update();
}
 function RIGHT (xy){
  console.log("Adios mundo");;
  for (let i=1; i <3; i++){
    console.log(xy[i]["y"]);
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
          pitagoras=a2-b2;
          console.log(pitagoras);
          xy[i]["x"]=Math.sqrt(pitagoras);
          console.log(xy[i]["x"]);
      }
  }
  variable.update();
}
button.onclick=function() {LEFT(xyValues)};
button2.onclick=function() {RIGHT(xyValues)};