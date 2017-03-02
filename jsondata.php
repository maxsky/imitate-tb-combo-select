<?php
	$info = array(
		array('text'=>urlencode('官方标配'), 'value'=>'0'),
		array('text'=>urlencode('套餐1'), 'value'=>'1'),
		array('text'=>urlencode('套餐2'), 'value'=>'2'),
		array('text'=>urlencode('套餐3'), 'value'=>'3'),//'selected'=>'true'
		array('text'=>urlencode('套餐4'), 'value'=>'4'),
		array('text'=>urlencode('套餐5'), 'value'=>'5'),
		array('text'=>urlencode('套餐6'), 'value'=>'6'),
		array('text'=>urlencode('套餐7'), 'value'=>'7'),
		array('text'=>urlencode('套餐8'), 'value'=>'8'));
		echo urldecode(json_encode($info));
?>