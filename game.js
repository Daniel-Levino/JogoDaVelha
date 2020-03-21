

const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;

atualizaMostrador();
inicializaEspacos();

function atualizaMostrador(){
	if (gameOver) { return;}
	if (playTime == player1){
		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "Imagens/X.png");
	}else{
		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "Imagens/O.png");
	}
}//funcionando bem


function inicializaEspacos(){
	
	var espacos = document.getElementsByClassName("espaco");
	
	for (var i = 0; i < espacos.length; i++){
		espacos[i].addEventListener("click",function(){
			if (gameOver) {return;}
			if (this.getElementsByTagName("img").length == 0){
				if (playTime == player1){
					this.innerHTML = "<img src='Imagens/X.png'>";
					this.setAttribute("jogada", player1);
					playTime = player2;
				}else{
					this.innerHTML = "<img src='Imagens/O.png'>";
					this.setAttribute("jogada", player2);
					playTime = player1;
				}
			}atualizaMostrador();
		});
	}
}

