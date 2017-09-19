
/* 设置遮罩层 */
function MaskIt(obj){
	var hoverdiv = '<div class="div-mask" style="position: fixed; width: 100%; height: 100%; left: 0; top: 0; background-color: #000; opacity: .8 ;z-index:5; filter:Alpha(Opacity=80);"></div>';

	$(obj).before(hoverdiv);
	$(obj).data("mask",true);
}

/* 取消遮罩层 */
function UnMaskIt(obj){
	if($(obj).data("mask")==true){
		$(obj).parent().find(".div-mask").remove();

		$(obj).data("mask",false);
	}
	$(obj).data("mask",false);
}

/* 窗口垂直水平居中 */
function popup(popupName){ 
	var _scrollHeight = $(document).scrollTop(),//获取当前窗口距离页面顶部高度 
		_windowHeight = $(window).height(),//获取当前窗口高度 
		_windowWidth = $(window).width(),//获取当前窗口宽度 
		_popupHeight = popupName.height(),//获取弹出层高度 
		_popupWeight = popupName.width();//获取弹出层宽度 
		_posiTop = (_windowHeight - _popupHeight)/2 + _scrollHeight; 
		_posiLeft = (_windowWidth - _popupWeight)/2; 
		popupName.css({"left": _posiLeft + "px","top":_posiTop + "px"});//设置position 
	} 