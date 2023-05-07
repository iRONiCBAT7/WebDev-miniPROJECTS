// after refactoring the code


const p1 = {
	score: 0,
	display: document.querySelector("#sp1"),
	button: document.querySelector("#bp1"),
	number: 1,
}


const p2 = {
	score: 0,
	display: document.querySelector("#sp2"),
	button: document.querySelector("#bp2"),
	number: 2,
}


const selectWinScore = document.querySelector("#selectVal");

const reset = document.querySelector("#breset")
const wins = document.querySelector("#wins");


let winnigScore = 3;
let isGameOver = false;



function updateScores(player, opponent){
	if(!isGameOver){
		player.score += 1;
	if(player.score == winnigScore){
		isGameOver = true;
		player.display.classList.add("win")
		opponent.display.classList.add("lost")
		player.button.classList.add("bwin")
		wins.innerHTML = `<span class="vp">Player ${player.number}</span> wins the game`
		player.button.disabled = true;
		opponent.button.disabled = true;

	}
		player.display.textContent = player.score;
	}
}


p1.button.addEventListener("click", function() {
	
	updateScores(p1, p2);
})


p2.button.addEventListener("click", function() {
	updateScores(p2, p1);
})


selectWinScore.addEventListener("change", function() {
     winnigScore = parseInt(this.value);
     doReset();
})



reset.addEventListener("click", doReset);

function doReset() {
	isGameOver = false;
	wins.textContent = "";
	for(let p of [p1, p2]){
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove("win", "lost")
		p.button.classList.remove("bwin")
		p.button.disabled = false;
	}


	// p1.score = 0;
	// p2.score = 0;
	// p1.display.textContent = p1.score;
	// p2.display.textContent = p2.score;
	// p1.display.classList.remove("win", "lost")
	// p2.display.classList.remove("lost", "win")
	// p1.button.classList.remove("bwin")
	// p2.button.classList.remove("bwin")
	// wins.textContent = "";
	// p1.button.disabled = false;
	// p2.button.disabled = false;
}
















//before refactoring 
/*const sp1 = document.querySelector("#sp1");
const sp2 = document.querySelector("#sp2");
const bp1 = document.querySelector("#bp1");
const bp2 = document.querySelector("#bp2");

const selectWinScore = document.querySelector("#selectVal");

const reset = document.querySelector("#breset")
const wins = document.querySelector("#wins");



let p1score = 0;
let p2score = 0;

let winnigScore = 3;

let isGameOver = false;


bp1.addEventListener("click", function() {
	if(!isGameOver){
		p1score += 1;
	if(p1score == winnigScore){
		isGameOver = true;
		sp1.classList.add("win")
		sp2.classList.add("lost")
		bp1.classList.add("bwin")
		wins.textContent = `Player 1 wins the game`
		bp1.disabled = true;
		bp2.disabled = true;

	}
		sp1.textContent = p1score;
	}
	
})


bp2.addEventListener("click", function() {
	if(!isGameOver){
		p2score += 1;
	if(p2score == winnigScore){
		isGameOver = true;
		sp2.classList.add("win")
		sp1.classList.add("lost")
		bp2.classList.add("bwin")
		wins.textContent = `Player 2 wins the game`
		bp1.disabled = true;
		bp2.disabled = true;
	}
		sp2.textContent = p2score;
	}
	
})


selectWinScore.addEventListener("change", function() {
     winnigScore = parseInt(this.value);
     doReset();
})



reset.addEventListener("click", doReset);

function doReset() {

	p1score = 0;
	p2score = 0;
	isGameOver = false;
	sp1.textContent = p1score;
	sp2.textContent = p2score;
	sp1.classList.remove("win", "lost")
	sp2.classList.remove("lost", "win")
	bp1.classList.remove("bwin")
	bp2.classList.remove("bwin")
	wins.textContent = "";
	bp1.disabled = false;
	bp2.disabled = false;
}



*/




//my first attempt gone wrong
/*
const max = 3;
		

	if( (Number(sp1.innerText) || Number(sp2.innerText)) !== max){

		console.log((Number(sp1.innerText) || Number(sp2.innerText)) !== max)

		bp1.addEventListener("click", scoredp1) 
		bp2.addEventListener("click", scoredp2) 

	}


function scoredp1() {
		sp1.innerText = Number(sp1.innerText) + 1;

	} 

function scoredp2() {
		sp2.innerText = Number(sp2.innerText) + 1;

	} 

*/