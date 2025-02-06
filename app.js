function fnCarregarDados(){
    const url = "https://api.github.com/users/ClaudineiClemente48"

fetch(url)
  .then(response => {
    return response.json()
  })
  .then(dados => {
    console.dir(dados)
  })


}


