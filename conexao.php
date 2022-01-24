<?php

//dados de conexão

$servidor='localhost';	//servidor
$usuario='root';		// usuario
$senhabd='';			//senha 
$banco='spotart';		//database

//conexão com o bd

$connect = mysqli_connect($servidor,$usuario,$senhabd)or die("Erro na seleção do banco");

$connect = mysqli_connect($servidor,$usuario,$senhabd);
if (!$connect) {
	die('Não conectou! -'.mysql_error());
}
echo 'Conectou!';
?>
