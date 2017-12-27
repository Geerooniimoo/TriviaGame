
let tim;
let i = 0;
let i2 = -1;
let i3 =0;
let Ans = [];
let rightAns;
let intervalId;
let correctAns;
const time = 10;
let rightAnsTotal = 0;
let wrongAnsTotal = 0;

const themeSong = document.createElement('audio');
$(themeSong).attr('src' , "assets/sounds/Halo Reach - 18 - Walking Away.mp3");
const rightAnsSong = document.createElement('audio');
$(rightAnsSong).attr('src', 'assets/sounds/filling-your-inbox.mp3');
const wrongAnsSong = document.createElement('audio');
$(wrongAnsSong).attr('src' , 'assets/sounds/nasty-error-long.mp3');
const winSong = document.createElement('audio');
$(winSong).attr('src', 'assets/sounds/12-days-of-christmas.mp3');
const lostSong = document.createElement('audio');
$(lostSong).attr('src', 'assets/sounds/Corpse Party - Gameover.mp3')



//random background
let ground = ['assets/images/background1.png', 'assets/images/background2.png', 'assets/images/background3.png', 'assets/images/background4.png', 'assets/images/background5.png', 'assets/images/background6.png', 'assets/images/background7.png'];
let background = ground[Math.floor(Math.random() * 7)];
$('body').css('background-image' , 'url(' + background + ')');
//hide scoreBoard
$('#scoreBoard').css("opacity", '0');

const qAndA = [
	["What is the spirit?",
	"a ghost",
	"what we become once we die",
	"what God and the Devil are fighting for",
	"the nonphysical part of a person"],
	["If iternal life begins with an eternal sleep, when will the spirit wake up?", 
	"right away but it cannot be seen because is in a nonphysical form",
	"right away somewhere else",
	"after an eternity",
	"never"],
	["Can the flow of enery teach us about right and wrong?",
	"no, because enery cannot reason",
	"yes, because enery always follow the shortest path",
	"no, because enery is not alive",
	"yes, because it can inspire purpose by it's persuit of balance"],
	["What is the meaning of evil?",
	"the absence of good",
	"all the Devil does",
	"ignorance",
	"depravity"],
	["What is the meaning of good",
	"light",
	"what is needed to go to heaven",
	"the absence of evil",
	"righteousness"]
	];

displayQuestions();
themeSong.play();
					
function scoreboard() {
	if (i >= qAndA.length) {
		$('#rightAns').html(rightAnsTotal);
		$('#wrongAns').html(wrongAnsTotal);
		$('#scoreBoard').css('opacity', '1');
		$('#bodyRows').css('opacity', '0');
			if (rightAnsTotal > wrongAnsTotal) {
				themeSong.pause();
				winSong.play();
			}
			else {
				themeSong.pause();
				lostSong.play();
			};
	}
	else {
		displayQuestions();
	}
 };

function displayQuestions() {

	//display question
	$('#Question').html(qAndA[i][0]);

	//correct answer
	correctAns = qAndA[i][4]; 
	
	//randomize the answers in array
	i2 = Math.floor(Math.random() * 4 + 1);
	i3 = 0;
		for (let y = i2; y < 5; y++) {
			Ans[i3] = (qAndA[i][y]);
			i3++
		};
		for (let y = 1; y < i2; y++) {
			Ans[i3] = (qAndA[i][y]);
			i3++
		};
	//display randomized answers
	for (let y = 1; y < 5; y++) {
	 		$('#ans' + y).html(Ans[y - 1])
	};
	timer();
};

function nextQuestion() {
	i++;
	scoreboard();
}

function timer() {
		tim = time + 1;
		clearInterval(intervalId);			
      	intervalId = setInterval(decrement, 1000);
};
function decrement() {
	    tim--;
    	$("#timer").html(tim);
		if (tim === 0) {
			wrongAnsTotal++;
			wrongAnsSong.play();		
			clearInterval(intervalId);
			nextQuestion();
		};
};

//check answer
$('#ans1').on('click', check1);
$('#ans2').on('click', check2);
$('#ans3').on('click', check3);
$('#ans4').on('click', check4);


function check1() {
	clearInterval(intervalId);
	if (Ans[0] == correctAns) {
		rightAnsTotal++
		rightAnsSong.play();
		nextQuestion();
	}
	else {
		wrongAnsTotal++;
		wrongAnsSong.play();
		nextQuestion();
	};
}; 
function check2() {
	clearInterval(intervalId);
	if (Ans[1] == correctAns) {
		rightAnsTotal++
		rightAnsSong.play();
		nextQuestion();
	}
	else {
		wrongAnsTotal++;
		wrongAnsSong.play();
		nextQuestion();
	};
}; 
function check3() {
	clearInterval(intervalId);
	if (Ans[2] == correctAns) {
		rightAnsTotal++
		rightAnsSong.play();
		nextQuestion();
	}
	else {
		wrongAnsTotal++;
		wrongAnsSong.play();
		nextQuestion();
	};
}; 
function check4() {
	clearInterval(intervalId);
	if (Ans[3] == correctAns) {
		rightAnsTotal++
		rightAnsSong.play();
		nextQuestion();
	}
	else {
		wrongAnsTotal++;
		wrongAnsSong.play();
		nextQuestion();
	};
}; 

