fetch("https://github.com/inochinonamae/ProductRestAPI/blob/main/product.JSON")
    .then((response) => {
        console.log("Yes");
        console.log(response);
        return response.json();
    })
    .then((jsonData) => {
        console.log("We got all")
        console.log(jsonData)
    });