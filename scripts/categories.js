class Categories {
    constructor() {
        this.apiURL = "https://inochinonamae.github.io/ProductRestAPI/"
    }
    // Create a function called getAllCategories
    getAllCategories() {
        // using ajax, but can use fetch normally
        $.ajax({
            type: 'GET',
            url: this.apiURL + "Categories.json",
            success: function (data) {
                $(data).each(function (index, category) {
                    $('.categories').append(

                        '<div class="dropdown ' + category + '_dropdown"><button class="dropbtn"><a>' + category + '</a></button></div>'
                    );
                })
            },

        });
    }

    getWomenCategories() {
        // using ajax, but can use fetch normally
        $.ajax({
            type: 'GET',
            url: this.apiURL + "Categories_women.json",
            success: function (data) {

                $('.Women_dropdown').append('<div class="dropdown-content" id="women_dropdown-content"></div>');
                $(data).each(function (index, category) {
                    $('#women_dropdown-content').append(
                        '<a href="section_women_' + category + '.html?category=' + category + '">' + category + '</a>'
                    );
                })
            },
        })
    };

    getMenCategories() {
        // using ajax, but can use fetch normally
        $.ajax({
            type: 'GET',
            url: this.apiURL + "Categories_men.json",
            success: function (data) {

                $('.Men_dropdown').append('<div class="dropdown-content" id="men_dropdown-content">');
                $(data).each(function (index, category) {
                    $('#men_dropdown-content').append(
                        '<a href="section_men_' + category + '.html?category=' + category + '">' + category + '</a>'
                    );
                })
            },
        })
    };

    // getClearanceCategories() {
    //     // using ajax, but can use fetch normally
    //     $.ajax({
    //         type: 'GET',
    //         url: this.apiURL + "Categories_men.json",
    //         success: function (data) {
    //             $(data).each(function (index, category) {
    //                 $('.women_men').append(

    //                     '<a href="section_men_' + category + '.html?category=' + category + '">' + category+'</a>'
    //                 );
    //             })
    //         },
    //     })
    // };

    getWomenSingleCategoryItem(slug) {
        // using ajax, but can use fetch normally
        $.ajax({
            type: 'GET',
            url: this.apiURL + "Category/Women_Jackets.json",
            success: function (data) {
                console.log(data);
                $(data).each(function (index, products) {
                    $('.products').append(
                        '<div class="col-md-6"><a href="product.html?productid"=' + products.id + '" > <div class= "col"><div class= "row"><img src="'+  products.images  +'" class = "img_fluid"></div>' + products.title + '</div></a></div></div>'
                    )
                });


            }
        })

    }

    getManSingleCategoryItem(slug) {
        // using ajax, but can use fetch normally
        $.ajax({
            type: 'GET',
            url: this.apiURL + "Category/Women_Jackets.json",
            success: function (data) {
                console.log(data);
                $(data).each(function (index, products) {
                    $('.products').append(
                        '<div class="col-md-6"><a href="product.html?productid"=' + products.id + '" > <div class= "col"><div class= "row"><img src="'+  products.images  +'" class = "img_fluid"></div>' + products.title + '</div></a></div></div>'
                    )
                });


            }
        })

    }
}

    // This is fetch Version
    // getAllCategories() {
    //     fetch('https://inochinonamae.github.io/ProductRestAPI/Categories.json')
    //         .then(res => res.json())
    //         .then(json => console.log(json));
    // }



