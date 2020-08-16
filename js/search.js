$(function(){
  
    //给按钮
    $('#kw-btn').click(function(){
      //获取搜索框的值
      let kw = $('#kw').val();
      if(!kw) return false;
      //先去本地存储拿值
      let kwList = localStorage.getItem('kwList')
      if(kwList){
          //有值的时候转为数组存到arr里面
          let arr = JSON.parse(kwList)
          //向数组里追加输入框里的值
          arr.unshift(kw)//放在数组前面
          localStorage.setItem("kwList",JSON.stringify(arr));
      }else{
          //没有值
          let arr = [kw];
          localStorage.setItem('kwList',JSON.stringify(arr));
      }
     /*  //渲染到页面
      $('.search-list').prepend(`<li>${kw}</li>`);  */

      //点击搜索按钮执行一次getKwList（）函数，如果没有，则渲染不到页面
      getKwList();
    });

    //窗口加载时调用一次函数，使其本地存储的数据渲染到页面   打开页面时就有历史纪录
   getKwList();
    //渲染搜索记录函数
    function getKwList(){
        //先去本地存储拿取值
        let kwList = localStorage.getItem('kwList');
        if(!kwList) return false;
        //把字符串转为数组
        let data = JSON.parse(kwList);
        let resHtml = "";
        for(let i=0;i<data.length;i++){
            resHtml+=`<li>${data[i]}</li>`;
        }
        //渲染到页面
        $(".search-list").html(resHtml);
    }
    //删除搜索记录
    $("#delete").click(function(){
        if(confirm("您确定要删除记录吗？")){
            localStorage.removeItem('kwList');
            //情况之前渲染的页面数据
            $('.search-list').html("");
        }
    })
    
}) 


/* window.onload = function(){
    let back = document.querySelector('#back');
    back.addEventListener('click',function(){
        history.go(-1);
    })
} */

