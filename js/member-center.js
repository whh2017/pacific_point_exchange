$(document).ready(function() {
	/* 商品数量增删操作 */
	$('.list-ul .item-3').on("click",".add",function(){
		var val = $(this).siblings(".num").val();
		val++;
		var unit_price = $(this).parent().parent('.item-3').siblings('.item-2').find('p').find('span').html();
		var total = (val * unit_price).toFixed(2);
		$(this).siblings(".num").val(val);
		$(this).parent().parent('.item-3').siblings('.item-4').find('p').find('span').html(total);
		calcAllPrice();
	});

	$('.list-ul .item-3').on("keyup",".num",function(){
		var val = $(this).val();
		if(val <= 0){
			val = 1;
		}
		var unit_price = $(this).parent().parent('.item-3').siblings('.item-2').find('p').find('span').html();
		var total = (val * unit_price).toFixed(2);
		$(this).val(val);
		$(this).parent().parent('.item-3').siblings('.item-4').find('p').find('span').html(total);
		this.value=this.value.replace(/[^0-9-]+/,'');
		calcAllPrice();
	});

	$('.list-ul .item-3').on("click",".les",function(){
		var val = $(this).siblings(".num").val();
		val--;
		if(val <= 0){
			val = 1;
		}
		var unit_price = $(this).parent().parent('.item-3').siblings('.item-2').find('p').find('span').html();
		var total = (val * unit_price).toFixed(2);
		$(this).siblings(".num").val(val);
		$(this).parent().parent('.item-3').siblings('.item-4').find('p').find('span').html(total);
		calcAllPrice();
	});

	/* 计算订单总价 */
	function calcAllPrice(){
		var allPrice = 0;
		var amount = 0;
		$('.list-ul .item-4').each(function(){
			allPrice += parseFloat($(this).find('p').find('span').html());
			amount++;
		});
		$('.big').html(allPrice.toFixed(2));
		$('.amount').html(amount);
	}

	/* 全选 */
	var flag = false;
	$("#all").click(function(){
		flag = !flag;
		$('.list-ul .item-1 input').attr("checked", flag)
	});

	/* 删除某商品 */
	$('.del').click(function(){
		$('.items').each(function(){
			console.log("进来了");
			if($(this).find('.item-1').find('input').attr("checked"))
			{
				$(this).remove();
				calcAllPrice();
			}
		});
	})
});