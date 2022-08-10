var canvas=new fabric.Canvas('my_Canvas');
block_img_width=30;
block_img_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_img_object="";

function player_update(){
  fabric.Image.fromURL("player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_x,
        left:player_x
    });
    canvas.add(player_object);
  });
}

function newImage(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_x,
            left:player_y
        });
        canvas.add(block_img_object);
    });
}

function myKey_down(e){
  keypressed=e.keyCode;
  console.log(keypressed);
  if(e.shiftKey == true && keypressed == '80'){
    console.log("p and shiftKey pressed together");
    block_img_width=block_img_width + 10;
    block_img_height=block_img_height + 10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
  }
  if(e.shiftKey == true && keypressed == '77'){
    console.log("m and shiftKey pressed together");
    block_img_width=block_img_width - 10;
    block_img_height=block_img_height - 10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
  }
  if(keypressed == '38'){
    up();
    console.log("up");
  }
  if(keypressed == '40'){
    down();
    console.log("down");
  }
  if(keypressed == '37'){
    left();
    console.log("left");
  }
  if(keypressed == '39'){
    right();
    console.log("right");
  }
  if(keypressed == '87'){
    newImage('wall.jpg');
    console.log("W pressed");
  }
  if(keypressed == '71'){
    newImage('ground.png');
    console.log("G pressed");
  }
  if(keypressed == '76'){
    newImage('light_green.png');
    console.log("L pressed");
  }
  if(keypressed == '84'){
    newImage('trunk.jpg');
    console.log("T pressed");
  }
  if(keypressed == '82'){
    newImage('roof.jpg');
    console.log("R pressed");
  }
  if(keypressed == '89'){
    newImage('yellow_wall.png');
    console.log("Y Pressed");
  }
  if(keypressed == '68'){
    newImage('dark_green.png');
    console.log("D pressed");
  }
  if(keypressed == '85'){
    newImage('unique.png');
    console.log("U pressed");
  }
  if(keypressed == '67'){
    newImage('cloud.png');
    console.log("C pressed");
  }
}
window.addEventListener("keydown",myKey_down);