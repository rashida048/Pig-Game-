/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var score, bothScores, player, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener("click", function(){
  if (gamePlaying){
    var dice = Math.floor(Math.random() * 6) + 1;
    var img = document.getElementById('dice-1');
    img.style.display = 'block';
    img.src = "dice-"+ dice + ".png";

    if (dice !== 1) {
      score += dice;
      document.querySelector('#current-' + player).textContent = score;
    } else {
      nextPlayer();
    }
  }

});

function nextPlayer() {
  player === 0 ? player = 1 : player = 0;
  score = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-hold').addEventListener("click", function(){
  if (gamePlaying) {
    bothScores[player] += score;
    document.querySelector('#score-' + player).textContent = bothScores[player];

    if (bothScores[player] > 20) {
      document.querySelector('#name-' + player).textContent = 'Winner!';
      document.querySelector('dice').style.display = 'none';
      document.querySelector('.player-' + player + '-panel').classList.add('winner');
      document.querySelector('.player-' + player + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener("click", init);

function init() {
  score = 0;
  gamePlaying = true;
  bothScores = [0, 0];
  player = 0;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player-1';
  document.getElementById('name-1').textContent = 'Player-2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}











//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
