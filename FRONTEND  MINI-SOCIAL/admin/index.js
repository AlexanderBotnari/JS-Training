//CRUD

function showEntities(response){
     console.log(response)

     let tableHead = ``

     response.data.forEach((entity) => {
        tableHead = `<tr>`
         Object.keys(entity).forEach((prop) => {
            tableHead += `<th>${prop}</td>`
         })
         tableHead += `<th>ACTIONS</th>`
         tableHead += `</tr>`
     });

     let tableBody = ``

     response.data.forEach(entity => {
         tableBody += `<tr>`
         Object.keys(entity).forEach(prop => {
             tableBody += `<td>${entity[prop]}</td>`
         })
         tableBody += `<td><button>delete</button></td>`
         tableBody += `</tr>`
     });
     //create visual table
     let template = `
                <table border="1">
                   ${tableHead}
                   ${tableBody}
                </table>`

    let contentDiv = document.getElementById("content")
    contentDiv.innerHTML = template
}

function processResponse(response){
    return response.json()
}

function showError(error){
    console.log(error)
    let footerDiv = document.getElementById("footer")
    footerDiv.innerHTML = `ERROR , cannot load data <br> REASON : ${error}`
}

function getEntities(type){
    const URL = `/${type}/index.json`
    fetch(URL)
               .then(processResponse)
               .then(showEntities)
               .catch(showError)
}

getEntities("posts")