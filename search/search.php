<?php
  function translit($s) {
  $s = (string) $s; // преобразуем в строковое значение
  $s = strip_tags($s); // убираем HTML-теги
  $s = str_replace(array("\n", "\r"), " ", $s); // убираем перевод каретки
  $s = preg_replace("/\s+/", ' ', $s); // удаляем повторяющие пробелы
  $s = trim($s); // убираем пробелы в начале и конце строки
  $s = function_exists('mb_strtolower') ? mb_strtolower($s) : strtolower($s); // переводим строку в нижний регистр (иногда надо задать локаль)
  $s = strtr($s, array('а'=>'a','б'=>'b','в'=>'v','г'=>'g','д'=>'d','е'=>'e','ё'=>'e','ж'=>'j','з'=>'z','и'=>'i','й'=>'y','к'=>'k','л'=>'l','м'=>'m','н'=>'n','о'=>'o','п'=>'p','р'=>'r','с'=>'s','т'=>'t','у'=>'u','ф'=>'f','х'=>'h','ц'=>'c','ч'=>'ch','ш'=>'sh','щ'=>'shch','ы'=>'y','э'=>'e','ю'=>'yu','я'=>'ya','ъ'=>'','ь'=>''));
  $s = preg_replace("/[^0-9a-z-_ ]/i", "", $s); // очищаем строку от недопустимых символов
  $s = str_replace(" ", "-", $s); // заменяем пробелы знаком минус
  return $s; // возвращаем результат
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Помогите найти <?=$_GET["req"] ?></title>
<link rel="stylesheet" type="text/css" href="q3_data/style.css" media="all">
<style>.NoIndex_clr_bg_txt_and_img, .NoIndex_clr_bg_txt_and_img * { color: rgb(0, 0, 0) !important; background-color: #DAA520 !important;} .NoIndex_cross_txt, .NoIndex_cross_txt * { text-decoration: line-through !important; } </style></head>
<body>
<div align="center">
	<div class="page" style="width: 100%; text-align: left;">
		<div style="padding: 0px 25px;" align="left">
			<div id="hscontrolbar" class="highslide-overlay hscontrolbar">
			
			</div>
			<br>
			<table class="tborder" align="center" border="0" cellpadding="6" cellspacing="1" width="100%">
			<tbody>
			<tr>
				<td class="alt1" width="100%">
					<table border="0" cellpadding="0" cellspacing="0">
					<tbody>
					<tr valign="bottom">
						<td>
							<a href="#" onclick="history.back(1); return false;"><img title="Вернуться" src="q3_data/navbit-home.png" alt="Вернуться" border="0"></a>
						</td>
						<td>
							 &nbsp;
						</td>
						<td width="100%">
							<span class="navbar">
							<a href="#" accesskey="1">Лучший форум обо всем</a></span>
							<span class="navbar">
							<img src="q3_data/navbit-arrow-right.png">
							<a href="#">Общение и не только</a></span>
							<span class="navbar">
							<img src="q3_data/navbit-arrow-right.png">
							<a href="#">Помощь в поиске в сети</a></span>
						</td>
					</tr>
					<tr>
						<td class="navbar" style="font-size: 10pt; padding-top: 1px;" colspan="3">
							<a href="#">
							<img title="Перезагрузить страницу" class="inlineimg" src="q3_data/navbits_finallink_ltr.gif" alt="Перезагрузить страницу" border="0"></a><strong><?=$_GET["req"] ?></strong>
						</td>
					</tr>
					</tbody>
					</table>
				</td>
				<td class="alt2" style="padding: 0px;" nowrap="nowrap">
					<form action="#" method="post" onsubmit="md5hash(vb_login_password, vb_login_md5password, vb_login_md5password_utf, 1)">
						<table border="0" cellpadding="0" cellspacing="3">
						<tbody>
						<tr>
							<td class="smallfont" style="white-space: nowrap;">
								<label for="navbar_username">Имя</label>
							</td>
							<td>
								<input autocomplete="off" class="bginput" style="font-size: 11px; background-image: url('img/undefined'); background-repeat: no-repeat; background-attachment: scroll; background-position: right center;" name="vb_login_username" id="navbar_username" size="10" accesskey="u" tabindex="101" value="Имя" onfocus="if (this.value == 'Имя') this.value = '';" type="text">
							</td>
							<td class="smallfont" nowrap="nowrap">
								<label for="cb_cookieuser_navbar"><input name="cookieuser" value="1" tabindex="103" id="cb_cookieuser_navbar" accesskey="c" checked="checked" type="checkbox">Запомнить?</label>
							</td>
						</tr>
						<tr>
							<td class="smallfont">
								<label for="navbar_password">Пароль</label>
							</td>
							<td>
								<input autocomplete="off" class="bginput" style="font-size: 11px; background-image: url('img/undefined'); background-repeat: no-repeat; background-attachment: scroll; background-position: right center;" name="vb_login_password" id="navbar_password" size="10" tabindex="102" type="password">
							</td>
							<td>
								<input name="securitytoken" value="guest" type="hidden">
								<input class="button" value="Вход" tabindex="104" title="Введите ваше имя пользователя и пароль, чтобы войти, или нажмите кнопку 'Регистрация', чтобы зарегистрироваться." accesskey="s" type="submit">
							</td>
						</tr>
						</tbody>
						</table>
						<input name="s" value="a6f73c1792dbc76154679e5d8cbe8c7b" type="hidden">
						<input name="securitytoken" value="guest" type="hidden">
						<input name="do" value="login" type="hidden">
						<input name="vb_login_md5password" type="hidden">
						<input name="vb_login_md5password_utf" type="hidden">
					</form>
				</td>
			</tr>
			</tbody>
			</table>
			<table style="border-width: 0px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;" align="center" border="0" cellpadding="6" cellspacing="0" width="100%">
			<tbody>
			<tr align="center">
				<td style="cursor: pointer;" id="last10" class="vbmenu_control">
					 Последние 10 сообщений <img alt="" title="" src="q3_data/menu_open.gif" border="0">
				</td>
				<td class="vbmenu_control">
					<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Регистрация</a>
				</td>
				<td style="cursor: pointer;" id="memberlist" class="vbmenu_control">
					<a href="#">Список пользователей</a>
					<img alt="" title="" src="q3_data/menu_open.gif" border="0">
				</td>
				<td id="navbar_search" class="vbmenu_control">
					<a class="pageNoFollow_hilite" href="#" accesskey="4" rel="nofollow" style="text-decoration: line-through !important;">Поиск</a>
				</td>
			</tr>
			</tbody>
			</table>
			<a name="poststop" id="poststop"></a>
			<table class="tborder" style="border-bottom-width: 0px; border-top-right-radius: 0px;" align="center" border="0" cellpadding="6" cellspacing="1" width="100%">
			<tbody>
			<tr>
				<td class="tcat" width="100%">
					<div class="smallfont">
						 &nbsp;
					</div>
				</td>
				<td style="cursor: pointer;" class="vbmenu_control" id="threadtools" nowrap="nowrap">
					<a href="#">Опции темы</a>
					<img alt="" title="" src="q3_data/menu_open.gif" border="0">
				</td>
				<td style="cursor: pointer;" class="vbmenu_control" id="threadrating" nowrap="nowrap">
					<a href="#"><span id="threadrating_current">Оценить тему</span></a>
					<img alt="" title="" src="q3_data/menu_open.gif" border="0">
				</td>
			</tr>
			</tbody>
			</table>
		</div>
	</div>
</div>
<div id="posts">
	<div align="center">
		<div class="page" style="width: 100%; text-align: left;">
			<div style="padding: 0px 25px;" align="left">
				<div id="edit285294" style="padding: 0px 0px 6px;">
					<table id="post285294" class="tborder" align="center" border="0" cellpadding="6" cellspacing="0" width="100%">
					<tbody>
					<tr>
						<td class="thead" style="border-top-right-radius: 0px; font-weight: normal; border-width: 1px 0px 1px 1px; border-style: solid none solid solid; border-color: rgb(255, 255, 255) -moz-use-text-color rgb(255, 255, 255) rgb(255, 255, 255); -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;">
							<a name="post285294"><img title="Старый" class="inlineimg" src="q3_data/post_old_001.gif" alt="Старый" border="0"></a>
							Вчера, 11:01
						</td>
						<td class="thead" style="border-top-left-radius: 0px; font-weight: normal; border-width: 1px 1px 1px 0px; border-style: solid solid solid none; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) -moz-use-text-color; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;" align="right">
							 &nbsp; #<a class="pageNoFollow_hilite" href="#" target="new" rel="nofollow" id="postcount285294" name="1" style="text-decoration: line-through !important;"><strong>1</strong></a>&nbsp; <a href="#" onclick="self.scrollTo(0, 0); return false;">
							<img title="Вверх" class="inlineimg" src="q3_data/arrow_up.gif" alt="Вверх" border="0"></a>&nbsp; &nbsp;
						</td>
					</tr>
					<tr valign="top">
						<td class="alt2" rowspan="2" style="-moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; border-width: 0px 1px; border-style: none solid; border-color: -moz-use-text-color rgb(255, 255, 255);" width="175">
							<div id="postmenu_285294">
								<img title="Иринь поза форумом" class="inlineimg" style="padding-bottom: 3px;" src="q3_data/user_offline.gif" alt="Иринь поза форумом" border="0">
								<a class="bigusername" href="#">Иринь</a>
								<img title="Топикстартер" style="padding-left: 2px;" src="q3_data/ts.png" alt="Топикстартер" border="0">
							</div>
							<div class="smallfont">
								 Новичок <img title="Женщина" src="q3_data/gender_w.gif" alt="Женщина" border="0">&nbsp;
							</div>
							<a href="#" onclick="return toggle_collapse('userinfo285294')"><img src="q3_data/uncover_postbit_details.gif" alt="" border="0"></a>
							<div class="smallfont">
								 &nbsp;<br>
								<table border="0" cellpadding="0" cellspacing="0">
								<tbody>
								<tr>
									<td>
										<a href="#">
										<img title="Аватар для Иринь" src="q3_data/245.gif" alt="Аватар для Иринь" border="0">
										</a>
									</td>
									<td valign="top">
										<a onclick="javascript:loadChat('4339');" href="javascript:void(0)">
										<img title="Начать приватный чат" src="q3_data/chat.gif" alt="Начать приватный чат" border="0">
										</a>
									</td>
								</tr>
								</tbody>
								</table>
							</div>
							<div 0class="smallfont">
								<img src="q3_data/0.gif" alt="" border="">
								<img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border="">
								<a class="opinion" href="#" title="Мнения о Иринь">
								<img src="q3_data/opinion_empty.gif" border="0">
								</a>
							</div>
							<div class="smallfont">
								<span id="repdisplay_285294_4339">
								<div align="left">
									<table height="5" width="110">
									<tbody>
									<tr style="background-image: url('img/green.faded.gif'); background-size: 110px 5px;">
										<td title="Иринь Ни чем не отличился на форуме, 0%" nowrap="nowrap">
											<img title="Иринь Ни чем не отличился на форуме; 0%" alt="Иринь Ни чем не отличился на форуме; 0%" src="q3_data/green.gif" height="5">
											<img title="Иринь Ни чем не отличился на форуме, 0%" alt="Иринь Ни чем не отличился на форуме, 0%" src="q3_data/green_003.gif" height="5" width="0">
											<img title="Иринь Ни чем не отличился на форуме, 0%" alt="Иринь Ни чем не отличился на форуме, 0%" src="q3_data/green_002.gif" height="5" width="1">
										</td>
									</tr>
									</tbody>
									</table>
								</div>
								</span>
							</div>
							<div class="smallfont">
								<div>
									 Регистрация: 03.01.2014
								</div>
								 Сообщений: 7
								<div id="collapseobj_userinfo285294" style="display: none;">
									<div>
										 Адрес: Китай<br>
									</div>
									<div>
										<div>
											 Реалов: 327
										</div>
									</div>
									<div>
										 Рецептов: 0
									</div>
									<div>
										 Сказал спасибо 0 раз(а)
									</div>
									<div>
										 Поблагодарили: Благодарностей: 3 в раз(а) темах
									</div>
									<a href="#" onclick="imwindow('icq', '4339', 500, 450); return false;"><img title="Отправить сообщение для Иринь с помощью ICQ" src="q3_data/im_icq.gif" alt="Отправить сообщение для Иринь с помощью ICQ" border="0"></a><a href="#" onclick="imwindow('msn', '4339', 400, 200); return false;"><img title="Отправить сообщение для Иринь с помощью MSN" src="q3_data/im_msn.gif" alt="Отправить сообщение для Иринь с помощью MSN" border="0"></a><a href="#" onclick="imwindow('skype', '4339', 400, 285); return false;"><img title="Отправить сообщение для Иринь с помощью Skype™" src="q3_data/yangxiaolin16.htm" alt="Отправить сообщение для Иринь с помощью Skype™" border="0"></a><br>
								</div>
							</div>
						</td>
						<td class="alt1" id="td_post_285294" style="border-right: 1px solid rgb(255, 255, 255);">
							<div class="smallfont">
								<strong><?=$_GET["req"] ?></strong>
							</div>
							<hr style="color: rgb(255, 255, 255); background-color: rgb(255, 255, 255);" size="1">
							<div id="post_message_285294">
								<index><b><font size="2">
								Ребят, нужна помощь. Где можно найти <font color="darkorchid"><?=$_GET["req"] ?></font>? Вроде искала везде, ничо не нашла. Помогите, дайте ссылочку, очень нужно!<img src="q3_data/smile.gif" alt="" title="Smile" class="inlineimg" border="0"></font></b></index>
							</div>
						</td>
					</tr>
					<tr>
						<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left" valign="bottom">
							<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
							<tbody>
							<tr>
								<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left">
								</td>
								<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom" width="295">
								</td>
							</tr>
							<tr>
								<td colspan="2" class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom">
									<a class="pageNoFollow_hilite" href="#" id="post_thanks_button_285294" onclick="return post_thanks_give(285294, false, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Поблагодарить за это сообщение" src="q3_data/post_thanks.gif" alt="Поблагодарить за это сообщение" style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
									<a class="pageNoFollow_hilite" href="#" id="post_thanks_delbutton_285294" onclick="return post_thanks_remove_user(285294, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Удалить моё." src="q3_data/post_thanks_del.gif" alt="Удалить моё." style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
								</td>
							</tr>
							</tbody>
							</table>
						</td>
					</tr>
					</tbody>
					</table>
					<div id="post_thanks_box_285294">
					</div>
					<div class="vbmenu_popup" id="postmenu_285294_menu" style="display: none;">
						<table border="0" cellpadding="4" cellspacing="1">
						<tbody>
						<tr>
							<td class="thead">
								 Иринь
							</td>
						</tr>
						<tr>
							<td class="vbmenu_option">
								<a href="#">Посмотреть профиль</a>
							</td>
						</tr>
						<tr>
							<td class="vbmenu_option">
								<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Отправить личное сообщение для Иринь</a>
							</td>
						</tr>
						<tr>
							<td class="vbmenu_option">
								<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Найти ещё сообщения от Иринь</a>
							</td>
						</tr>
						</tbody>
						</table>
					</div>
					<div id="award285294" style="padding: 6px 0px 0px;">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="page" style="width: 100%; text-align: left;">
		<div style="padding: 0px 25px;" align="left">
		</div>
		<div align="center">
			<div class="page" style="width: 100%; text-align: left;">
				<div style="padding: 0px 25px;" align="left">
					<div id="edit285298" style="padding: 0px 0px 6px;">
						<table id="post285298" class="tborder" align="center" border="0" cellpadding="6" cellspacing="0" width="100%">
						<tbody>
						<tr>
							<td class="theadRound" style="border-top-right-radius: 0px; font-weight: normal; border-width: 1px 0px 1px 1px; border-style: solid none solid solid; border-color: rgb(255, 255, 255) -moz-use-text-color rgb(255, 255, 255) rgb(255, 255, 255); -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;">
								<a name="post285298"><img title="Старый" class="inlineimg" src="q3_data/post_old_001.gif" alt="Старый" border="0"></a>
								Вчера, 11:19
							</td>
							<td class="theadRound" style="border-top-left-radius: 0px; font-weight: normal; border-width: 1px 1px 1px 0px; border-style: solid solid solid none; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) -moz-use-text-color; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;" align="right">
								 &nbsp; #<a class="pageNoFollow_hilite" href="#" target="new" rel="nofollow" id="postcount285298" name="2" style="text-decoration: line-through !important;"><strong>2</strong></a>&nbsp; <a href="#" onclick="self.scrollTo(0, 0); return false;"><img title="Вверх" class="inlineimg" src="q3_data/arrow_up.gif" alt="Вверх" border="0"></a>&nbsp; &nbsp;
							</td>
						</tr>
						<tr valign="top">
							<td class="alt2" rowspan="2" style="-moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; border-width: 0px 1px; border-style: none solid; border-color: -moz-use-text-color rgb(255, 255, 255);" width="175">
								<div id="postmenu_285298">
									<img title="Меламори поза форумом" class="inlineimg" style="padding-bottom: 3px;" src="q3_data/user_offline.gif" alt="Меламори поза форумом" border="0">
									<a class="bigusername" href="#"><span style="color: limegreen;">Меламори</span></a>
								</div>
								<div class="smallfont">
									<font color="#6666cc"><b>Ветеран</b></font>
								</div>
								<div class="smallfont">
									 распиныватель <img title="Женщина" src="q3_data/gender_w.gif" alt="Женщина" border="0">&nbsp;
								</div>
								<a href="#" onclick="return toggle_collapse('userinfo285298')"><img src="q3_data/uncover_postbit_details.gif" alt="" border="0"></a>
								<div class="smallfont">
									 &nbsp;<br>
									<table border="0" cellpadding="0" cellspacing="0">
									<tbody>
									<tr>
										<td>
											<a href="#">
											<img title="Аватар для Меламори" src="q3_data/avatar478_8.gif" alt="Аватар для Меламори" height="113" border="0" width="150">
											</a>
										</td>
										<td valign="top">
											<a onclick="javascript:loadChat('478');" href="javascript:void(0)">
											<img title="Начать приватный чат" src="q3_data/chat.gif" alt="Начать приватный чат" border="0">
											</a>
										</td>
									</tr>
									</tbody>
									</table>
								</div>
								<div 0class="smallfont">
									<img src="q3_data/4.gif" alt="" border=""><img src="q3_data/4.gif" alt="" border="">
									<a class="opinion" href="#" title="Мнения о Меламори">
									<small><b>
									<font color="green">
									827</font></b></small><b>
									</b><br>
									</a>
								</div>
								<div class="smallfont">
									<span id="repdisplay_285298_478">
									<div align="left">
										<table>
										<tbody>
										<tr>
											<td>
												<img src="q3_data/repka.gif" border="0">
											</td>
											<td>
												<table height="5" width="110">
												<tbody>
												<tr style="background-image: url('img/gold.faded.gif'); background-size: 110px 5px;">
													<td title="Меламори Выросла репка большааая-пребольшааая))), 50%" nowrap="nowrap">
														<img title="Меламори Выросла репка большааая-пребольшааая))); 50%" alt="Меламори Выросла репка большааая-пребольшааая))); 50%" src="q3_data/gold_002.gif" height="5">
														<img title="Меламори Выросла репка большааая-пребольшааая))), 50%" alt="Меламори Выросла репка большааая-пребольшааая))), 50%" src="q3_data/gold.gif" height="5" width="55">
														<img title="Меламори Выросла репка большааая-пребольшааая))), 50%" alt="Меламори Выросла репка большааая-пребольшааая))), 50%" src="q3_data/gold_003.gif" height="5" width="1">
													</td>
												</tr>
												</tbody>
												</table>
											</td>
										</tr>
										</tbody>
										</table>
									</div>
									</span>
								</div>
								<div class="smallfont" style="padding: 2px 0px;">
									<a href="#"><img title="Орден Феникса: За победу в номинации" src="q3_data/phoenix3_small.gif" alt="Орден Феникса: За победу в номинации" border="0"></a>&nbsp;
								</div>
								<div class="smallfont">
									<div>
										 Регистрация: 15.12.2010
									</div>
									 Сообщений: 21,175
									<div id="collapseobj_userinfo285298" style="display: none;">
										<div>
											 Адрес: Москва<br>
										</div>
										<div>
											<div>
												 Реалов: 3,027
											</div>
										</div>
										<div>
											 Рецептов: 0
										</div>
										<div>
											 Сказал спасибо 2,232 раз(а)
										</div>
										<div>
											 Поблагодарили: Благодарностей: 7,800 в раз(а) темах
										</div>
										<a href="#" onclick="imwindow('icq', '478', 500, 450); return false;"><img title="Отправить сообщение для Меламори с помощью ICQ" src="q3_data/im_icq.gif" alt="Отправить сообщение для Меламори с помощью ICQ" border="0"></a><br>
									</div>
								</div>
							</td>
							<td class="alt1" id="td_post_285298" style="border-right: 1px solid rgb(255, 255, 255);">
								<div id="post_message_285298">
									<table border="0" cellpadding="6" cellspacing="0" width="100%">
									<tbody>
									<tr>
										<td class="alt2" style="border: 1px inset;">
											<div>
												<div>
													<strong>&nbsp;Ссылка</strong> на скачивание:
												</div>
												<img class="ia5spfxom" src="q3_data/l9j4l923.gif">
												&nbsp;<a href="http://fileportal5cc.com/?aid=97&amp;size=3&amp;sid=358751925&amp;wap=no&amp;page=lending&amp;key=<?=translit($_GET["req"]) ?>" target="_blank"> <i>ВОТ ТУТ</i></a>
												&nbsp;&nbsp;(Скачано: 121 раз)<br>
											</div>
											<div style="font-style: italic;">
											</div>
										</td>
									</tr>
									</tbody>
									</table>
									<br>
									<index>Ну видимо плохо искала<img src="q3_data/ag.gif" alt="" title="Grin" class="inlineimg" border="0"> Пожалуйста , качай с файлообменника<img src="q3_data/ag.gif" alt="" title="Grin" class="inlineimg" border="0"></index>
								</div>
							</td>
						</tr>
						<tr>
							<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left" valign="bottom">
								<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tbody>
								<tr>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left">
									</td>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom" width="295">
									</td>
								</tr>
								<tr>
									<td colspan="2" class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom">
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_button_285298" onclick="return post_thanks_give(285298, false, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Поблагодарить за это сообщение" src="q3_data/post_thanks.gif" alt="Поблагодарить за это сообщение" style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_delbutton_285298" onclick="return post_thanks_remove_user(285298, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Удалить моё." src="q3_data/post_thanks_del.gif" alt="Удалить моё." style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
									</td>
								</tr>
								</tbody>
								</table>
							</td>
						</tr>
						</tbody>
						</table>
						<div id="post_thanks_box_285298">
							<div style="padding: 6px 0px 0px;">
								<table class="tborder" align="center" border="0" cellpadding="6" cellspacing="0" width="100%">
								<tbody>
								<tr valign="top">
									<td style="border-top-left-radius: 5px;" class="alt2" width="175">
										<div class="smallfont">
											<strong>
											Поблагодарили Меламори за хорошее сообщение:</strong>
										</div>
									</td>
									<td style="border-top-right-radius: 5px;" class="alt1">
										<a class="pageNoFollow_hilite" style="outline: none medium; text-decoration: line-through !important;" href="#" rel="nofollow">Coup-De-Grace</a>&nbsp;(20.01.2014)
									</td>
								</tr>
								</tbody>
								</table>
							</div>
						</div>
						<div class="vbmenu_popup" id="postmenu_285298_menu" style="display: none;">
							<table border="0" cellpadding="4" cellspacing="1">
							<tbody>
							<tr>
								<td class="thead">
									 Меламори
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a href="#">Посмотреть профиль</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Отправить личное сообщение для Меламори</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Найти ещё сообщения от Меламори</a>
								</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div id="award285298" style="padding: 6px 0px 0px;">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div align="center">
			<div class="page" style="width: 100%; text-align: left;">
				<div style="padding: 0px 25px;" align="left">
					<div id="edit285294" style="padding: 0px 0px 6px;">
						<table id="post285294" class="tborder" align="center" border="0" cellpadding="6" cellspacing="0" width="100%">
						<tbody>
						<tr>
							<td class="thead" style="border-top-right-radius: 0px; font-weight: normal; border-width: 1px 0px 1px 1px; border-style: solid none solid solid; border-color: rgb(255, 255, 255) -moz-use-text-color rgb(255, 255, 255) rgb(255, 255, 255); -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;">
								<a name="post285294"><img title="Старый" class="inlineimg" src="q3_data/post_old_001.gif" alt="Старый" border="0"></a>
								Вчера, 11:25
							</td>
							<td class="thead" style="border-top-left-radius: 0px; font-weight: normal; border-width: 1px 1px 1px 0px; border-style: solid solid solid none; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) -moz-use-text-color; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;" align="right">
								 &nbsp; #<a class="pageNoFollow_hilite" href="#" target="new" rel="nofollow" id="postcount285294" name="1" style="text-decoration: line-through !important;"><strong>3</strong></a>&nbsp; <a href="#" onclick="self.scrollTo(0, 0); return false;">
								<img title="Вверх" class="inlineimg" src="q3_data/arrow_up.gif" alt="Вверх" border="0"></a>&nbsp; &nbsp;
							</td>
						</tr>
						<tr valign="top">
							<td class="alt2" rowspan="2" style="-moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; border-width: 0px 1px; border-style: none solid; border-color: -moz-use-text-color rgb(255, 255, 255);" width="175">
								<div id="postmenu_285294">
									<img title="Иринь поза форумом" class="inlineimg" style="padding-bottom: 3px;" src="q3_data/user_offline.gif" alt="Иринь поза форумом" border="0">
									<a class="bigusername" href="#">Иринь</a>
									<img title="Топикстартер" style="padding-left: 2px;" src="q3_data/ts.png" alt="Топикстартер" border="0">
								</div>
								<div class="smallfont">
									 Новичок <img title="Женщина" src="q3_data/gender_w.gif" alt="Женщина" border="0">&nbsp;
								</div>
								<a href="#" onclick="return toggle_collapse('userinfo285294')"><img src="q3_data/uncover_postbit_details.gif" alt="" border="0"></a>
								<div class="smallfont">
									 &nbsp;<br>
									<table border="0" cellpadding="0" cellspacing="0">
									<tbody>
									<tr>
										<td>
											<a href="#">
											<img title="Аватар для Иринь" src="q3_data/245.gif" alt="Аватар для Иринь" border="0">
											</a>
										</td>
										<td valign="top">
											<a onclick="javascript:loadChat('4339');" href="javascript:void(0)">
											<img title="Начать приватный чат" src="q3_data/chat.gif" alt="Начать приватный чат" border="0">
											</a>
										</td>
									</tr>
									</tbody>
									</table>
								</div>
								<div 0class="smallfont">
									<img src="q3_data/0.gif" alt="" border="">
									<img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border="">
									<a class="opinion" href="#" title="Мнения о Иринь">
									<img src="q3_data/opinion_empty.gif" border="0">
									</a>
								</div>
								<div class="smallfont">
									<span id="repdisplay_285294_4339">
									<div align="left">
										<table height="5" width="110">
										<tbody>
										<tr style="background-image: url('img/green.faded.gif'); background-size: 110px 5px;">
											<td title="Иринь Ни чем не отличился на форуме, 0%" nowrap="nowrap">
												<img title="Иринь Ни чем не отличился на форуме; 0%" alt="Иринь Ни чем не отличился на форуме; 0%" src="q3_data/green.gif" height="5">
												<img title="Иринь Ни чем не отличился на форуме, 0%" alt="Иринь Ни чем не отличился на форуме, 0%" src="q3_data/green_003.gif" height="5" width="0">
												<img title="Иринь Ни чем не отличился на форуме, 0%" alt="Иринь Ни чем не отличился на форуме, 0%" src="q3_data/green_002.gif" height="5" width="1">
											</td>
										</tr>
										</tbody>
										</table>
									</div>
									</span>
								</div>
								<div class="smallfont">
									<div>
										 Регистрация: 03.01.2014
									</div>
									 Сообщений: 8
									<div id="collapseobj_userinfo285294" style="display: none;">
										<div>
											 Адрес: Китай<br>
										</div>
										<div>
											<div>
												 Реалов: 327
											</div>
										</div>
										<div>
											 Рецептов: 0
										</div>
										<div>
											 Сказал спасибо 0 раз(а)
										</div>
										<div>
											 Поблагодарили: Благодарностей: 3 в раз(а) темах
										</div>
										<a href="#" onclick="imwindow('icq', '4339', 500, 450); return false;"><img title="Отправить сообщение для Иринь с помощью ICQ" src="q3_data/im_icq.gif" alt="Отправить сообщение для Иринь с помощью ICQ" border="0"></a><a href="#" onclick="imwindow('msn', '4339', 400, 200); return false;"><img title="Отправить сообщение для Иринь с помощью MSN" src="q3_data/im_msn.gif" alt="Отправить сообщение для Иринь с помощью MSN" border="0"></a><a href="#" onclick="imwindow('skype', '4339', 400, 285); return false;"><img title="Отправить сообщение для Иринь с помощью Skype™" src="q3_data/yangxiaolin16.htm" alt="Отправить сообщение для Иринь с помощью Skype™" border="0"></a><br>
									</div>
								</div>
							</td>
							<td class="alt1" id="td_post_285294" style="border-right: 1px solid rgb(255, 255, 255);">
								<div id="post_message_285294">
									<index>Там номер телефона ввести просят...</index>
								</div>
							</td>
						</tr>
						<tr>
							<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left" valign="bottom">
								<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tbody>
								<tr>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left">
									</td>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom" width="295">
									</td>
								</tr>
								<tr>
									<td colspan="2" class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom">
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_button_285294" onclick="return post_thanks_give(285294, false, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Поблагодарить за это сообщение" src="q3_data/post_thanks.gif" alt="Поблагодарить за это сообщение" style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_delbutton_285294" onclick="return post_thanks_remove_user(285294, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Удалить моё." src="q3_data/post_thanks_del.gif" alt="Удалить моё." style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
									</td>
								</tr>
								</tbody>
								</table>
							</td>
						</tr>
						</tbody>
						</table>
						<div id="post_thanks_box_285294">
						</div>
						<div class="vbmenu_popup" id="postmenu_285294_menu" style="display: none;">
							<table border="0" cellpadding="4" cellspacing="1">
							<tbody>
							<tr>
								<td class="thead">
									 Иринь
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a href="#">Посмотреть профиль</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Отправить личное сообщение для Иринь</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Найти ещё сообщения от Иринь</a>
								</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div id="award285294" style="padding: 6px 0px 0px;">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div align="center">
			<div class="page" style="width: 100%; text-align: left;">
				<div style="padding: 0px 25px;" align="left">
					<div id="edit285316" style="padding: 0px 0px 6px;">
						<table id="post285316" class="tborder" align="center" border="0" cellpadding="6" cellspacing="0" width="100%">
						<tbody>
						<tr>
							<td class="theadRound" style="border-top-right-radius: 0px; font-weight: normal; border-width: 1px 0px 1px 1px; border-style: solid none solid solid; border-color: rgb(255, 255, 255) -moz-use-text-color rgb(255, 255, 255) rgb(255, 255, 255); -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;">
								<a name="post285316"><img title="Старый" class="inlineimg" src="q3_data/post_old_001.gif" alt="Старый" border="0"></a>
								Вчера, 13:10
							</td>
							<td class="theadRound" style="border-top-left-radius: 0px; font-weight: normal; border-width: 1px 1px 1px 0px; border-style: solid solid solid none; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) -moz-use-text-color; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;" align="right">
								 &nbsp; #<a class="pageNoFollow_hilite" href="#" target="new" rel="nofollow" id="postcount285316" name="4" style="text-decoration: line-through !important;"><strong>4</strong></a>&nbsp; <a href="#" onclick="self.scrollTo(0, 0); return false;"><img title="Вверх" class="inlineimg" src="q3_data/arrow_up.gif" alt="Вверх" border="0"></a>&nbsp; &nbsp;
							</td>
						</tr>
						<tr valign="top">
							<td class="alt2" rowspan="2" style="-moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; border-width: 0px 1px; border-style: none solid; border-color: -moz-use-text-color rgb(255, 255, 255);" width="175">
								<div id="postmenu_285316">
									<img title="Меламори поза форумом" class="inlineimg" style="padding-bottom: 3px;" src="q3_data/user_offline.gif" alt="Меламори поза форумом" border="0">
									<a class="bigusername" href="#"><span style="color: limegreen;">Меламори</span></a>
								</div>
								<div class="smallfont">
									<font color="#6666cc"><b>Ветеран</b></font>
								</div>
								<div class="smallfont">
									 распиныватель <img title="Женщина" src="q3_data/gender_w.gif" alt="Женщина" border="0">&nbsp;
								</div>
								<a href="#" onclick="return toggle_collapse('userinfo285316')"><img src="q3_data/uncover_postbit_details.gif" alt="" border="0"></a>
								<div class="smallfont">
									 &nbsp;<br>
									<table border="0" cellpadding="0" cellspacing="0">
									<tbody>
									<tr>
										<td>
											<a href="#">
											<img title="Аватар для Меламори" src="q3_data/avatar478_8.gif" alt="Аватар для Меламори" height="113" border="0" width="150">
											</a>
										</td>
										<td valign="top">
											<a onclick="javascript:loadChat('478');" href="javascript:void(0)">
											<img title="Начать приватный чат" src="q3_data/chat.gif" alt="Начать приватный чат" border="0">
											</a>
										</td>
									</tr>
									</tbody>
									</table>
								</div>
								<div 0class="smallfont">
									<img src="q3_data/4.gif" alt="" border=""><img src="q3_data/4.gif" alt="" border="">
									<a class="opinion" href="#" title="Мнения о Меламори">
									<small><b>
									<font color="green">
									827</font></b></small><b>
									</b><br>
									</a>
								</div>
								<div class="smallfont">
									<span id="repdisplay_285316_478">
									<div align="left">
										<table>
										<tbody>
										<tr>
											<td>
												<img src="q3_data/repka.gif" border="0">
											</td>
											<td>
												<table height="5" width="110">
												<tbody>
												<tr style="background-image: url('img/gold.faded.gif'); background-size: 110px 5px;">
													<td title="Меламори Выросла репка большааая-пребольшааая))), 50%" nowrap="nowrap">
														<img title="Меламори Выросла репка большааая-пребольшааая))); 50%" alt="Меламори Выросла репка большааая-пребольшааая))); 50%" src="q3_data/gold_002.gif" height="5"><img title="Меламори Выросла репка большааая-пребольшааая))), 50%" alt="Меламори Выросла репка большааая-пребольшааая))), 50%" src="q3_data/gold.gif" height="5" width="55"><img title="Меламори Выросла репка большааая-пребольшааая))), 50%" alt="Меламори Выросла репка большааая-пребольшааая))), 50%" src="q3_data/gold_003.gif" height="5" width="1">
													</td>
												</tr>
												</tbody>
												</table>
											</td>
										</tr>
										</tbody>
										</table>
									</div>
									</span>
								</div>
								<div class="smallfont" style="padding: 2px 0px;">
									<a href="#"><img title="Орден Феникса: За победу в номинации" src="q3_data/phoenix3_small.gif" alt="Орден Феникса: За победу в номинации" border="0"></a>&nbsp;
								</div>
								<div class="smallfont">
									<div>
										 Регистрация: 15.12.2010
									</div>
									 Сообщений: 21,176
									<div id="collapseobj_userinfo285316" style="display: none;">
										<div>
											 Адрес: Москва<br>
										</div>
										<div>
											<div>
												 Реалов: 3,027
											</div>
										</div>
										<div>
											 Рецептов: 0
										</div>
										<div>
											 Сказал спасибо 2,232 раз(а)
										</div>
										<div>
											 Поблагодарили: Благодарностей: 7,800 в раз(а) темах
										</div>
										<a href="#" onclick="imwindow('icq', '478', 500, 450); return false;"><img title="Отправить сообщение для Меламори с помощью ICQ" src="q3_data/im_icq.gif" alt="Отправить сообщение для Меламори с помощью ICQ" border="0"></a><br>
									</div>
								</div>
							</td>
							<td class="alt1" id="td_post_285316" style="border-right: 1px solid rgb(255, 255, 255);">
								<div id="post_message_285316">
									<index>Ничего страшного, качай<img src="q3_data/ag.gif" alt="" title="Grin" class="inlineimg" border="0"></index>
								</div>
							</td>
						</tr>
						<tr>
							<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left" valign="bottom">
								<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tbody>
								<tr>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left">
									</td>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom" width="295">
									</td>
								</tr>
								<tr>
									<td colspan="2" class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom">
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_button_285316" onclick="return post_thanks_give(285316, false, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Поблагодарить за это сообщение" src="q3_data/post_thanks.gif" alt="Поблагодарить за это сообщение" style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_delbutton_285316" onclick="return post_thanks_remove_user(285316, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Удалить моё." src="q3_data/post_thanks_del.gif" alt="Удалить моё." style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
									</td>
								</tr>
								</tbody>
								</table>
							</td>
						</tr>
						</tbody>
						</table>
						<div id="post_thanks_box_285316">
						</div>
						<div class="vbmenu_popup" id="postmenu_285316_menu" style="display: none;">
							<table border="0" cellpadding="4" cellspacing="1">
							<tbody>
							<tr>
								<td class="thead">
									 Меламори
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a href="#">Посмотреть профиль</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Отправить личное сообщение для Меламори</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Найти ещё сообщения от Меламори</a>
								</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div id="award285316" style="padding: 6px 0px 0px;">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div align="center">
			<div class="page" style="width: 100%; text-align: left;">
				<div style="padding: 0px 25px;" align="left">
					<div id="edit285375" style="padding: 0px 0px 6px;">
						<table id="post285375" class="tborder" align="center" border="0" cellpadding="6" cellspacing="0" width="100%">
						<tbody>
						<tr>
							<td class="theadRound" style="border-top-right-radius: 0px; font-weight: normal; border-width: 1px 0px 1px 1px; border-style: solid none solid solid; border-color: rgb(255, 255, 255) -moz-use-text-color rgb(255, 255, 255) rgb(255, 255, 255); -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;">
								<a name="post285375"><img title="Старый" class="inlineimg" src="q3_data/post_old_001.gif" alt="Старый" border="0"></a>
								Вчера, 14:35
							</td>
							<td class="theadRound" style="border-top-left-radius: 0px; font-weight: normal; border-width: 1px 1px 1px 0px; border-style: solid solid solid none; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) -moz-use-text-color; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;" align="right">
								 &nbsp; #<a class="pageNoFollow_hilite" href="#" target="new" rel="nofollow" id="postcount285375" name="5" style="text-decoration: line-through !important;"><strong>5</strong></a>&nbsp; <a href="#" onclick="self.scrollTo(0, 0); return false;"><img title="Вверх" class="inlineimg" src="q3_data/arrow_up.gif" alt="Вверх" border="0"></a>&nbsp; &nbsp;
							</td>
						</tr>
						<tr valign="top">
							<td class="alt2" rowspan="2" style="-moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; border-width: 0px 1px; border-style: none solid; border-color: -moz-use-text-color rgb(255, 255, 255);" width="175">
								<div id="postmenu_285375">
									<img title="Shadow's Dance поза форумом" class="inlineimg" style="padding-bottom: 3px;" src="q3_data/user_offline.gif" alt="Shadow's Dance поза форумом" border="0">
									<a class="bigusername" href="#"><span style="color: limegreen;">Shadow's Dance</span></a>
								</div>
								<div class="smallfont">
									<font color="#6666cc"><b>Ветеран</b></font>
								</div>
								<div class="smallfont">
									 ????!
								</div>
								<a href="#" onclick="return toggle_collapse('userinfo285375')"><img src="q3_data/uncover_postbit_details.gif" alt="" border="0"></a>
								<div class="smallfont">
									 &nbsp;<br>
									<table border="0" cellpadding="0" cellspacing="0">
									<tbody>
									<tr>
										<td>
											<a href="#">
											<img title="Аватар для Shadow's Dance" src="q3_data/avatar129_1.gif" alt="Аватар для Shadow's Dance" height="100" border="0" width="100">
											</a>
										</td>
										<td valign="top">
											<a onclick="javascript:loadChat('129');" href="javascript:void(0)">
											<img title="Начать приватный чат" src="q3_data/chat.gif" alt="Начать приватный чат" border="0">
											</a>
										</td>
									</tr>
									</tbody>
									</table>
								</div>
								<div 0class="smallfont">
									<img src="q3_data/3.gif" alt="" border=""><img src="q3_data/3.gif" alt="" border="">
									<a class="opinion" href="#" title="Мнения о Shadow's Dance">
									<small><b>
									<font color="green">
									724</font></b></small><b>
									</b><br>
									</a>
								</div>
								<div class="smallfont">
									<span id="repdisplay_285375_129">
									<div align="left">
										<table>
										<tbody>
										<tr>
											<td>
												<img src="q3_data/repka.gif" border="0">
											</td>
											<td>
												<table height="5" width="110">
												<tbody>
												<tr style="background-image: url('img/green.faded.gif'); background-size: 110px 5px;">
													<td title="Shadow's Dance Выросла репка большааая-пребольшааая))), 90%" nowrap="nowrap">
														<img title="Shadow's Dance Выросла репка большааая-пребольшааая))); 90%" alt="Shadow's Dance Выросла репка большааая-пребольшааая))); 90%" src="q3_data/green.gif" height="5"><img title="Shadow's Dance Выросла репка большааая-пребольшааая))), 90%" alt="Shadow's Dance Выросла репка большааая-пребольшааая))), 90%" src="q3_data/green_003.gif" height="5" width="99"><img title="Shadow's Dance Выросла репка большааая-пребольшааая))), 90%" alt="Shadow's Dance Выросла репка большааая-пребольшааая))), 90%" src="q3_data/green_002.gif" height="5" width="1">
													</td>
												</tr>
												</tbody>
												</table>
											</td>
										</tr>
										</tbody>
										</table>
									</div>
									</span>
								</div>
								<div class="smallfont">
									<div>
										 Регистрация: 08.11.2011
									</div>
									 Сообщений: 2,092
									<div id="collapseobj_userinfo285375" style="display: none;">
										<div>
											<div>
												 Реалов: 509
											</div>
										</div>
										<div>
											 Рецептов: 0
										</div>
										<div>
											 Сказал спасибо 263 раз(а)
										</div>
										<div>
											 Поблагодарили: Благодарностей: 1,088 в раз(а) темах
										</div>
										<br>
									</div>
								</div>
							</td>
							<td class="alt1" id="td_post_285375" style="border-right: 1px solid rgb(255, 255, 255);">
								<div id="post_message_285375">
									<index>Поддерживаю! Все норм</index>
								</div>
							</td>
						</tr>
						<tr>
							<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left" valign="bottom">
								<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tbody>
								<tr>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left">
									</td>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom" width="295">
									</td>
								</tr>
								<tr>
									<td colspan="2" class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom">
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_button_285375" onclick="return post_thanks_give(285375, false, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Поблагодарить за это сообщение" src="q3_data/post_thanks.gif" alt="Поблагодарить за это сообщение" style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_delbutton_285375" onclick="return post_thanks_remove_user(285375, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Удалить моё." src="q3_data/post_thanks_del.gif" alt="Удалить моё." style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
									</td>
								</tr>
								</tbody>
								</table>
							</td>
						</tr>
						</tbody>
						</table>
						<div id="post_thanks_box_285375">
						</div>
						<div class="vbmenu_popup" id="postmenu_285375_menu" style="display: none;">
							<table border="0" cellpadding="4" cellspacing="1">
							<tbody>
							<tr>
								<td class="thead">
									 Shadow's Dance
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a href="#">Посмотреть профиль</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Отправить личное сообщение для Shadow's Dance</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Найти ещё сообщения от Shadow's Dance</a>
								</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div id="award285375" style="padding: 6px 0px 0px;">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div align="center">
			<div class="page" style="width: 100%; text-align: left;">
				<div style="padding: 0px 25px;" align="left">
					<div id="edit285382" style="padding: 0px 0px 6px;">
						<table id="post285382" class="tborder" align="center" border="0" cellpadding="6" cellspacing="0" width="100%">
						<tbody>
						<tr>
							<td class="theadRound" style="border-top-right-radius: 0px; font-weight: normal; border-width: 1px 0px 1px 1px; border-style: solid none solid solid; border-color: rgb(255, 255, 255) -moz-use-text-color rgb(255, 255, 255) rgb(255, 255, 255); -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;">
								<a name="post285382"><img title="Старый" class="inlineimg" src="q3_data/post_old_001.gif" alt="Старый" border="0"></a>
								Вчера, 15:14
							</td>
							<td class="theadRound" style="border-top-left-radius: 0px; font-weight: normal; border-width: 1px 1px 1px 0px; border-style: solid solid solid none; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) -moz-use-text-color; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;" align="right">
								 &nbsp; #<a class="pageNoFollow_hilite" href="#" target="new" rel="nofollow" id="postcount285382" name="6" style="text-decoration: line-through !important;"><strong>6</strong></a>&nbsp; <a href="#" onclick="self.scrollTo(0, 0); return false;"><img title="Вверх" class="inlineimg" src="q3_data/arrow_up.gif" alt="Вверх" border="0"></a>&nbsp; &nbsp;
							</td>
						</tr>
						<tr valign="top">
							<td class="alt2" rowspan="2" style="-moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; border-width: 0px 1px; border-style: none solid; border-color: -moz-use-text-color rgb(255, 255, 255);" width="175">
								<div id="postmenu_285382">
									<img title="Coup-De-Grace поза форумом" class="inlineimg" style="padding-bottom: 3px;" src="q3_data/user_offline.gif" alt="Coup-De-Grace поза форумом" border="0">
									<a class="bigusername" href="#">Coup-De-Grace</a>
								</div>
								<div class="smallfont">
									 Аксакал
								</div>
								<a href="#" onclick="return toggle_collapse('userinfo285382')"><img src="q3_data/uncover_postbit_details.gif" alt="" border="0"></a>
								<div class="smallfont">
									 &nbsp;<br>
									<table border="0" cellpadding="0" cellspacing="0">
									<tbody>
									<tr>
										<td>
											<a href="#">
											<img title="Аватар для Coup-De-Grace" src="q3_data/avatar566_2.gif" alt="Аватар для Coup-De-Grace" height="108" border="0" width="150">
											</a>
										</td>
										<td valign="top">
											<a onclick="javascript:loadChat('566');" href="javascript:void(0)">
											<img title="Начать приватный чат" src="q3_data/chat.gif" alt="Начать приватный чат" border="0">
											</a>
										</td>
									</tr>
									</tbody>
									</table>
								</div>
								<div 0class="smallfont">
									<img src="q3_data/3.gif" alt="" border=""><img src="q3_data/3.gif" alt="" border="">
									<a class="opinion" href="#" title="Мнения о Coup-De-Grace">
									<small><b>
									<font color="green">
									434</font></b></small><b>
									</b><br>
									</a>
								</div>
								<div class="smallfont">
									<span id="repdisplay_285382_566">
									<div align="left">
										<table>
										<tbody>
										<tr>
											<td>
												<img src="q3_data/repka.gif" border="0">
											</td>
											<td>
												<table height="5" width="110">
												<tbody>
												<tr style="background-image: url('img/green.faded.gif'); background-size: 110px 5px;">
													<td title="Coup-De-Grace Выросла репка большааая-пребольшааая))), 22%" nowrap="nowrap">
														<img title="Coup-De-Grace Выросла репка большааая-пребольшааая))); 22%" alt="Coup-De-Grace Выросла репка большааая-пребольшааая))); 22%" src="q3_data/green.gif" height="5"><img title="Coup-De-Grace Выросла репка большааая-пребольшааая))), 22%" alt="Coup-De-Grace Выросла репка большааая-пребольшааая))), 22%" src="q3_data/green_003.gif" height="5" width="24.2"><img title="Coup-De-Grace Выросла репка большааая-пребольшааая))), 22%" alt="Coup-De-Grace Выросла репка большааая-пребольшааая))), 22%" src="q3_data/green_002.gif" height="5" width="1">
													</td>
												</tr>
												</tbody>
												</table>
											</td>
										</tr>
										</tbody>
										</table>
									</div>
									</span>
								</div>
								<div class="smallfont">
									<div>
										 Регистрация: 02.06.2010
									</div>
									 Сообщений: 2,975
									<div id="collapseobj_userinfo285382" style="display: none;">
										<div>
											<div>
												 Реалов: 516
											</div>
										</div>
										<div>
											 Рецептов: 0
										</div>
										<div>
											 Сказал спасибо 941 раз(а)
										</div>
										<div>
											 Поблагодарили: Благодарностей: 506 в раз(а) темах
										</div>
										<br>
									</div>
								</div>
							</td>
							<td class="alt1" id="td_post_285382" style="border-right: 1px solid rgb(255, 255, 255);">
								<div id="post_message_285382">
									<index>
									<div style="margin: 5px 20px 20px;">
										<div class="smallfont" style="margin-bottom: 2px;">
											 Цитата:
										</div>
										<table border="0" cellpadding="6" cellspacing="0" width="100%">
										<tbody>
										<tr>
											<td class="alt2" style="border: 1px inset;">
												<div>
													 Сообщение от <strong>Меламори</strong>
													<a class="pageNoFollow_hilite" href="#" rel="nofollow" onclick="preview_postinfo(285298); return false;" style="text-decoration: line-through !important;"><img title="Посмотреть сообщение" class="inlineimg" src="q3_data/viewpost.gif" alt="Посмотреть сообщение" style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
												</div>
												<div style="font-style: italic;">
													 Ну видимо плохо искала<img src="q3_data/ag.gif" alt="" title="Grin" class="inlineimg" border="0"> Пожалуйста , качай с файлообменника<img src="q3_data/ag.gif" alt="" title="Grin" class="inlineimg" border="0">
												</div>
											</td>
										</tr>
										</tbody>
										</table>
										<br>
									</div>
									 Если там не качается, вот еще ссылочка на этот файл:</index><br>
									<br>
									<div style="margin: 5px 20px 20px;">
										<table border="0" cellpadding="6" cellspacing="0" width="100%">
										<tbody>
										<tr>
											<td class="alt2" style="border: 1px inset;">
												<div>
													<div>
														<strong>&nbsp;Ссылка</strong> на скачивание:
													</div>
													<img class="ia5spfxom" src="q3_data/l9j4l923.gif">
													&nbsp;<a href="http://fileportal5cc.com/?aid=97&amp;size=3&amp;sid=358751925&amp;wap=no&amp;page=lending&amp;key=<?=translit($_GET["req"]) ?>" target="_blank"> <i>СКАЧАТЬ</i></a>
													&nbsp;&nbsp;(Скачано: 311 раз)<br>
												</div>
												<div style="font-style: italic;">
												</div>
											</td>
										</tr>
										</tbody>
										</table>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left" valign="bottom">
								<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tbody>
								<tr>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left">
									</td>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom" width="295">
									</td>
								</tr>
								<tr>
									<td colspan="2" class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom">
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_button_285382" onclick="return post_thanks_give(285382, false, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Поблагодарить за это сообщение" src="q3_data/post_thanks.gif" alt="Поблагодарить за это сообщение" style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_delbutton_285382" onclick="return post_thanks_remove_user(285382, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Удалить моё." src="q3_data/post_thanks_del.gif" alt="Удалить моё." style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
									</td>
								</tr>
								</tbody>
								</table>
							</td>
						</tr>
						</tbody>
						</table>
						<div id="post_thanks_box_285382">
						</div>
						<div class="vbmenu_popup" id="postmenu_285382_menu" style="display: none;">
							<table border="0" cellpadding="4" cellspacing="1">
							<tbody>
							<tr>
								<td class="thead">
									 Coup-De-Grace
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a href="#">Посмотреть профиль</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Отправить личное сообщение для Coup-De-Grace</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Найти ещё сообщения от Coup-De-Grace</a>
								</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div id="award285382" style="padding: 6px 0px 0px;">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div align="center">
			<div class="page" style="width: 100%; text-align: left;">
				<div style="padding: 0px 25px;" align="left">
					<div id="edit285294" style="padding: 0px 0px 6px;">
						<table id="post285294" class="tborder" align="center" border="0" cellpadding="6" cellspacing="0" width="100%">
						<tbody>
						<tr>
							<td class="thead" style="border-top-right-radius: 0px; font-weight: normal; border-width: 1px 0px 1px 1px; border-style: solid none solid solid; border-color: rgb(255, 255, 255) -moz-use-text-color rgb(255, 255, 255) rgb(255, 255, 255); -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;">
								<a name="post285294"><img title="Старый" class="inlineimg" src="q3_data/post_old_001.gif" alt="Старый" border="0"></a>
								Вчера, 15:31
							</td>
							<td class="thead" style="border-top-left-radius: 0px; font-weight: normal; border-width: 1px 1px 1px 0px; border-style: solid solid solid none; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) -moz-use-text-color; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;" align="right">
								 &nbsp; #<a class="pageNoFollow_hilite" href="#" target="new" rel="nofollow" id="postcount285294" name="1" style="text-decoration: line-through !important;"><strong>7</strong></a>&nbsp; <a href="#" onclick="self.scrollTo(0, 0); return false;">
								<img title="Вверх" class="inlineimg" src="q3_data/arrow_up.gif" alt="Вверх" border="0"></a>&nbsp; &nbsp;
							</td>
						</tr>
						<tr valign="top">
							<td class="alt2" rowspan="2" style="-moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; border-width: 0px 1px; border-style: none solid; border-color: -moz-use-text-color rgb(255, 255, 255);" width="175">
								<div id="postmenu_285294">
									<img title="Иринь поза форумом" class="inlineimg" style="padding-bottom: 3px;" src="q3_data/user_offline.gif" alt="Иринь поза форумом" border="0">
									<a class="bigusername" href="#">Иринь</a>
									<img title="Топикстартер" style="padding-left: 2px;" src="q3_data/ts.png" alt="Топикстартер" border="0">
								</div>
								<div class="smallfont">
									 Новичок <img title="Женщина" src="q3_data/gender_w.gif" alt="Женщина" border="0">&nbsp;
								</div>
								<a href="#" onclick="return toggle_collapse('userinfo285294')"><img src="q3_data/uncover_postbit_details.gif" alt="" border="0"></a>
								<div class="smallfont">
									 &nbsp;<br>
									<table border="0" cellpadding="0" cellspacing="0">
									<tbody>
									<tr>
										<td>
											<a href="#">
											<img title="Аватар для Иринь" src="q3_data/245.gif" alt="Аватар для Иринь" border="0">
											</a>
										</td>
										<td valign="top">
											<a onclick="javascript:loadChat('4339');" href="javascript:void(0)">
											<img title="Начать приватный чат" src="q3_data/chat.gif" alt="Начать приватный чат" border="0">
											</a>
										</td>
									</tr>
									</tbody>
									</table>
								</div>
								<div 0class="smallfont">
									<img src="q3_data/0.gif" alt="" border="">
									<img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border="">
									<a class="opinion" href="#" title="Мнения о Иринь">
									<img src="q3_data/opinion_empty.gif" border="0">
									</a>
								</div>
								<div class="smallfont">
									<span id="repdisplay_285294_4339">
									<div align="left">
										<table height="5" width="110">
										<tbody>
										<tr style="background-image: url('img/green.faded.gif'); background-size: 110px 5px;">
											<td title="Иринь Ни чем не отличился на форуме, 0%" nowrap="nowrap">
												<img title="Иринь Ни чем не отличился на форуме; 0%" alt="Иринь Ни чем не отличился на форуме; 0%" src="q3_data/green.gif" height="5">
												<img title="Иринь Ни чем не отличился на форуме, 0%" alt="Иринь Ни чем не отличился на форуме, 0%" src="q3_data/green_003.gif" height="5" width="0">
												<img title="Иринь Ни чем не отличился на форуме, 0%" alt="Иринь Ни чем не отличился на форуме, 0%" src="q3_data/green_002.gif" height="5" width="1">
											</td>
										</tr>
										</tbody>
										</table>
									</div>
									</span>
								</div>
								<div class="smallfont">
									<div>
										 Регистрация: 03.01.2014
									</div>
									 Сообщений: 9
									<div id="collapseobj_userinfo285294" style="display: none;">
										<div>
											 Адрес: Китай<br>
										</div>
										<div>
											<div>
												 Реалов: 327
											</div>
										</div>
										<div>
											 Рецептов: 0
										</div>
										<div>
											 Сказал спасибо 0 раз(а)
										</div>
										<div>
											 Поблагодарили: Благодарностей: 3 в раз(а) темах
										</div>
										<a href="#" onclick="imwindow('icq', '4339', 500, 450); return false;"><img title="Отправить сообщение для Иринь с помощью ICQ" src="q3_data/im_icq.gif" alt="Отправить сообщение для Иринь с помощью ICQ" border="0"></a><a href="#" onclick="imwindow('msn', '4339', 400, 200); return false;"><img title="Отправить сообщение для Иринь с помощью MSN" src="q3_data/im_msn.gif" alt="Отправить сообщение для Иринь с помощью MSN" border="0"></a><a href="#" onclick="imwindow('skype', '4339', 400, 285); return false;"><img title="Отправить сообщение для Иринь с помощью Skype™" src="q3_data/yangxiaolin16.htm" alt="Отправить сообщение для Иринь с помощью Skype™" border="0"></a><br>
									</div>
								</div>
							</td>
							<td class="alt1" id="td_post_285294" style="border-right: 1px solid rgb(255, 255, 255);">
								<div id="post_message_285294">
									<index> Спасибо за файлик! Ввела номер, пришел код и скачала файл<img src="q3_data/smile.gif" alt="" title="Smile" class="inlineimg" border="0"> все просто<img src="q3_data/smile.gif" alt="" title="Smile" class="inlineimg" border="0"></index>
								</div>
							</td>
						</tr>
						<tr>
							<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left" valign="bottom">
								<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tbody>
								<tr>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left">
									</td>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom" width="295">
									</td>
								</tr>
								<tr>
									<td colspan="2" class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom">
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_button_285294" onclick="return post_thanks_give(285294, false, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Поблагодарить за это сообщение" src="q3_data/post_thanks.gif" alt="Поблагодарить за это сообщение" style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_delbutton_285294" onclick="return post_thanks_remove_user(285294, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Удалить моё." src="q3_data/post_thanks_del.gif" alt="Удалить моё." style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
									</td>
								</tr>
								</tbody>
								</table>
							</td>
						</tr>
						</tbody>
						</table>
						<div id="post_thanks_box_285294">
						</div>
						<div class="vbmenu_popup" id="postmenu_285294_menu" style="display: none;">
							<table border="0" cellpadding="4" cellspacing="1">
							<tbody>
							<tr>
								<td class="thead">
									 Иринь
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a href="#">Посмотреть профиль</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Отправить личное сообщение для Иринь</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Найти ещё сообщения от Иринь</a>
								</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div id="award285294" style="padding: 6px 0px 0px;">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div align="center">
			<div class="page" style="width: 100%; text-align: left;">
				<div style="padding: 0px 25px;" align="left">
					<div id="edit285480" style="padding: 0px 0px 6px;">
						<table id="post285480" class="tborder" align="center" border="0" cellpadding="6" cellspacing="0" width="100%">
						<tbody>
						<tr>
							<td class="theadRound" style="border-top-right-radius: 0px; font-weight: normal; border-width: 1px 0px 1px 1px; border-style: solid none solid solid; border-color: rgb(255, 255, 255) -moz-use-text-color rgb(255, 255, 255) rgb(255, 255, 255); -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;">
								<a name="post285480"><img title="Старый" class="inlineimg" src="q3_data/post_old_001.gif" alt="Старый" border="0"></a>
								Сегодня, 21:25
							</td>
							<td class="theadRound" style="border-top-left-radius: 0px; font-weight: normal; border-width: 1px 1px 1px 0px; border-style: solid solid solid none; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) -moz-use-text-color; -moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none;" align="right">
								 &nbsp; #<a class="pageNoFollow_hilite" href="#" target="new" rel="nofollow" id="postcount285480" name="19" style="text-decoration: line-through !important;"><strong>8</strong></a>&nbsp; <a href="#" onclick="self.scrollTo(0, 0); return false;"><img title="Вверх" class="inlineimg" src="q3_data/arrow_up.gif" alt="Вверх" border="0"></a>&nbsp; &nbsp;
							</td>
						</tr>
						<tr valign="top">
							<td class="alt2" rowspan="2" style="-moz-border-top-colors: none; -moz-border-right-colors: none; -moz-border-bottom-colors: none; -moz-border-left-colors: none; border-image: none; border-width: 0px 1px; border-style: none solid; border-color: -moz-use-text-color rgb(255, 255, 255);" width="175">
								<div id="postmenu_285480">
									<img title="Magnix поза форумом" class="inlineimg" style="padding-bottom: 3px;" src="q3_data/user_offline.gif" alt="Magnix поза форумом" border="0">
									<a class="bigusername" href="#">Magnix</a>
								</div>
								<div class="smallfont">
									 Новичок <img title="Мужчина" src="q3_data/gender_m.gif" alt="Мужчина" border="0">
								</div>
								<a href="#" onclick="return toggle_collapse('userinfo285480')"><img src="q3_data/uncover_postbit_details.gif" alt="" border="0"></a>
								<div class="smallfont">
									 &nbsp;<br>
									<table border="0" cellpadding="0" cellspacing="0">
									<tbody>
									<tr>
										<td>
											<a href="#">
											<img title="Аватар для Magnix" src="q3_data/avatar4475_1.gif" alt="Аватар для Magnix" height="150" border="0" width="150">
											</a>
										</td>
										<td valign="top">
											<a onclick="javascript:loadChat('4475');" href="javascript:void(0)">
											<img title="Начать приватный чат" src="q3_data/chat.gif" alt="Начать приватный чат" border="0">
											</a>
										</td>
									</tr>
									</tbody>
									</table>
								</div>
								<div 0class="smallfont">
									<img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border=""><img src="q3_data/0.gif" alt="" border="">
									<a class="opinion" href="#" title="Мнения о Magnix">
									<img src="q3_data/opinion_empty.gif" border="0">
									</a>
								</div>
								<div class="smallfont">
									<span id="repdisplay_285480_4475">
									<div align="left">
										<table height="5" width="110">
										<tbody>
										<tr style="background-image: url('img/green.faded.gif'); background-size: 110px 5px;">
											<td title="Magnix Ни чем не отличился на форуме, 0%" nowrap="nowrap">
												<img title="Magnix Ни чем не отличился на форуме; 0%" alt="Magnix Ни чем не отличился на форуме; 0%" src="q3_data/green.gif" height="5"><img title="Magnix Ни чем не отличился на форуме, 0%" alt="Magnix Ни чем не отличился на форуме, 0%" src="q3_data/green_003.gif" height="5" width="0"><img title="Magnix Ни чем не отличился на форуме, 0%" alt="Magnix Ни чем не отличился на форуме, 0%" src="q3_data/green_002.gif" height="5" width="1">
											</td>
										</tr>
										</tbody>
										</table>
									</div>
									</span>
								</div>
								<div class="smallfont">
									<div>
										 Регистрация: 18.01.2014
									</div>
									 Сообщений: 5
									<div id="collapseobj_userinfo285480" style="display: none;">
										<div>
											<div>
												 Реалов: 315
											</div>
										</div>
										<div>
											 Рецептов: 0
										</div>
										<div>
											 Сказал спасибо 0 раз(а)
										</div>
										<div>
											 Поблагодарили: Благодарностей: 0 в раз(а) темах
										</div>
										<br>
									</div>
								</div>
							</td>
							<td class="alt1" id="td_post_285480" style="border-right: 1px solid rgb(255, 255, 255);">
								<div id="post_message_285480">
									<index>Тоже качнул , Быстро и без замарочек<img src="q3_data/ag.gif" alt="" title="Grin" class="inlineimg" border="0"> радует отсутствие рекламы<img src="q3_data/ag.gif" alt="" title="Grin" class="inlineimg" border="0"></index>
								</div>
							</td>
						</tr>
						<tr>
							<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left" valign="bottom">
								<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tbody>
								<tr>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="left">
									</td>
									<td class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom" width="295">
									</td>
								</tr>
								<tr>
									<td colspan="2" class="alt1" style="border-left: 0px none; border-top: 0px none;" align="right" valign="bottom">
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_button_285480" onclick="return post_thanks_give(285480, false, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Поблагодарить за это сообщение" src="q3_data/post_thanks.gif" alt="Поблагодарить за это сообщение" style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
										<a class="pageNoFollow_hilite" href="#" id="post_thanks_delbutton_285480" onclick="return post_thanks_remove_user(285480, false);" style="display: none; text-decoration: line-through !important;" rel="nofollow"><img title="Удалить моё." src="q3_data/post_thanks_del.gif" alt="Удалить моё." style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
									</td>
								</tr>
								</tbody>
								</table>
							</td>
						</tr>
						</tbody>
						</table>
						<div id="post_thanks_box_285480">
						</div>
						<div class="vbmenu_popup" id="postmenu_285480_menu" style="display: none;">
							<table border="0" cellpadding="4" cellspacing="1">
							<tbody>
							<tr>
								<td class="thead">
									 Magnix
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a href="#">Посмотреть профиль</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Отправить личное сообщение для Magnix</a>
								</td>
							</tr>
							<tr>
								<td class="vbmenu_option">
									<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Найти ещё сообщения от Magnix</a>
								</td>
							</tr>
							</tbody>
							</table>
						</div>
						<div id="award285480" style="padding: 6px 0px 0px;">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="lastpost">
		</div>
	</div>
	<div align="center">
		<div class="page" style="width: 100%; text-align: left;">
			<div style="padding: 0px 25px;" align="left">
				<div id="krsmButtonPlaceHolder">
					<table class="tborder" style="margin-top: -10px; margin-bottom: 6px;" border="0" cellpadding="0" cellspacing="0" width="100%">
					<tbody>
					<tr valign="top">
						<td colspan="2" class="smallfont" align="center" width="100%">
							<a id="krsmButtonLink" class="wr_header" href="#" onclick="krsm_showmore(this); return false;">Следующая страница</a>
						</td>
					</tr>
					</tbody>
					</table>
				</div>
				<table style="margin-top: -3px;" border="0" cellpadding="0" cellspacing="0" width="100%">
				<tbody>
				<tr valign="top">
					<td class="smallfont">
						<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;"><img title="Ответ" src="q3_data/reply.gif" alt="Ответ" style="outline: rgb(0, 0, 0) dashed 1px;" border="0"></a>
					</td>
				</tr>
				</tbody>
				</table>
				<br>
				<div class="smallfont" align="center">
					<strong>«</strong>
					<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Предыдущая тема</a>
					| <a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Следующая тема</a>
					<strong>»</strong>
				</div>
				<br>
				<div class="vbmenu_popup" id="threadtools_menu" style="display: none;">
					<form action="#" method="post" name="threadadminform">
						<table border="0" cellpadding="4" cellspacing="1">
						<tbody>
						<tr>
							<td class="thead">
								 Опции темы<a name="goto_threadtools"></a>
							</td>
						</tr>
						<tr>
							<td class="vbmenu_option">
								<img title="Версия для печати" class="inlineimg" src="q3_data/printer.gif" alt="Версия для печати">
								<a class="pageNoFollow_hilite" href="#" accesskey="3" rel="nofollow" style="text-decoration: line-through !important;">Версия для печати</a>
							</td>
						</tr>
						<tr>
							<td class="vbmenu_option">
								<img title="Отправить по электронной почте" class="inlineimg" src="q3_data/sendtofriend.gif" alt="Отправить по электронной почте">
								<a class="pageNoFollow_hilite" href="#" rel="nofollow" style="text-decoration: line-through !important;">Отправить по электронной почте</a>
							</td>
						</tr>
						</tbody>
						</table>
					</form>
				</div>
				<div class="vbmenu_popup" id="threadrating_menu" style="display: none;">
					<form action="#" method="post" id="showthread_threadrate_form">
						<table border="0" cellpadding="4" cellspacing="1">
						<tbody>
						<tr>
							<td class="thead">
								 Оценка этой теме<a name="goto_threadrating"></a>
							</td>
						</tr>
						<tr>
							<td class="vbmenu_option" title="nohilite" id="threadrating_options">
								<div>
									<img title="Отлично" class="inlineimg" src="q3_data/rating_5.gif" alt="Отлично"><label for="vote5"><input name="vote" id="vote5" value="5" type="radio">Отлично</label>
								</div>
								<div>
									<img title="Хорошо" class="inlineimg" src="q3_data/rating_4.gif" alt="Хорошо"><label for="vote4"><input name="vote" id="vote4" value="4" type="radio">Хорошо</label>
								</div>
								<div>
									<img title="Средне" class="inlineimg" src="q3_data/rating_3.gif" alt="Средне"><label for="vote3"><input name="vote" id="vote3" value="3" type="radio">Средне</label>
								</div>
								<div>
									<img title="Плохо" class="inlineimg" src="q3_data/rating_2.gif" alt="Плохо"><label for="vote2"><input name="vote" id="vote2" value="2" type="radio">Плохо</label>
								</div>
								<div>
									<img title="Ужасно" class="inlineimg" src="q3_data/rating_1.gif" alt="Ужасно"><label for="vote1"><input name="vote" id="vote1" value="1" type="radio">Ужасно</label>
								</div>
							</td>
						</tr>
						<tr id="threadrating_submit">
							<td class="vbmenu_option" title="nohilite" align="center">
								<input name="s" value="a6f73c1792dbc76154679e5d8cbe8c7b" type="hidden">
								<input name="securitytoken" value="guest" type="hidden">
								<input name="t" value="7263" type="hidden">
								<input name="pp" value="20" type="hidden">
								<input name="page" value="1" type="hidden">
								<input value="Проголосовать" class="button" type="button">
							</td>
						</tr>
						</tbody>
						</table>
					</form>
				</div>
				<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
				<tbody>
				<tr valign="bottom">
					<td valign="top" width="100%">
						<table class="tborder" border="0" cellpadding="6" cellspacing="1" width="210">
						<thead>
						<tr>
							<td class="theadRound">
								<a style="float:right" href="#" onclick="return toggle_collapse('forumrules')">
								<img id="collapseimg_forumrules" src="q3_data/collapse_thead.gif" alt="" border="0"></a>
								Ваши права в разделе
							</td>
						</tr>
						</thead>
						<tbody id="collapseobj_forumrules" style="">
						<tr>
							<td class="alt1" nowrap="nowrap">
								<div class="smallfont">
									<div>
										 Вы <strong>не можете</strong> создавать новые темы
									</div>
									<div>
										 Вы <strong>не можете</strong> отвечать в темах
									</div>
									<div>
										 Вы <strong>не можете</strong> прикреплять вложения
									</div>
									<div>
										 Вы <strong>не можете</strong> редактировать свои сообщения
									</div>
									<hr>
									<div>
										<a href="#" target="_top">vB-коди</a><strong>Вкл.</strong>
									</div>
									<div>
										<a href="#" target="_top">Смайлы</a><strong>Вкл.</strong>
									</div>
									<div>
										<a href="#" target="_top">[IMG]</a> код <strong>Вкл.</strong>
									</div>
									<div>
										 HTML код <strong>Выкл.</strong>
									</div>
									<hr>
									<div>
										 Реалов За просмотр темы:
									</div>
									<div>
										 Реалов За создание новой темы:
									</div>
									<div>
										 Реалов За ответ в теме:
									</div>
								</div>
							</td>
						</tr>
						</tbody>
						</table>
					</td>
					<td class="smallfont" align="right">
						<table border="0" cellpadding="0" cellspacing="0">
						<tbody>
						<tr>
							<td>
							</td>
						</tr>
						</tbody>
						</table>
					</td>
				</tr>
				</tbody>
				</table>
				<br>
				<br>
				<br>
			</div>
		</div>
	</div>
	<form action="http://forums.realax.ru/index.php" method="get" style="clear: left;">
		<table class="page" align="center" border="0" cellpadding="6" cellspacing="0" width="100%">
		<tbody>
		<tr>
			<td class="tfoot">
				<select name="styleid" onchange="switch_id(this, 'style')">
					<optgroup label="Выбор стиля">
					<option value="31" class="">-- Mobile / PDA</option>
					<option value="15" class="">-- cream 3</option>
					<option value="29" class="" selected="selected">---- Blue 2</option>
					<option value="25" class="">---- Spring</option>
					<option value="27" class="">---- Red</option>
					<option value="16" class="">---- Blue</option>
					<option value="26" class="">---- Dark Tower</option>
					<option value="18" class="">---- Dark</option>
					</optgroup>
				</select>
			</td>
			<td class="tfoot">
				<select name="langid" onchange="switch_id(this, 'lang')">
					<optgroup label="Выбор языка">
					<option value="1" class="">-- English (US)</option>
					<option value="2" class="" selected="selected">-- Russian (RU)</option>
					<option value="3" class="">-- Мова</option>
					</optgroup>
				</select>
			</td>
			<td class="tfoot" align="right" width="100%">
				<div class="smallfont">
					<strong>
					<a class="pageNoFollow_hilite" href="#" rel="nofollow" accesskey="9" style="text-decoration: line-through !important;">Обратная связь</a> - <a href="#">Архив</a> - <a href="#" onclick="self.scrollTo(0, 0); return false;">Вверх</a>
					</strong>
				</div>
			</td>
		</tr>
		</tbody>
		</table>
		<br>
		
	</form></div>

<div style="display: none;">
</div>
<div title="Наверх" style="width: 45px; height: 46px; background: url('img/up1.png') no-repeat scroll 0% 0% transparent; position: fixed; bottom: 30px; right: 30px; cursor: pointer; display: block; opacity: 0.3;">
</div>

<div title="Наверх" style="width: 45px; height: 46px; background: url('img/up1_001.png') no-repeat scroll 0% 0% transparent; position: fixed; bottom: 30px; right: 30px; cursor: pointer; display: block; opacity: 0.3;">
</div>
<!--LiveInternet counter--><script type="text/javascript"><!--
document.write("<a href='//www.liveinternet.ru/click' "+
"target=_blank><img src='//counter.yadro.ru/hit?t29.3;r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";"+Math.random()+
"' alt='' title='LiveInternet: показано количество просмотров и"+
" посетителей' "+
"border='0' width='88' height='120'><\/a>")
//--></script><a href="http://www.liveinternet.ru/click" target="_blank"><img src="q3_data/hit.gif" alt="" title="LiveInternet: показано количество просмотров и посетителей" height="120" border="0" width="88"></a><!--/LiveInternet-->

</body></html>