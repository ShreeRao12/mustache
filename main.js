mustache_x="0";
mustache_y="0"
function preload()
{
mustache = loadImage(" https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup() {
canvas = createCanvas(600,400);
canvas.center();
video = createCapture(VIDEO);
 video.size(600,400);
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);

 poseNet.on('pose', gotPoses);
}
function draw()
{
image(video, 0, 0, 600, 400);
image(mustache, mustache_x, mustache_y, 60, 45);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}


function save()
{
    save("my_Mustache.png")
}

function gotPoses(results)
{
  if(results.length>0){
      console.log(results);
      mustache_x =  results[0].pose.nose.x-30;
      mustache_y =  results[0].pose.nose.y+3;
      console.log("nose x: "+ results[0].pose.nose.x);
      console.log("nose y: "+ results[0].pose.nose.y);
  }
}