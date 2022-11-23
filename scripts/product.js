fetch('https://github.com/inochinonamae/ProductRestAPI'
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
