status = '';
canvas = '';
video = '';
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
function start() {
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
}
function modelLoaded() {
    console.log('Model successfully loaded!');
    status = true;
}
function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}
function draw() {
    image(video, 0, 0, 380, 380);
}
