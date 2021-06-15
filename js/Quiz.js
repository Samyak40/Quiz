class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background('Blue')
    //write code to show a heading for showing the result of Quiz
    fill(0)
    textSize(30)
    text("Result of the quiz is :-",350,50)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      debugger
      fill("Black")
      var displayAnswer = 250
      textSize(30)
      text("The correct answers will be highlighted in green")
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      debugger
      var correctans = "2"
      if(correctans === allContestants[plr].answer){
        fill('Green')
      }else fill('Red')
      displayAnswer += 30
      textSize(20)
      text(allContestants[plr].name+":"+allContestants[plr].answer,250,displayAnswer)
     }

  }

}
