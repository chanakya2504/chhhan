var ball,database,a, b,c;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database()
     a = database.ref('ball/position')
  b = a.on("value",readData,showerror)
  console.log(b)
}

function draw(){
    background(0);
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
    
}

function changePosition(x,y){
   database.ref('ball/position').set({'x':ball.x+x, 'y':ball.y+y})
}

function readData(data){
c = data.val()
ball.x = c.x
ball.y = c.y
console.log(c)
}



function showerror(){
    console.log("Hello")

}
