<?php

$today = strtotime('-1day', time());
//
//	//
$older = date('Y-m-d', $today);
//
//	//
$url = 'https://newsapi.org/v2/everything?q=apple&from='.$older.'&to='.$today.'&sortBy=popularity&apiKey=86f0a5289ef349be8d360709a926bcf2';

echo file_get_contents($url);
