var game; 
var greeting;
var database;
function setup() {
    // createCanvas(200,200);
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();

    game = new Game();
    greeting = new Form();
    

}
 
function draw() {
}
// this will help with the position
mousePressed = () => {
    
    console.log(mouseX ,mouseY);
    
}