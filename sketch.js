var game; 
var greeting;
var database;
function setup() {

    database = firebase.database();
    firebasesetup();
    // createCanvas(200,200);
    createCanvas(displayWidth,displayHeight);
    

    var gameStateRef = database.ref('gameState')
    gameStateRef.on('value', gameState)
        

    game = new Game();
    
    game.getSet();



}
 
function draw() {
    
}
// this will help with the position
mousePressed = () => {
    
    console.log(mouseX ,mouseY);
    
}
gameState = (data) =>{
    gameState = data.val();
    if (gameState === 1){

        // greeting.display();

        var player1Ref = database.ref('player1/sprite');
        player1Ref.once("value", function(data){
            var sprite1 = data.val();
            fill(sprite1);
            rect(82, 108, 15,15)
        })
        

        var player2Ref = database.ref('player2/sprite');
        player2Ref.once("value", function(data){
            var sprite2 = data.val();
            fill(sprite2);
            rect(82, 140, 15,15)
        })

        var player3Ref = database.ref('player3/sprite');
        player3Ref.once("value", function(data){
            var sprite3 = data.val();
            fill(sprite3);
            rect(82, 170, 15,15)
        })

        var player4Ref = database.ref('player4/sprite');
        player4Ref.once("value", function(data){
            var sprite4 = data.val();
            fill(sprite4);
            rect(82, 200, 15,15)
        })
    }
}

function firebasesetup(){
    database.ref('/').set({
        playerCount : 0,
        gameState : 0,
        
        
    })
    database.ref('player1').set({
        name : "",
        sprite : "blue"
    })

    database.ref('player2').set({
        name : "",
        sprite : "green"
    })

    database.ref('player3').set({
        name : "",
        sprite : "cyan"
    })

    database.ref('player4').set({
        name : "",
        sprite : "aqua"
    })

}