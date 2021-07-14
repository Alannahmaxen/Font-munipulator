function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 600);

    canvas = createCanvas(550,500);
    canvas.position(650,100);
}