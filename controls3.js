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
    while (i<3){    
    if (i==1){
        if (xy[i]["x"]>0){
            xo=xy[i]["x"]
            yo=xy[i]["y"]
            angulo=Math.atan(Math.abs(xy[i]["y"]/xy[i]["x"]));
            angulo+=3.1416/36;
            xy[i]["x"]=hip[i]["j"]*Math.cos(angulo);
            xy[i]["y"]=hip[i]["j"]*Math.sin(angulo);
            console.log(xy[i]["x"]);
            console.log(xy[i]["y"]);
            if (xy[i]["x"]<0){
                xy[i]["x"]=0
                xy[i]["y"]=hip["i"]["j"]
            }
        }
        i++
    variable.update();
    }
   else{
    if (xy[i]["x"]>0){
        xy[i]["x"]=Math.floor(xy[i]["x"]-xo)
        console.log(xy[i]["x"])
        xy[i]["y"]=Math.floor(xy[i]["y"]-yo)
        angulo=Math.atan(Math.abs(xy[i]["y"]/xy[i]["x"]));
        angulo+=3.1416/36;
        xy[i]["x"]=hip[i]["j"]*Math.cos(angulo);   
        xy[i]["y"]=hip[i]["j"]*Math.sin(angulo);
        console.log(xy[i]["x"]);
        console.log(xy[i]["y"]);
        xy[i]["x"]+=xy[1]["x"];  
        xy[i]["y"]+=xy[1]["y"];
        if (xy[i]["x"]<0){
            xy[i]["x"]=0
            xy[i]["y"]=hip["i"]["j"]
        }
    }
    i++
}
 }
}


 function RIGHT (xy){
  console.log("Adios mundo");;
  i=1
  while (i<3){    
  if (i==1){
      if (xy[i]["y"]>0){
          xo=xy[i]["x"]
          yo=xy[i]["y"]
          angulo=Math.atan(Math.abs(xy[i]["y"]/xy[i]["x"]));
          angulo-=3.1416/36;
          xy[i]["x"]=hip[i]["j"]*Math.cos(angulo);
          xy[i]["y"]=hip[i]["j"]*Math.sin(angulo);
          console.log(xy[i]["x"]);
          console.log(xy[i]["y"]);
          if (xy[i]["y"]<0){
              xy[i]["y"]=0
              xy[i]["x"]=hip["i"]["j"]
          }
      }
      i++
  variable.update();
  }
 else{
  if (xy[i]["y"]>0){
      xy[i]["x"]=Math.floor(xy[i]["x"]-xo);
      console.log(xy[i]["x"]);
      xy[i]["y"]=Math.floor(xy[i]["y"]-yo);
      angulo=Math.atan(Math.abs(xy[i]["y"]/xy[i]["x"]));
      angulo-=3.1416/36;
      xy[i]["x"]=hip[i]["j"]*Math.cos(angulo);   
      xy[i]["y"]=hip[i]["j"]*Math.sin(angulo);
      console.log(xy[i]["x"]);
      console.log(xy[i]["y"]);
      xy[i]["x"]+=xy[1]["x"];  
      xy[i]["y"]+=xy[1]["y"];
      if (xy[i]["y"]<0){
          xy[i]["y"]=0
          xy[i]["x"]=hip["i"]["j"]
      }
  }
  i++
}
}
}
button.onclick=function() {LEFT(xyValues)};
button2.onclick=function() {RIGHT(xyValues)};