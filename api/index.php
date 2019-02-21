<?php
$bg = file_get_contents('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR');
$json_bg = json_decode($bg);
$result = array('image' => 'https://www.bing.com'.$json_bg->images[0]->url);
echo json_encode($result);
?>