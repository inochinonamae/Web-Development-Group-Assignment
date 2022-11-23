

fetch('https://inochinonamae.github.io/ProductRestAPI/product.JSON'
)
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log('NOT SUCCESSFUL')
        }
    })

    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

// (Check if the api is promise or others)
