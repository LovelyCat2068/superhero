var canvas = new fabric.Canvas('canvas');

player_x = 30;
player_y = 30;

block_width = 30;
block_height = 30;

var player_object = "";
var block_object = "";

function update_img(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top: player_y, left: player_x});
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({top: player_y, left: player_x});
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", keyisdown);
function keyisdown(e){
    var keypressed = e.keyCode;
    console.log("keydown");
    if(e.shiftKey == true && keypressed == '71'){
        console.log("shift+g = greater value")
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if(e.shiftKey == true && keypressed == '83'){
        console.log("shift+s = smaller value")
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if(keypressed == '70'){
        new_image('harry_potter_face.jpg');
        console.log("face");
    }
    if(keypressed == '66'){
        new_image('albus_dumbledore_body.jpg');
        console.log("body");
    }
    if(keypressed == '76'){
        new_image('ron_weasley_legs.jpg');
        console.log("legs");
    }
    if(keypressed == '82' && keypressed == '72'){
        new_image('hermione_granger_right_hand.jpg');
        console.log("right hand");
    }
    if(keypressed == '76' && keypressed == '72'){
        new_image('hermione_granger_left_hand.jpg');
        console.log("left hand");
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
}