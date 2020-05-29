class Form {
    constructor(){
        var heading = createElement('h2');
        heading.html("horizontal hurdles game" );
        heading.position(130,2);

        var Name = createInput('Name')
        var button = createButton('Ready')
        var ready = createElement('h3');

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
                    
                    database.ref('/').update({
                        player1 : name,
                        playerCount : 1
                    })
                }else if(count === 1){
                    
                    database.ref('/').update({
                        // playerCount : 1;
                        player2 : name,
                        playerCount : 2
                    })
                    
                }else if(count === 2){
                    
                    database.ref('/').update({
                        // playerCount : 1;
                        player3 : name,
                        playerCount : 3
                    })
                    
                }else if(count === 3){
                    
                    database.ref('/').update({
                        // playerCount : 1;
                        player4 : name,
                        playerCount : 4
                    })
                    
                }
            })

            
            ready.html("get ready " + name )
            ready.position(displayWidth/4,displayHeight/4)

        })

    }
}