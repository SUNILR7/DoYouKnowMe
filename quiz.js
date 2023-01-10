
var readlineSync = require('readline-sync')
var user = readlineSync.question(`what's your name?`)
function welcome()
{
     console.log('welcome '+ user + '!  Do you know sunil?');
}
welcome()
//var confirm = readlineSync.question('are you ready to play?')
var score = 0
var highScores = [{
      name:'sunil',
      score:3
} , 
   {
    name:'H jay',
    score:2
   }
]
var question = [{
    questionOne:'where do I live',
    answer:'chickballapur'
},
   {
     questionOne:'My profession?',
     answer:'web developer'
   },
    {
        questionOne:'My best-friend?',
        answer:'H jay'
    }]
   if(readlineSync.keyInYN('lets play...'))
   {
       for(let i=0;i<question.length;i++)
       {
           play(question[i].questionOne , question[i].answer)
       }
   }
   else{
      console.log('ohh seems you are tired take rest');
   }


   function play(question , answer)
   {
       var userInput = readlineSync.question(question)
       if(userInput.toUpperCase() === answer.toUpperCase())
       {
          console.log('you are right!');
          score++
          console.log('current score:'+ score);
          console.log("------------------");
       }
       else{
        console.log('you are wronge!');
       }
   }
   
   function showScores()
   {
       console.log('you scored:' + score);
       console.log('look at the highest scores if you are there ping me I will update it');
        highScores.map((score)=>{
             
            console.log(score.name + ':' + score.score);
        })
   }
   
   showScores()