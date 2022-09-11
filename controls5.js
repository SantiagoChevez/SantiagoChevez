var xyValues = [
    {"x": 0, "y": 0},
    {"x": 5, "y": 5},
    {"x": 9, "y": 8},
    {"x": 12,"y": 10}

  ];
const hip=[
    {"j":0},
    {"j":7.071067812},
    {"j":5},
    {"j":3.605551275}
]  
const button = document.getElementById("up");
const button2= document.getElementById("down");
const button3 = document.getElementById("up2");
const button4= document.getElementById("down2");
const button5 = document.getElementById("up3");
const button6= document.getElementById("down3");

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
        if (xy[1]["x"]>0){
            difx=xy[2]["x"]-xy[1]["x"]
            difx2=xy[3]["x"]-xy[1]["x"]
            console.log("dif x")
            console.log(difx)
            dify=xy[2]["y"]-xy[1]["y"]
            dify2=xy[3]["y"]-xy[1]["y"]
            console.log(dify)
            angulo=Math.atan(Math.abs(xy[1]["y"]/xy[1]["x"]));
            angulo+=3.1416/36;
            xy[1]["x"]=hip[1]["j"]*Math.cos(angulo);
            xy[1]["y"]=hip[1]["j"]*Math.sin(angulo);
            console.log(xy[1]["x"]);
            console.log(xy[1]["y"]);
            if (xy[1]["x"]<0){
                xy[1]["x"]=0
                xy[1]["y"]=hip["1"]["j"]
            }
            xy[2]["x"]=xy[1]["x"]+difx
            xy[3]["x"]=xy[1]["x"]+difx2
            xy[2]["y"]=xy[1]["y"]+dify
            xy[3]["y"]=xy[1]["y"]+dify2
        }
    variable.update();
    }

 function RIGHT (xy){
  console.log("Adios mundo");;
      if (xy[1]["y"]>0){
        difx=xy[2]["x"]-xy[1]["x"]
        difx2=xy[3]["x"]-xy[1]["x"]
        console.log(difx)
        dify=xy[2]["y"]-xy[1]["y"]
        dify2=xy[3]["y"]-xy[1]["y"]
        console.log(dify)
          angulo=Math.atan(Math.abs(xy[1]["y"]/xy[1]["x"]));
          angulo-=3.1416/36;
          xy[1]["x"]=hip[1]["j"]*Math.cos(angulo);
          xy[1]["y"]=hip[1]["j"]*Math.sin(angulo);
          console.log(xy[1]["x"]);
          console.log(xy[1]["y"]);
          if (xy[1]["y"]<0){
              xy[1]["y"]=0
              xy[1]["x"]=hip["1"]["j"]
          }
          xy[2]["x"]=xy[1]["x"]+difx
          xy[3]["x"]=xy[1]["x"]+difx2
          xy[2]["y"]=xy[1]["y"]+dify
          xy[3]["y"]=xy[1]["y"]+dify2
      }
  variable.update();
  }

  function Left2 (xy){
    if (xy[2]["x"]>0){
        difx2=xy[3]["x"]-xy[2]["x"]
        console.log("dif x")
            console.log(difx2)
        dify2=xy[3]["y"]-xy[2]["y"]
        y2=xy[2]["y"]-xy[1]["y"]
        x2=xy[2]["x"]-xy[1]["x"]
        angulo=Math.atan(Math.abs(y2/x2));
          angulo+=3.1416/36;
        xy[2]["x"]=(hip[2]["j"]*Math.cos(angulo));
          xy[2]["y"]=(hip[2]["j"]*Math.sin(angulo));
          console.log(xy[2]["x"]);
          console.log(xy[2]["y"]);
          if (xy[2]["x"]<0){
              xy[2]["x"]=xy[1]["x"]
              xy[2]["y"]=hip[2]["j"]+xy[1]["y"]
          }
          else{
            xy[2]["y"]+=xy[1]["y"];
            xy[2]["x"]+=xy[1]["x"];
          }
          xy[3]["x"]=xy[2]["x"]+difx2
          console.log("x3=x2+dif")
            console.log(xy[3]["x"])
          xy[3]["y"]=xy[2]["y"]+dify2
          variable.update();
    }
  }
  function Right2 (xy){
    if (xy[2]["y"]>0){
        difx2=xy[3]["x"]-xy[2]["x"]
        dify2=xy[3]["y"]-xy[2]["y"]
        y2=xy[2]["y"]-xy[1]["y"]
        x2=xy[2]["x"]-xy[1]["x"]
        angulo=Math.atan(Math.abs(y2/x2));
          angulo-=3.1416/36;
        xy[2]["x"]=(hip[2]["j"]*Math.cos(angulo));
          xy[2]["y"]=(hip[2]["j"]*Math.sin(angulo));
          console.log(xy[2]["x"]);
          console.log(xy[2]["y"]);
          if (xy[2]["y"]<0){
              xy[2]["y"]=xy[1]["y"];
              xy[2]["x"]=hip[2]["j"]+xy[1]["x"];
          }
          else{
            xy[2]["y"]+=xy[1]["y"];
            xy[2]["x"]+=xy[1]["x"];
          }
          xy[3]["x"]=xy[2]["x"]+difx2
          xy[3]["y"]=xy[2]["y"]+dify2
          variable.update();
    }
  }
  function Left3 (xy){
    if (xy[3]["x"]>0){
        y2=xy[3]["y"]-xy[2]["y"]
        x2=xy[3]["x"]-xy[2]["x"]
        angulo=Math.atan(Math.abs(y2/x2));
          angulo+=3.1416/36;
        xy[3]["x"]=(hip[3]["j"]*Math.cos(angulo));
          xy[3]["y"]=(hip[3]["j"]*Math.sin(angulo));
          console.log(xy[3]["x"]);
          console.log(xy[3]["y"]);
          if (xy[3]["x"]<0){
              xy[3]["x"]=xy[2]["x"]
              xy[3]["y"]=hip[3]["j"]+xy[2]["y"]
          }
          else{
            xy[3]["y"]+=xy[2]["y"];
            xy[3]["x"]+=xy[2]["x"];
          }
          variable.update();
    }
  }
  function Right3 (xy){
    if (xy[3]["y"]>0){
        y2=xy[3]["y"]-xy[2]["y"]
        x2=xy[3]["x"]-xy[2]["x"]
        angulo=Math.atan(Math.abs(y2/x2));
          angulo-=3.1416/36;
        xy[3]["x"]=(hip[3]["j"]*Math.cos(angulo));
          xy[3]["y"]=(hip[3]["j"]*Math.sin(angulo));
          console.log(xy[3]["x"]);
          console.log(xy[3]["y"]);
          if (xy[3]["y"]<0){
              xy[3]["y"]=xy[2]["y"];
              xy[3]["x"]=hip[3]["j"]+xy[2]["x"];
          }
          else{
            xy[3]["y"]+=xy[2]["y"];
            xy[3]["x"]+=xy[2]["x"];
          }
          variable.update();
    }
  }
button.onclick=function() {LEFT(xyValues)};
button2.onclick=function() {RIGHT(xyValues)};
button3.onclick=function() {Left2(xyValues)};
button4.onclick=function() {Right2(xyValues)};
button5.onclick=function() {Left3(xyValues)};
button6.onclick=function() {Right3(xyValues)};