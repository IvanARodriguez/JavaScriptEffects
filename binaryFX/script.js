let CanvasFX = document.getElementById("CanvasFX");
let canvasTx = CanvasFX.getContext("2d");
CanvasFX.height = window.innerHeight;
CanvasFX.width = window.innerWidth;
 let binary = "0123456789";
 binary = binary.split("");
 let font_size = 20;
 let columns = CanvasFX.width/font_size;
 let drops = [];
 for(var x = 0; x < columns; x++)
 drops[x] = 1;
 function draw()
 {
     canvasTx.fillStyle = "rgba(0,20,0,0.05)";
     canvasTx.fillRect(0,0, CanvasFX.width, CanvasFX.height);
     canvasTx.fillStyle = "green";
     canvasTx.font = font_size + "px arial";
     for(var i=0; i< drops.length; i++)
     {
         let text = binary[Math.floor(Math.random()*binary.length)];
         canvasTx.fillText(text, i*font_size, drops[i]*font_size);
         if(drops[i]*font_size > CanvasFX.height && Math.random() > 0.975)
         drops[i]=0;
         drops[i]++;
     }
 }
 setInterval(draw, 120);
