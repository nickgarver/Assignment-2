var game = false;
var number = null;
var numberTwo = null;
var score = null;

  // background: #fab1a0; /* lose */
  // background: #55efc4; /* win */
  // display: inline-block;


function beginGame(){
  number = parseInt(Math.random()*100);
  numberTwo = parseInt(Math.random()*100);
  game = true;
  score = 0;
  document.getElementById("number").classList.remove('number-flash');
  document.getElementById("number").innerHTML = number;
  document.getElementById("directions").style.display = "none";
  document.getElementById("resultOuter").className = "bottom-screen";
  document.getElementById("score").innerHTML = 'Score: '+ score;
  refreshData('null')
}

function choiceBtn(choice){
  if(game == false)
    return;

  document.getElementById("number").innerHTML = choice;
  if((choice == 'lower' & numberTwo < number) || (choice == 'higher' & numberTwo > number) || (choice == 'same' & numberTwo == number)){
    document.getElementById("resultOuter").className = '';
    void document.getElementById("resultOuter").offsetWidth;
    number = numberTwo;
    numberTwo = parseInt(Math.random()*100);
    refreshData(choice)
    score++
    document.getElementById("number").innerHTML = number;
    document.getElementById("result").innerHTML = 'Correct!';
    document.getElementById("resultOuter").className = 'bottom-screen win';
    document.getElementById("score").innerHTML = 'Score: '+ score;
  } else {
    numberTwo = parseInt(Math.random()*100);
    refreshData(choice)
    document.getElementById("result").innerHTML = 'Game Over!';
    document.getElementById("resultOuter").className = 'bottom-screen lose';
    document.getElementById("number").innerHTML = 'Nope, '+ numberTwo +'!....Press Start to play again.';
    score = 0;
    game = false;
  }
}

function toggleCheat(){
  document.getElementById("cheats").classList.toggle("hide-cheats");
  document.getElementById("cheats").classList.toggle("show-cheats");
}

function refreshData(choice){
  document.getElementById("old").innerHTML = 'Old Num: ' + number;
  document.getElementById("new").innerHTML = 'New Num: ' + numberTwo;
  if (numberTwo < number) {
    document.getElementById("guess").innerHTML = 'Pick: lower';
  } else if (numberTwo > number) {
      document.getElementById("guess").innerHTML = 'Pick: higher';
  } else if (numberTwo == number) {
      document.getElementById("guess").innerHTML = 'Pick: same';
  }
}
