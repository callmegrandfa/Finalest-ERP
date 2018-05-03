
export function show(){
	
}
export function getHeight(){
	$(".tree-container").css({
        height:parseInt($('.bg-white').css('height'))-48+'px'
    })
    $(".border-left").css({
        height:$('.bg-white').css('height')
    })
}
export function buttonStaute(){//按钮状态控制

}

export function GetDateTime(){
	let date=new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}