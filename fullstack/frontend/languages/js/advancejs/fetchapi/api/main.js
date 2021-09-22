fetch("https://dog.ceo/api/breeds/list/all").then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data)
})