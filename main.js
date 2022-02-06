status = '';
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function start() {
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
}
function modelLoaded() {
    console.log('Model successfully loaded!');
}
function draw() {
    background('#414141');
}