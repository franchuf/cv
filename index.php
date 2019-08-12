<!DOCTYPE html>
<html>
<head>
	<title>CV Faner</title>
</head>
<body>
<header>
	<div>
		<img src="foto cv.jpg" width="150" alt="foto">
	</div>
</header>

<section class="wrapper">
	<section class="main"> 
		<article>
			<h1>Francisco Augusto Faner</h1>
			<p>Edad 38 anos</p>
			<p>Direccion: Lote 218 Mza 37, Barrio La Estanzuela, La calera, Ciudad de Córdoba</p>
			<p>tel: 3516714211</p>
		</article>

		<article>
			<h2>Experiencia Laboral</h2>
			<p>Mucho trabajo</p>
		</article>
		<article>
			<h3>Supercemento</h3>
			<p>Mucho trabajo</p>
		</article>
	

	</section>
</section>

<?php 
$variable1="CASA";
$variable2="CASa";
echo "la variable es $variable1 <br>";
echo "la variable2 es $variable2 <br>";

$resultado=strcasecmp($variable1, $variable2); //devuelve 1 si NO son iguales y cero si son iguales.


if ($resultado) {
	echo "$variable1 y $variable2 NO son iguales";
}
else{	
	echo "$variable1 y $variable2 SI son iguales";


}
//echo $resultado;




 ?>
<footer>Francisco Faner 2019</footer>
</body>
</html>
