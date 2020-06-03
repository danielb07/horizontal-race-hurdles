class Game {
    constructor(){
    }

    
    // update(state){
    //     database.ref('/').update({
    //         gameState : state
    //     })
    // }

    getSet(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.once("value", function(data){
            var gameState = data.val();
            
            if(gameState === 0){

                var greeting = new Form();
             }
             })
    }
    display(){
        

    }
}