$(function(){
	//加的效果
	$(".product-add").click(function(){
		var n=$(this).prev().val();
		var num=parseInt(n)+1;
		if(num==99){ return;}
			$(this).prev().val(num);
		totalPrice();
	});
	//减的效果
	$(".product-jian").click(function(){
		var n=$(this).next().val();
		var num=parseInt(n)-1;
		if(num==0){ return;}
			$(this).next().val(num);
		totalPrice();
	});
	//选中
	$(".product-ckb").click(function(){
		$(this).children("em").toggleClass("product-xz");
		totalPrice();
		selectProduct();
	});
	//全选产品
	$(".product-al").click(function(){
		var fxk = $(".product-em");
		var qx = $(".product-all em");
		qx.toggleClass("product-all-on");
		if($(this).find(".product-all em").is(".product-all-on")){
			fxk.addClass("product-xz");
		}else{
			fxk.removeClass("product-xz");
		}
		totalPrice();
		count()
	});
	//删除产品
	$(".product-del").click(function(){
		if(confirm("您确定要删除当前商品？")){
			$(this).closest(".product-box").remove();
		}
		
		emptyCart();
		totalPrice();
		count();
	});
	
	
	totalPrice();
	count();
	emptyCart();
});
//选中产品
function selectProduct(){
	var xz=$(".product-em");
	var xz1=$(".product-xz");
	if(xz1.length==xz.length){
		$(".product-all em").addClass("product-all-on");
	}else{
		$(".product-all em").removeClass("product-all-on");
	}
	count();
	totalPrice();
	
}
//计算产品价格
function totalPrice(){
	//总价
	var total = 0;
	$(".product-em").each(function(){
		
		if($(this).is(".product-xz")){
			var price = parseInt($(this).parents(".product-ckb").siblings().find(".price").text());//得到产品单价
			var slproice = parseInt($(this).parents(".product-ckb").siblings().find(".product-num").val());//得到产品数量
			var dgtotal = price * slproice;
			total+=dgtotal;
		}
		$(".all-price").text(total.toFixed(2)); //输出全部总价
	});
	
}
//获取选择产品数量
function count(){
	$(".product-all-sl").text("");
	var cd = $(".product-xz").length;
	$(".product-all-sl").text(cd);
	
	if(cd>0){
		$(".product-all-qx").text("已选");
		$(".all-sl").css("display","inline-block");
		$(".product-sett").removeClass("product-sett-a");
	}else{
		$(".product-all-qx").text("全选");
		$(".all-sl").css("display","none");
		$(".product-sett").addClass("product-sett-a");
	}
}
//购物车空
function emptyCart(){
	var pic = $(".product-box").length;
	if(pic<=0){
		$(".all-price").text("0.00");
		$(".product-all-qx").text("全选");
		$(".all-sl").css("display","none");
		$(".product-sett").addClass("product-sett-a");
		$(".product-all em").removeClass("product-all-on");
		$(".kon-cat").css("display","block");
	}else{
		$(".kon-cat").css("display","none");
	}
}