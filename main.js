function setup(){
    camera=createCapture(VIDEO);
    camera.size(550,370);
   var canvas = createCanvas(550,370);
canvas.position(560,150);
poseNet = ml5.poseNet(camera,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Your model is loaded :)");
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
    }
}
function draw(){
background('#bbd0ff');
}
