$(function(){
    /* 隐藏，显现效果 */
    $(".t_img").click(function(){
        $("#sbox").show("slow");
 });
 $("#hide").click(function(){
        $("#sbox").hide("slow");
 });
 $("#close").click(function(){
        $("#sbox").hide("slow");
 });
/*  选定图像获取图像src值 */
var $t_img = document.getElementById('t_img');
var $img = $t_img.getElementsByTagName('img');
var index = 0;
for(var i = 0; i<$img.length;i++){
$img[i].index=i;
$img[i].onclick = function(){
   $img[index].style.borderRadius="15%";
   $img[index].style.border="none"
   this.style.borderRadius="50%";
   this.style.border="1px solid red"
   index = this.index;
   var $newsrc = $img[index].src;
   $(".t_img").attr('src',$newsrc);
}
}
//点击确认修改按钮更换头像
$("#but").click(function(){
$("#sbox").hide("slow");
})

//讲选中的图片替换头像的图片
$("#file0").change(function(){
var objUrl = getObjectURL(this.files[0]) ;  
if (objUrl) {  
$(".t_img").attr("src", objUrl) ;  
}  
}) ;  
//创建一个可存取到该file的url  
function getObjectURL(file) {  
var url = null ;  
// 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已  
if (window.createObjectURL!=undefined) { // basic  
url = window.createObjectURL(file) ;  
} else if (window.URL!=undefined) { // mozilla(firefox)  
url = window.URL.createObjectURL(file) ;  
} else if (window.webkitURL!=undefined) { // webkit or chrome  
url = window.webkitURL.createObjectURL(file) ;  
}  
return url ;  
}  
})