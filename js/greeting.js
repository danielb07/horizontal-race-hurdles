class Form {
    constructor(){
        var heading = createElement('h2');
        heading.html("horizontal hurdles game" );
        heading.position(130,2);

        var Name = createInput('Name')
        var button = createButton('Ready')
        // var ready = createElement('h3');

        Name.position(130,160);
        button.position(250,200);
        
        button.mousePressed(function(){
            Name.hide();
            button.hide(); 

            var playerCountRef = database.ref('playerCount');
            var name = Name.value();
            playerCountRef.once("value", function(data){
                var count = data.val();
                if(count === 0){
                    console.log(1);
                    
                    database.ref('player1').update({
                        name : name
                        
                    })
                    database.ref('/').update({
                        playerCount : 1
                    })
                    // ready.html("get ready " + name )
                    // ready.position(displayWidth/4,displayHeight/4)
            
                }else if(count === 1){
                    
                    database.ref('player2').update({
                        // playerCount : 1;
                        name : name,
                    })
                    database.ref('/').update({
                        playerCount : 2
                    })
                    // ready.html("get ready " + name )
                    // ready.position(displayWidth/4,displayHeight/4)
                    
                }else if(count === 2){
                    
                    database.ref('player3').update({
                        // playerCount : 1;
                        name : name,
                    })
                    database.ref('/').update({
                        playerCount : 3
                    })
                    // ready.html("get ready " + name )
                    // ready.position(displayWidth/4,displayHeight/4)
                    
                }else if(count === 3){
                    
                    database.ref('player4').update({
                        // playerCount : 1;
                        name : name,
                    })
                    database.ref('/').update({
                        playerCount : 4
                    })

                    database.ref('/').update({
                        gameState : 1
                    })
                    // ready.html("get ready " + name )
                    // ready.position(displayWidth/4,displayHeight/4)
                      
                    
                }
            })
        })

    }
    display() {
        // ready.hide();
    }
}