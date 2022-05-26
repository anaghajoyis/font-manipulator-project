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
        leftWristX = result[0].pose.leftWrist.x;
        console.log("Left - "+leftWristX);
        rightWristX = result[0].pose.rightWrist.x;
        console.log("Right - "+rightWristX);
        difference = floor(leftWristX-rightWristX);
        console.log("Diff - "+difference);
    }
}
function draw(){
background('#bbd0ff');
textSize(difference);
fill('#fdc5f5');
text('Anagha 💖',50,400);

}
