// Load the header, nav and footer
$.get('/templates/header.html', function(data){
    $('#header-placeholder').replaceWith(data)
})

$.get('/templates/navigation.html', function(data){
    $('.nav-placeholder').replaceWith(data)
})

$.get('/templates/footer.html', function(data){
    $('#footer-placeholder').replaceWith(data)
})

// Create Jquery Function to load the scripts 
$(function () {
    loadScript("scripts/categories.js", categoriesSetup)
    // loadScript("scripts/products.js", productsSetup)
});

var categoriesSetup = function () {
    let categories = new Categories()
    categories.getAllCategories();
    categories.getWomenCategories();
    categories.getMenCategories();
    // categories.getClearanceCategories();
    categories.getWomenSingleCategoryItem()
}

var productsSetup = function () {
    console.log('Products here')
}



// --------------------------------------------
// url = path of script that we are loading
// callback = Pass the callback so we know how it got push out

function loadScript(url, callback) {
    var head = document.head;
    var script = document.createElement("script");
    script.type = "text/javascript";
// scripts source
    script.src = url;
// When the script is pull its gonna hit this callback
// Callback is another function that we will use to add these scripts to the front end
    script.onreadystatechange = callback;
    script.onload = callback;
    // Append the script to HTML head
    head.appendChild(script);
}