$(function(){
    /* 全选和不选 */
    $('.allSel').change(function(){
        let bool = $(this).prop('checked');
        //将选中状态的值赋值给其他商品
        $('.sigSel').prop('checked',bool);
        allTotal();
    })
    /* 取消全选 */
    $('.sigSel').change(function(){
        //获取选中商品的个数
        let sellen = $('.sigSel:checked').length;
        //获取商品总个数
        let alllen = $('.sigSel').length;
        if(sellen == alllen){
            $('.allSel').prop('checked',true)
        }else{
            $('.allSel').prop('checked',false)
        }
        allTotal();
    })
    

    /* 增加商品 */
    $('.addNum').click(function(){
        //获取当前商品的数量
        let num = $(this).siblings('.proNum').val();
        $(this).siblings('.proNum').val(++num);

        allTotal();
    })

    /* 减少商品 */
    $('.reNum').click(function(){
        //获取当前商品的数量
        let num = $(this).siblings('.proNum').val();
        if(num == 1){
            return 1;
        }else{
            $(this).siblings('.proNum').val(--num);
        }


        allTotal();
        
    })


    /* 计算商品的总数量和总价 */
    function allTotal(){
        //定义变量保存商品总数量
        let allNum = 0;
        //定义变量保存商品总价格
        let allPrice = 0;

        //遍历选中商品的dom节点
        $('.sigSel:checked').each(function(index,dom){
            //获取商品的数量
            let proNum = parseInt($(dom).closest('li').find('.proNum').val());

            //总价格 = 数量*选中当前商品的价格
            //选中当前商品的价格
            let price = parseFloat($(dom).closest('li').find('.price').text());     
             let allTotal = parseFloat((proNum*price).toFixed(2));
            //总数量
            allNum+=proNum;
            //
            allPrice+=allTotal;

            //得到总数量渲染到页面
            $('.allNum').text(allNum)
            //
            $('.allPrice').text(allPrice)
        })
            
        
    }

    /*  小计 */
    /* function subPrice(obj,proNum){
        let subTotal = parseFloat($(obj).closest('.reAdd').siblings('.price').text())
        //渲染进去
        $(obj).closest('.reAdd').siblings('.sprice').text((subTotal * proNum).toFixed(2))            
    } */
})