<?php
$response = json_decode(@file_get_contents('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'));
echo json_encode(array('image' => 'https://www.bing.com'.$response->images[0]->url));
