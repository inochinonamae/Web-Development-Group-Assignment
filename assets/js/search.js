
        document.addEventListener("DOMContentLoaded", function() {

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.jsonbin.io/v3/b/638b7617a3c728450ede8f78?meta=false', true);
xhr.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
};
xhr.send();

var searchBar = document.createElement('input');
searchBar.setAttribute('type', 'text');
searchBar.setAttribute('id', 'searchBar');
searchBar.setAttribute('placeholder', 'Search');
document.body.appendChild(searchBar);

var searchButton = document.createElement('button');
searchButton.setAttribute('id', 'searchButton');
searchButton.innerHTML = 'Search';
document.body.appendChild(searchButton);

var searchResult = document.createElement('div');
searchResult.setAttribute('id', 'searchResult');
document.body.appendChild(searchResult);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.jsonbin.io/v3/b/638b7617a3c728450ede8f78?meta=false', true);
xhr.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  var searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', function () {
    var searchBar = document.getElementById('searchBar');
    var searchResult = document.getElementById('searchResult');
    searchResult.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
      if (data[i].title.toLowerCase().includes(searchBar.value.toLowerCase())) {
        var searchResultlink = document.createElement('a');
        searchResultlink.setAttribute('href', data[i].link);
        searchResult.appendChild(searchResultlink);
        var searchResultItem = document.createElement('div');
        searchResultItem.setAttribute('class', 'searchResultItem');
        searchResultlink.appendChild(searchResultItem);
        var searchResultItemImage = document.createElement('img');
        searchResultItemImage.setAttribute('src', data[i].images);
        searchResultItem.appendChild(searchResultItemImage);
        var searchResultItemTitle = document.createElement('div');
        searchResultItemTitle.setAttribute('class', 'searchResultItemTitle');
        searchResultItemTitle.innerHTML = data[i].title;
        searchResultItem.appendChild(searchResultItemTitle);
        var searchResultItemPrice = document.createElement('div');
        searchResultItemPrice.setAttribute('class', 'searchResultItemPrice');
        searchResultItemPrice.innerHTML = data[i].price;
        searchResultItem.appendChild(searchResultItemPrice);
      }
    }
  });
};
xhr.send();
});
