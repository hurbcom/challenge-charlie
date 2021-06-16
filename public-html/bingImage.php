<?php

$imgBing = json_decode(file_get_contents("https://bing.com/HPImageArchive.aspx?format=js&n=1&mkt=pt-BR"));

echo("https://bing.com{$imgBing->images[0]->url}");

?>
