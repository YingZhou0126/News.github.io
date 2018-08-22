<?php

	// echo time();

	// echo '<br>';

	// echo date('Y-m-d', time());

	// php 获得时间
	$today = strtotime('-1day', time());
//
//	//
	$older = date('Y-m-d', $today);
//
//	//
	$url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=86f0a5289ef349be8d360709a926bcf2';

	echo file_get_contents($url);


