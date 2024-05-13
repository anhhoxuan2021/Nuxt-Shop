$(document).on('focusin submit', 'input.input-currency', function () {
    $(this).prop('type', 'text');
    if (this.value && this.value != '') {
        var value = numeral(this.value).value();
        $(this).prop('type', 'number');
        $(this).val(value);
    }
}).on('focusout', '.input-currency, .currency', function () {
        if (this.value && this.value != '') {
            var value = numeral(this.value).format('$ 0,0.00');
            $(this).prop('type', 'text');
            $(this).val(value);
        }
    }).on();

/******************Shipping fee******************/
var shippingFee ={
    hcm_location :5,
    hn_location: 10
}

/************************************/
$(".input-currency").keypress(function (e) {
    var str1 = $(this).val();
    var ch = (str1.split(".").length - 1);
    var length = str1.length;
    if (length < 1 && e.which == 46) {
        return false;
    }
    if (ch > 0 && e.which == 46) {
        return false;
    }
    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
        if (e.keyCode === 13) {

        }
        return false;
    }

});

(function () {
    var yourCart = localStorage.getItem('yourCart')
    if(yourCart !='' && yourCart != null && yourCart != undefined){
        var yourCart = JSON.parse(yourCart)
        var amount =0;
        yourCart.forEach(function(itm){
            amount += parseInt(itm.amount)
            $('.amount-of-product-cart').text(amount)
        })
    }else{
        localStorage.setItem('yourCart','');
    }
})();

var api_link ="http://banhangonline:8000/";
var libary_path = api_link+"images/"