

const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;
var vencedor = ""
var espacos = document.getElementsByClassName("espaco");

atualizaMostrador();
inicializaEspacos();

/* ATUALIZA O MOSTRADOR PARA MOSTRAR A VER DO JOGADOR ATUAL */
function atualizaMostrador(){
	if (playTime == player1){
		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "Imagens/X.png");
	}else{
		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "Imagens/O.png");
	}
}

/* INICIALIZA OS ESPAÇOS E ESPERA O CLICK */
function inicializaEspacos(){
	
	for (var i = 0; i < espacos.length; i++){
		espacos[i].addEventListener("click",fazJogada);
		
	}	
}

/* FAZ A JOGADA DO JOGADOR ATUAL */
function fazJogada(){
	if (gameOver) {
		return;
	}
	if (this.getElementsByTagName("img").length == 0){
		if (playTime == player1){
			this.innerHTML = "<img src=\"Imagens/X.png\">";
			this.setAttribute("jogada", player1);
			playTime = player2;
		}else{
			this.innerHTML = "<img src='Imagens/O.png'>";
			this.setAttribute("jogada", player2);
			playTime = player1;
		}
	}
	atualizaMostrador();
	verificarVercedor();
	mostraResultado();
}

function verificarVercedor(){
	
	var a1 = document.getElementById("a1").getAttribute("jogada");
	var a2 = document.getElementById("a2").getAttribute("jogada");
	var a3 = document.getElementById("a3").getAttribute("jogada");
	
	var b1 = document.getElementById("b1").getAttribute("jogada");
	var b2 = document.getElementById("b2").getAttribute("jogada");
	var b3 = document.getElementById("b3").getAttribute("jogada");
	
	var c1 = document.getElementById("c1").getAttribute("jogada");
	var c2 = document.getElementById("c2").getAttribute("jogada");
	var c3 = document.getElementById("c3").getAttribute("jogada");
	
	if ((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3 ) && a1 != ""){
		this.vencedor = a1;
	}else if((b2 == b1 && b2 == b3) || (b2 == a2 && b2 == c2) ||
					 (b2 == a1 && b2 == c3) || (b2 == c1 && b2 == a3) && b2 != ""){ 
		this.vencedor = b2;
	}else if((c3 == c1 && c3 == c2) || (c3 == a3 && c3 == b3 ) && c3 != ""){
		this.vencedor = c3;
	}
	if (vencedor != ""){
		gameOver = true;
	}
}

async function mostraResultado(){
	
	if(gameOver){
		await sleep(50);
		alert("O \""+this.vencedor+"\" é o vencedor!!!")
	}else{
		gameOver = true;
		for(var i=0; i<espacos.length; i++){
			if (espacos[i].getAttribute("jogada")==""){
				gameOver = false;
			}
		}
		if(gameOver){
		await sleep(50);
		alert("Deu velha!!!");
		}
	}
}
function sleep(ms){
	
	return new Promise(resolve => setTimeout(resolve, ms));
}