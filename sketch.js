var game; 
var greeting;
var database;
let playerIndex;
let players = [];
let player1,player2,player3,player4;
function setup() {

    database = firebase.database();
    // createCanvas(200,200);
    createCanvas(displayWidth,displayHeight);
    

    var gameStateRef = database.ref('gameState')
    gameStateRef.on('value', gameState)
        
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on('value', (data)=>{
        playerIndex = data.val();
        console.log(playerIndex);
        if (playerIndex > 0){
            var player1Ref = database.ref('player' + playerIndex);
            player1Ref.once("value", function(data){
                var playerval = data.val();
                var player = new Player(playerval.position.x, playerval.position.y, 15,15,playerval.sprite, playerIndex)
                players.push(player);
            })
        }
        
    })
    game = new Game();
    
    game.getSet();



}
 
function draw() {
    if (gameState === 1){
        
        // console.log(player.index);
        
        for(var i=0; i<players.length;i++){
            var player = players[i];
            if (player.index === 1){
                var player1 = players[0];
                fill("red");
                noStroke();
                ellipseMode(CENTER)
                ellipse(player1.x,player1.y, 20,10);
            } else if (player.index === 2){
                var player2 = players[1];
                fill("red");
                noStroke();
                ellipseMode(CENTER)
                ellipse(player2.x,player2.y, 20,10);
            } else if (player.index === 3){
                var player3 = players[2];
                fill("red");
                noStroke();
                ellipseMode(CENTER)
                ellipse(player3.x,player3.y, 20,10);
            } else if (player.index === 4){
                var player4 = players[3];
                fill("red");
                noStroke();
                ellipseMode(CENTER)
                ellipse(player4.x,player4.y, 20,10);
            }
            player.display()
        }
    }
}
// this will help with the position
mousePressed = () => {
    
    console.log(mouseX ,mouseY);
    
}
gameState = (data) =>{
    gameState = data.val();
    

        // greeting.display();
        let reset = createButton('RESET');
        reset.position(1542, 147)
        reset.mousePressed(mousePressed =>{
            database.ref('/').set({
                gameState : 0,
                playerCount : 0
            })

            database.ref('player1').set({
                name : "",
                sprite : "blue",
                position : {
                    x : 82,
                    y : 108
                }
                
            })

            database.ref('player2').set({
                name : "",
                sprite :"green",
                position : {
                    x : 82, 
                    y : 140
                }
            })
            
            database.ref('player3').set({
                name : "",
                sprite : "cyan",
                position : {
                    x : 82, 
                    y : 170 
                }
            })
            
            database.ref('player4').set({
                name : "",
                sprite : "purple",
                position : {
                    x : 82, 
                    y : 200 
                }
            })
        })
}
