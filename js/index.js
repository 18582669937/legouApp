$(function(){
   //banner
  new Swiper('.swiper1', {
    loop: true, // 循环模式选项
    autoplay:{  
      delay: 2000,//1秒切换一次
      disableOnInteraction: false,//触摸之后不停止
    },
    // 分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })
  //内容导航
  new Swiper('.swiper2', {
    loop: true, // 循环模式选项
    autoplay:{
      delay: 3000,//1秒切换一次
    
    },
    // 分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })
  //乐购快报
  new Swiper('.swiper3', {
    direction: 'vertical',// 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:{
      delay: 3000,//1秒切换一次
      disableOnInteraction: false,//触摸之后不停止
    }
   
  })

 //搜索框获取焦点跳转到搜索页面
 $('input[type="search"]').focus(function(){
   location.href="search.html"
 })



  //底部类名切换
  $('footer div a').click(function(){
    //$(this).closest('div').find('p').removeClass('active');
    $(this).find('p').addClass('active').closest('div').siblings().find('p').removeClass('active')
  })


     //焦点聚焦到input上跳转到搜索页面
     $('input').focus(function(){
      window.location.href="search.html"
  })

})