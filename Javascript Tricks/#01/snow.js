window.onload = function() {
  document.write("manuel");
  //get the canvas and context and store in vars
  var canvas = document.getElementById("sky");
  var ctx = canvas.getContext("2d");

  //set canvas ds to window height and width

  var W = window.innerWith;
  var H = window.innerWidth;
  canvas.width = W;
  canvas.height = H;
  //generate the snowflakes and apple attributes
  var mf = 100; //max flakes
  var flakes = [];

  //loof through the empty flakes
  for(var i = 0 ; i < mf; i++ ){
      flakes.push({
        x:Math.random()*W,
        y:Math.random()*H,
        r:Math.random()*5+2, //min of 2px and mas of 7px
        d:Math.random() + 1 //density of the flake
      })
  }
//draw flakes onto canvas
function drawFlakes()
  {
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = "white";
    ctx.beginPath();
  for(var i = 0; i < mf; i++)
      {
          var f = flakes[i];
          ctx.moveTo(f.x, f.y);
          ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
      }
      ctx.fill();
      moveflakes();
  }
}
