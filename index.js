const cell_values = [
	"Palabra:<br>\"claramente\"",
	"Palabra:<br>\"trivial\"",
	"Palabra:<br>\"evidente\"",
	"Palabra:<br>\"automático\"",
	"Palabra:<br>\"supérfluo\"",
	"Palabra:<br>\"obvio\"",
	"Palabra:<br>\"inmediato\"",
	"Palabra:<br>\"idea feliz\"",
	"Palabra:<br>\"cuestión\"",
	"Palabra:<br>\"weeeeeno...\"",
	"Palabra:<br>\"intuitivo\"",
	"Palabra:<br>\"sigma\"",
	"Palabra:<br>\"teta\"",
	"Palabra:<br>\"fundamental\"",
	
	"Acción:<br>ataca a alguien por responder a una pregunta.",
	"Acción:<br>insulta a los ingenieros.",
	"Acción:<br>rompe/tira la tiza.",
	"Acción:<br>comete un error operando.",
	"Acción:<br>llega antes de terminar la clase anterior.",
	"Acción:<br>referencia capítulos anteriores explícitamente.",
	"Acción:<br>borra algo y escribe exactamente lo mismo.",
	"Acción:<br>da un puñetazo a la pizarra.",
	"Acción:<br>utiliza el principio de inducción.",
	"Acción:<br>responde a su propia pregunta.",
	"Acción:<br>hace de profesor de filosofía moral.",
	"Acción:<br>utiliza dobles primas (a'').",
	
	"Frase:<br>\"a poco que lo pienses\"",
	"Frase:<br>\"se deja como ejercicio\"",
	"Frase:<br>\"por reducción a lo absurdo\"",
	"Frase:<br>\"según la proposición X\"",
	"Frase:<br>\"la clave del asunto\"",
	"Frase:<br>\"hay que llevar cuidado\"",
	"Frase:<br>\"es natural\"",
	"Frase:<br>\"es como una mala novia\"",
];

function new_shuffle(n, k) {
	let a = [];
	
	for (let i = 0; i < n; i++) {
		a.push(i);
	}
	
	for (let i = 0; i < n; i++) {
		let j = Math.floor(Math.random() * n);
		
		let t = a[i];
		a[i] = a[j];
		a[j] = t;
	}
	
	return a.slice(0, k);
}

window.onload = function() {
	let board_table = document.getElementById("board-table");
	let s = "";
	
	let shuffle = new_shuffle(cell_values.length, 25);
	
	for (let i = 0; i < 5; i++) {
		s += "<tr>";
		
		for (let j = 0; j < 5; j++) {
			s += "<td onclick=\"toggle_cell(" + (i * 5 + j) + ");\">";
			s += "<button class=\"cell-button-off-" + ((i + j) % 2) + "\" id=\"cell-" + (i * 5 + j) + "\">";
			s += cell_values[shuffle[i * 5 + j]];
			s += "</button>";
			s += "</td>";
		}
		
		s += "</tr>";
	}
	
	board_table.innerHTML = s;
};

function toggle_cell(x) {
	if (document.getElementById("cell-" + x).className == "cell-button-on") {
		document.getElementById("cell-" + x).className = "cell-button-off-" + (x % 2);
	} else {
		document.getElementById("cell-" + x).className = "cell-button-on";
	}
}
