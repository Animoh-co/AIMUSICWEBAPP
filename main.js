rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
music1 = " ";
music2 = " ";

function preload(){
music1 = loadsound("music.mp3");
music2 = loadsound("musiic2.mp3");
console.log("Music has been loaded");
}

function setup(){
    Canvas = createCanvas(600,550);
    Canvas.center();
    
    
    video = createCapture(VIDEO);
    video.hide();

    Posenet = ml5.poseNet(video, modelloaded);
    Posenet.on('pose', posenetresults);
}

function modelloaded(){
    console.log("model has been leaded");
}
function posenetresults(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
       console.log(leftWristX, leftWristY, rightWristX, rightWristY);
    }
}

function draw(){
   image(video, 0, 0, 600, 550);
}