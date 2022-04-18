function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modalloaded);
    poseNet.on("pose",gotpose);
}

function modalloaded(){
    console.log("MODAL IS LOADED");
}

function draw(){
    background("grey");
    fill("yellow");
    stroke("yellowgreen");
    square(nosex,nosey,distance); 
}
nosex=0;
nosey=0;
distance=0;
leftWristx=0;
rightWristx=0;
function gotpose(results){
if(results.length>0){

    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log(" nosex = "+nosex+" nosey = "+nosey);
    leftWristx=results[0].pose.leftWrist.x;
    rightWristx=results[0].pose.rightWrist.x;
    distance=floor(leftWristx-rightWristx);
}
}