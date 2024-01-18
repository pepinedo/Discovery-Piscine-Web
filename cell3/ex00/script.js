
function aleatorieColor() 
{
	const random1 = Math.ceil(Math.random() * 255);
	const random2 = Math.ceil(Math.random() * 255);
	const random3 = Math.ceil(Math.random() * 255);
  
	return `rgb(${random1},${random2},${random3})`;
}

let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
	document.body.style.backgroundColor = aleatorieColor();
});
