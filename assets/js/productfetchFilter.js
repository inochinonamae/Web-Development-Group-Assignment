jQuery(document).ready(function ($) {
$.ajax({
    type: 'GET',
    url: "https://api.jsonbin.io/v3/b/638b7617a3c728450ede8f78?meta=false",
    success: function (data) {

        $('.filters-content').append('<div class="row grid">');
        $(data).each(function (index, products) {
            $('.grid').append(
                '<div class="col-lg-4 col-md-4 all ' + products.filter + '"><div class="product-item ' + products.filter +
                '"><a href="#"><img src="' + products.images + '" alt=""></a><div class="down-content"><a href="#"><h4>' +
                products.title + '</h4></a><h6>' + products.price + '</h6><p>' + products.description +
                '</p><ul class="stars"><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li></ul><span>Reviews ('
                + products.reviewsNumber + ')</span></div></div>');
        })
        $('.filters-content').append('</div>');
    },
});
})