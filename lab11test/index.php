<?php
function estePalindrom($s)
{
	$normalizat = strtolower(preg_replace('/\s+/', '', $s));
	return $normalizat === strrev($normalizat);
}

function numaraVocale($s)
{
	preg_match_all('/[aeiou]/i', $s, $matches);
	return count($matches[0]);
}

function inverseazaCuvinte($s)
{
	$cuvinte = preg_split('/\s+/', trim($s));
	$cuvinte = array_filter($cuvinte, static function ($cuvant) {
		return $cuvant !== '';
	});
	return implode(' ', array_reverse($cuvinte));
}

function eliminaDuplicate($s)
{
	$rezultat = '';
	$vazute = [];

	for ($i = 0; $i < strlen($s); $i++) {
		$caracter = $s[$i];

		if (!isset($vazute[$caracter])) {
			$vazute[$caracter] = true;
			$rezultat .= $caracter;
		}
	}

	return $rezultat;
}

$sirPalindrom = 'A man a plan a canal Panama';
$sirVocale = 'PHP este super! ';
$sirCuvinte = 'PHP este super';
$sirDuplicate = 'programare';
?>
<!DOCTYPE html>
<html lang="ro">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Exercitiul 2 - Siruri de caractere</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			line-height: 1.6;
			margin: 40px;
			color: #222;
		}

		.card {
			max-width: 760px;
			padding: 24px;
			border: 1px solid #ccc;
			border-radius: 12px;
			background: #f9f9f9;
		}

		h1 {
			margin-top: 0;
		}

		.result {
			padding: 10px 14px;
			margin: 10px 0;
			background: #fff;
			border-left: 4px solid #2b7;
		}

		code {
			background: #eee;
			padding: 2px 6px;
			border-radius: 4px;
		}
	</style>
</head>
<body>
	<div class="card">
		<h1>Exercitiul 2 - prelucrarea sirurilor</h1>

		<div class="result">
			<strong>estePalindrom</strong><br>
			Sir: <code><?php echo htmlspecialchars($sirPalindrom); ?></code><br>
			Rezultat: <code><?php echo estePalindrom($sirPalindrom) ? 'true' : 'false'; ?></code>
		</div>

		<div class="result">
			<strong>numaraVocale</strong><br>
			Sir: <code><?php echo htmlspecialchars($sirVocale); ?></code><br>
			Rezultat: <code><?php echo numaraVocale($sirVocale); ?></code>
		</div>

		<div class="result">
			<strong>inverseazaCuvinte</strong><br>
			Sir: <code><?php echo htmlspecialchars($sirCuvinte); ?></code><br>
			Rezultat: <code><?php echo htmlspecialchars(inverseazaCuvinte($sirCuvinte)); ?></code>
		</div>

		<div class="result">
			<strong>eliminaDuplicate</strong><br>
			Sir: <code><?php echo htmlspecialchars($sirDuplicate); ?></code><br>
			Rezultat: <code><?php echo htmlspecialchars(eliminaDuplicate($sirDuplicate)); ?></code>
		</div>
	</div>
</body>
</html>
