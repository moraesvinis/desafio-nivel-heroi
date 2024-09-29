let nomeHeroi = "Vinícius"

let exp = 1

const mensagemSaida = "O Herói de nome " + nomeHeroi + " está no nível de "

if(exp <= 1000){
	console.log(mensagemSaida + "Ferro")
}
else if(exp >= 1001 && exp <= 2000){
	console.log(mensagemSaida + "Bronze")
}
else if(exp >= 2001 && exp <= 5000){
	console.log(mensagemSaida + "Prata")
}
else if(exp >= 5001 && exp <= 7000){go
	console.log(mensagemSaida + "Ouro")
}
else if(exp >= 7001 && exp <= 8000){
	console.log(mensagemSaida + "Platina")
}
else if(exp >= 8001 && exp <= 9000){
	console.log(mensagemSaida + "Ascendente")
}
else if(exp >= 9001 && exp <= 10000){
	console.log(mensagemSaida + "Imortal")
}
else if(exp >= 10000){
	console.log(mensagemSaida + "Radiante")
}