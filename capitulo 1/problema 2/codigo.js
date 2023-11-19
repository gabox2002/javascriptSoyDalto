/* Cofla decide darle ese dinero a un sin techo que asu vez compra un boleto de loteria
Si le alcanza uno, lo compra
Si le alcanza dos, compra dos
Si le alcanza tres y sobra, regala el vuelto
Mostrar en pantalla los boletos que compró y cual fue el vuelto
*/


boleto = 0.9;
dinero = 2.7;

if (dinero/boleto < 1) {
	alert("no alcanzan boletos bro")
}

else if (dinero/boleto >= 1 && dinero/boleto < 2) {
	vuelto = dinero - boleto;
	alert("comprar 1 y el vuelto es: " + vuelto);
}

else if (dinero/boleto >= 2 && dinero/boleto < 3){
	vuelto = dinero - boleto*2;
    alert("comprar 2 y el vuelto es: " + vuelto);
}

else {
	vuelto = dinero - boleto*2;
    alert("comprar dos y el vuelto es: " + vuelto + ", regalarlo")
}