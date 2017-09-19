$(document).ready(function() {
	/* 关闭登录或注册界面 */
	$('.register-form .close').click(function(){
		UnMaskIt($('.mask'));
		$('body').css("overflow","auto");
		$('#register-form').addClass("hide");
		$('#login-form').addClass("hide");
	});

	/* 弹出登录或注册界面 */
	$('.user-operate').on("click","li",function(){
		MaskIt($('.mask'));
		var index = $(this).index();
		$('body').css("overflow","hidden");
		if(index == 0){
			popup($('#login-form'));
			$('#login-form').removeClass("hide");	
		}
		else{
			popup($('#register-form'));
			$('#register-form').removeClass("hide");			
		}
	});

	/* 切换登录方式 */
	$('.register-form .tt').on("click","span",function(){
		var index = $(this).index();
		$('.tt span').removeClass("cur");
		$(this).addClass("cur");
		if(index == 0){
			$('.user-login').removeClass("hide");
			$('.commer-login').addClass("hide");
		}
		else{
			$('.commer-login').removeClass("hide");
			$('.user-login').addClass("hide");			
		}
	});
});
