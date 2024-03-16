<?php
$link = $_POST["link"];

// Güvenlik için URL kontrolü
if (!filter_var($link, FILTER_VALIDATE_URL)) {
  die("Geçersiz URL!");
}

// Sayfa kaynağını alma
$ch = curl_init($link);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
$html = curl_exec($ch);
curl_close($ch);

// Sayfa kaynağını çalıştırma
echo $html;
?>
