noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/CMfnR46F/nose-clown.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
       // console.log("Nose X = "+ noseX);
        //console.log("Nose Y = "+ noseY);
        //console.log("Nose X = "+ results[0].pose.nose.x);
        //console.log("Nose Y = "+ results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);

}

function take_snapshot() {
    save('myFilterImage.png');
}