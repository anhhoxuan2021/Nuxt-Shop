
function cart(){
}
cart.NAME         = "cart";
cart.VERSION      = "1.2";
cart.DESCRIPTION  = "Class cart";

cart.prototype.constructor = cart;
cart.prototype = {
    init: function(){
        $('#p-cart').on('click','.minus-prduct-btn',function(){
            var amount = parseInt($(this).closest('.closest-btn-action').find('.amount-prduct').val());
            if(amount >0) {
                amount--
                $(this).closest('.closest-btn-action').find('.amount-prduct').val(amount)
                common.prototype.removeProdductInCart($(this))
                crt.amountOfMoney()
            }
        })
        /***************************************************/
        $('#p-cart').on('click','.plus-prduct-btn',function(){
            var amount = parseInt($(this).closest('.closest-btn-action').find('.amount-prduct').val());
            amount++
            $(this).closest('.closest-btn-action').find('.amount-prduct').val(amount)
            common.prototype.addtoCart($(this),true)
            crt.amountOfMoney()
        })

        /************************************************/
        $('#p-cart .btn-app-discount').unbind('click').bind('click',function(){
             var app_code = $(this).closest('.app-code').find('.discount-code').val()
            crt.checkDiscountCode(app_code)
        })

        crt.showCart();
    },
    /*********************************************************/
    showCart:function(){
        var yourCart = localStorage.getItem('yourCart')
        if(yourCart !='' && yourCart != null && yourCart != undefined){
            var row =''
            var yourCart = JSON.parse(yourCart)
            yourCart.forEach(function(item){
                row +='<div class="row specific-product bg-white py-2 my-2">'+
                    '<div class="prd-libray-img me-1 col-md-2 col-xs-12 col-sm-12">'+
                        '<img class="img-thumbnail" src="'+libary_path+item.prd_color+'" alt="Thiet ke web Anh Ho" style="cursor: pointer">' +
                        '<input type="hidden" class="prd_color" value="'+item.prd_color+'">'+
                        '</div>'+
                        '<div class="d-flex flex-column col-md-9 col-xs-12 col-sm-12">'+
                        '<div class="row">'+
                            '<input type="hidden" class="prd_id" value="'+item.prd_id+'">'+
                            '<input type="hidden" class="prd_name" value="'+item.prd_name+'">'+
                            '<div class="col bold f-16">'+item.prd_name+'</div>'+
                        '</div>'+
                        '<div class="row">' +
                            '<input type="hidden" class="prd_price" value="'+item.prd_price+'">'+
                            '<input type="hidden" class="prd_regular_price" value="'+item.prd_regular_price+'">'+
                            ' <div class="col-4 f-15">'+numeral(item.prd_price).format('$ 0,0')+'</div>' +
                            '<div class="col-4 f-15 line-through c-aaa">'+numeral(item.prd_regular_price).format('$ 0,0')+' </div>' +
                            '<div class="col-4 bold f-15">'+numeral(item.prd_price).format('$ 0,0') +'</div>' +
                        '</div>'+
                    '<div class="row">' +
                        '<div class="col-4 f-15 c-666">Color</div>' +
                        '<div class="col-4 f-15 c-666">Size</div>' +
                        '<div class="col-4 f-15 c-666">Sex</div>' +
                    '</div>'+
                    '<div class="row">' +
                        '<div class="col-4 f-15">' +
                            '<span class="prd-img-color me-1">'+
                            '<img class="img-thumbnail img-circle selected" src="'+libary_path+item.prd_color+'" alt="Thiet ke web Anh Ho" style="cursor: pointer">'+
                            '</span>'+
                        '</div>' +
                        '<div class="col-4 f-15 bold">'+item.prd_size+'</div>' +
                        '<div class="col-4 bold f-15 bold">'+item.prd_sex+'</div>' +
                    '</div>' +
                    '<div class="row mt-1">' +
                        '<div class="col-4 d-inline fit-box">' +
                            '<div class="input-group closest-btn-action">'+
                                '<button class="btn btn-outline-secondary minus-prduct-btn" type="button" >-</button>'+
                                '<input type="text" class="form-control amount-prduct" value="'+item.amount+'" placeholder="" aria-label="Example text with button addon">'+
                                '<button class="btn btn-outline-secondary plus-prduct-btn" type="button">+</button>'+
                            '</div>'+
                        '</div>' +
                        '<div class="col-4 align-items-center flex"><i class="fa fa-trash c-ff0000"></i></div>' +
                    '</div>'+
                '</div>'+
            '</div>'
            })

            $('#show-cart').html(row)
            crt.amountOfMoney()
        }
    },
    /***************************************************/
    amountOfMoney:function(discount,app_dicount){
        var yourCart = localStorage.getItem('yourCart')
        if(yourCart !='' && yourCart != null && yourCart != undefined){
            var yourCart = JSON.parse(yourCart)
            var amount_of_money=0
            yourCart.forEach(function(item){
                amount_of_money += parseFloat(item.prd_price)
            })
        }
        //create table shipping fee
        //create table discount
        var shipping_fee = 0
        var total = amount_of_money + parseFloat(shipping_fee)
        if(parseFloat(discount) >0){
            total =total - parseFloat(discount)
        }

        discount = numeral(discount).format('$ 0,0')
        total = numeral(total).format('$ 0,0')
        amount_of_money = numeral(amount_of_money).format('$ 0,0')
        $('.amount-of-money').text(amount_of_money)
        $('.total-money').text(total)
        $('.discount').text(discount)
    },
    /*********************************************************/
    checkDiscountCode:function(discount_code){
        var link3 =api_link+'get_discount';
        var discount_code = $('#p-cart .discount-code').val()
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{discount_code:discount_code},
            //contentType: 'application/json',
            success: function (res) {
                if(res.discount.length > 0){
                    var data = res.discount[0]
                    console.log(data.discount_amount)
                    crt.amountOfMoney(data.discount_amount,data.discount_amount)
                }
            },
            error : function (status,res,error) { }

        });
    }
    /*********************************************************/
}
var crt = new cart();
$(function(){
    crt.init();
});